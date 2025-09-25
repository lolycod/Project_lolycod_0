// 🔧 统一模块管理器
// ===================================================================
// 负责管理所有功能模块的生命周期，包括注册、初始化、销毁和依赖管理
// 提供清晰的扩展接口供二次开发使用
// ===================================================================

/**
 * 模块状态枚举
 */
const ModuleState = {
    UNREGISTERED: 'unregistered',
    REGISTERED: 'registered',
    INITIALIZING: 'initializing',
    INITIALIZED: 'initialized',
    DESTROYING: 'destroying',
    DESTROYED: 'destroyed',
    ERROR: 'error'
};

/**
 * 统一模块管理器
 */
class ModuleManager {
    constructor() {
        this.modules = new Map(); // 存储模块信息
        this.instances = new Map(); // 存储模块实例
        this.dependencies = new Map(); // 存储模块依赖关系
        this.initOrder = []; // 初始化顺序
        this.isInitialized = false;
        
        console.log('🔧 模块管理器启动...');
    }
    
    /**
     * 注册模块
     * @param {string} name - 模块名称
     * @param {Class} moduleClass - 模块类
     * @param {Object} options - 模块选项
     */
    register(name, moduleClass, options = {}) {
        try {
            if (this.modules.has(name)) {
                console.warn(`⚠️ 模块 ${name} 已存在，将覆盖注册`);
            }
            
            const moduleInfo = {
                name: name,
                class: moduleClass,
                state: ModuleState.REGISTERED,
                dependencies: options.dependencies || [],
                config: options.config || {},
                autoInit: options.autoInit !== false, // 默认自动初始化
                priority: options.priority || 0, // 初始化优先级
                retryCount: 0,
                maxRetries: options.maxRetries || 3,
                initDelay: options.initDelay || 0,
                registeredAt: Date.now()
            };
            
            this.modules.set(name, moduleInfo);
            this.dependencies.set(name, moduleInfo.dependencies);
            
            console.log(`✅ 模块 ${name} 注册成功`, moduleInfo);
            
            // 重新计算初始化顺序
            this._calculateInitOrder();
            
            return true;
            
        } catch (error) {
            console.error(`❌ 模块 ${name} 注册失败:`, error);
            return false;
        }
    }
    
    /**
     * 初始化单个模块
     * @param {string} name - 模块名称
     * @param {Object} config - 配置覆盖
     */
    async initModule(name, config = {}) {
        const moduleInfo = this.modules.get(name);
        if (!moduleInfo) {
            throw new Error(`模块 ${name} 未注册`);
        }
        
        if (moduleInfo.state === ModuleState.INITIALIZED) {
            console.log(`ℹ️ 模块 ${name} 已初始化`);
            return this.instances.get(name);
        }
        
        if (moduleInfo.state === ModuleState.INITIALIZING) {
            console.log(`⏳ 模块 ${name} 正在初始化中...`);
            return null;
        }
        
        try {
            moduleInfo.state = ModuleState.INITIALIZING;
            console.log(`🚀 开始初始化模块: ${name}`);
            
            // 检查依赖
            await this._checkDependencies(name);
            
            // 延迟初始化（如果配置了延迟）
            if (moduleInfo.initDelay > 0) {
                await this._delay(moduleInfo.initDelay);
            }
            
            // 合并配置
            const finalConfig = { ...moduleInfo.config, ...config };
            
            // 创建模块实例
            const instance = new moduleInfo.class(finalConfig);
            
            // 初始化模块
            let result = { success: true };
            if (typeof instance.init === 'function') {
                result = await instance.init();
            }
            
            if (result.success !== false) {
                this.instances.set(name, instance);
                moduleInfo.state = ModuleState.INITIALIZED;
                moduleInfo.retryCount = 0;
                
                console.log(`✅ 模块 ${name} 初始化成功`);
                
                // 触发初始化完成事件
                this._emitEvent('moduleInitialized', { name, instance });
                
                return instance;
            } else {
                throw new Error(result.error || result.message || '初始化失败');
            }
            
        } catch (error) {
            moduleInfo.state = ModuleState.ERROR;
            moduleInfo.retryCount++;
            
            console.error(`❌ 模块 ${name} 初始化失败:`, error);
            
            // 重试机制
            if (moduleInfo.retryCount < moduleInfo.maxRetries) {
                console.log(`🔄 模块 ${name} 将在 ${moduleInfo.retryCount * 1000}ms 后重试 (${moduleInfo.retryCount}/${moduleInfo.maxRetries})`);
                setTimeout(() => {
                    this.initModule(name, config);
                }, moduleInfo.retryCount * 1000);
            } else {
                console.error(`💥 模块 ${name} 重试次数已达上限，初始化失败`);
                this._emitEvent('moduleInitFailed', { name, error });
            }
            
            throw error;
        }
    }
    
    /**
     * 销毁模块
     * @param {string} name - 模块名称
     */
    async destroyModule(name) {
        const moduleInfo = this.modules.get(name);
        const instance = this.instances.get(name);
        
        if (!moduleInfo || !instance) {
            console.warn(`⚠️ 模块 ${name} 不存在或未初始化`);
            return false;
        }
        
        try {
            moduleInfo.state = ModuleState.DESTROYING;
            console.log(`🗑️ 开始销毁模块: ${name}`);
            
            // 销毁模块
            if (typeof instance.destroy === 'function') {
                await instance.destroy();
            }
            
            this.instances.delete(name);
            moduleInfo.state = ModuleState.DESTROYED;
            
            console.log(`✅ 模块 ${name} 销毁成功`);
            
            // 触发销毁完成事件
            this._emitEvent('moduleDestroyed', { name });
            
            return true;
            
        } catch (error) {
            moduleInfo.state = ModuleState.ERROR;
            console.error(`❌ 模块 ${name} 销毁失败:`, error);
            throw error;
        }
    }
    
    /**
     * 初始化所有已注册的模块
     */
    async initAllModules() {
        console.log('🚀 开始初始化所有模块...');
        
        const autoInitModules = this.initOrder.filter(name => {
            const moduleInfo = this.modules.get(name);
            return moduleInfo && moduleInfo.autoInit;
        });
        
        for (const moduleName of autoInitModules) {
            try {
                await this.initModule(moduleName);
            } catch (error) {
                console.error(`❌ 模块 ${moduleName} 初始化失败，继续初始化其他模块`);
            }
        }
        
        this.isInitialized = true;
        console.log('✅ 所有模块初始化完成');
        
        // 触发全部初始化完成事件
        this._emitEvent('allModulesInitialized', { 
            total: autoInitModules.length,
            initialized: this._getInitializedModules().length
        });
    }
    
    /**
     * 销毁所有模块
     */
    async destroyAllModules() {
        console.log('🗑️ 开始销毁所有模块...');
        
        // 按相反顺序销毁
        const destroyOrder = [...this.initOrder].reverse();
        
        for (const moduleName of destroyOrder) {
            try {
                await this.destroyModule(moduleName);
            } catch (error) {
                console.error(`❌ 模块 ${moduleName} 销毁失败，继续销毁其他模块`);
            }
        }
        
        this.isInitialized = false;
        console.log('✅ 所有模块销毁完成');
    }
    
    /**
     * 获取模块实例
     * @param {string} name - 模块名称
     */
    getInstance(name) {
        return this.instances.get(name);
    }
    
    /**
     * 获取模块状态
     * @param {string} name - 模块名称
     */
    getModuleState(name) {
        const moduleInfo = this.modules.get(name);
        return moduleInfo ? moduleInfo.state : ModuleState.UNREGISTERED;
    }
    
    /**
     * 获取所有模块状态
     */
    getAllModuleStates() {
        const states = {};
        for (const [name, moduleInfo] of this.modules) {
            states[name] = {
                state: moduleInfo.state,
                hasInstance: this.instances.has(name),
                dependencies: moduleInfo.dependencies,
                retryCount: moduleInfo.retryCount
            };
        }
        return states;
    }
    
    /**
     * 检查模块依赖
     * @param {string} name - 模块名称
     */
    async _checkDependencies(name) {
        const dependencies = this.dependencies.get(name) || [];
        
        for (const depName of dependencies) {
            const depState = this.getModuleState(depName);
            
            if (depState !== ModuleState.INITIALIZED) {
                console.log(`⏳ 模块 ${name} 等待依赖 ${depName} 初始化...`);
                
                if (depState === ModuleState.UNREGISTERED) {
                    throw new Error(`依赖模块 ${depName} 未注册`);
                }
                
                // 尝试初始化依赖模块
                await this.initModule(depName);
            }
        }
    }
    
    /**
     * 计算模块初始化顺序
     */
    _calculateInitOrder() {
        const visited = new Set();
        const visiting = new Set();
        const order = [];
        
        const visit = (name) => {
            if (visiting.has(name)) {
                throw new Error(`检测到循环依赖: ${name}`);
            }
            
            if (visited.has(name)) {
                return;
            }
            
            visiting.add(name);
            
            const dependencies = this.dependencies.get(name) || [];
            for (const dep of dependencies) {
                if (this.modules.has(dep)) {
                    visit(dep);
                }
            }
            
            visiting.delete(name);
            visited.add(name);
            order.push(name);
        };
        
        // 按优先级排序模块
        const moduleNames = Array.from(this.modules.keys()).sort((a, b) => {
            const priorityA = this.modules.get(a).priority;
            const priorityB = this.modules.get(b).priority;
            return priorityB - priorityA; // 高优先级先初始化
        });
        
        for (const name of moduleNames) {
            visit(name);
        }
        
        this.initOrder = order;
        console.log('📋 模块初始化顺序:', order);
    }
    
    /**
     * 获取已初始化的模块
     */
    _getInitializedModules() {
        return Array.from(this.modules.keys()).filter(name => 
            this.getModuleState(name) === ModuleState.INITIALIZED
        );
    }
    
    /**
     * 延迟函数
     */
    _delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * 触发事件
     */
    _emitEvent(eventName, data) {
        const event = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(event);
    }
}

// 创建全局模块管理器实例
const moduleManager = new ModuleManager();

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.ModuleManager = ModuleManager;
    window.ModuleState = ModuleState;
    window.moduleManager = moduleManager;
}

// 模块导出（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ModuleManager,
        ModuleState,
        moduleManager
    };
}

console.log('✅ 模块管理器加载完成');
