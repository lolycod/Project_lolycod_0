// 🚀 公共页面初始化模块
// ===================================================================
// 提取各页面的公共初始化逻辑，实现代码复用，降低维护成本
// ===================================================================

/**
 * 公共页面初始化管理器
 */
class CommonPageInitializer {
    constructor() {
        this.pageName = '';
        this.initStartTime = Date.now();
        this.isInitialized = false;
        this.customInitCallbacks = [];
        
        console.log('🚀 公共页面初始化器启动...');
    }
    
    /**
     * 初始化页面公共功能
     * @param {string} pageName - 页面名称
     * @param {Object} options - 初始化选项
     */
    initPageCommon(pageName, options = {}) {
        this.pageName = pageName;
        console.log(`📋 ${pageName}页面DOM加载完成`);
        
        try {
            // 1. 更新UI文本配置
            this.updateUIText();
            
            // 2. 启用配置热更新机制
            this.enableHotReload();
            
            // 3. 设置错误处理
            this.setupErrorHandling();
            
            // 4. 启用性能监控
            this.setupPerformanceMonitoring();
            
            // 5. 执行自定义初始化回调
            this.executeCustomCallbacks();
            
            this.isInitialized = true;
            console.log(`✅ ${pageName}页面公共初始化完成！`);
            
        } catch (error) {
            console.error(`❌ ${pageName}页面初始化失败:`, error);
            throw error;
        }
    }
    
    /**
     * 更新UI文本配置
     */
    updateUIText() {
        try {
            if (typeof updateUIText === 'function') {
                updateUIText();
                console.log('✅ UI文本配置更新完成');
            } else {
                console.warn('⚠️ updateUIText函数未找到');
            }
        } catch (error) {
            console.error('❌ UI文本更新失败:', error);
        }
    }
    
    /**
     * 启用配置热更新机制
     */
    enableHotReload() {
        try {
            if (typeof enableConfigHotReload === 'function') {
                enableConfigHotReload();
                console.log('✅ 配置热更新机制已启用');
            } else {
                console.warn('⚠️ enableConfigHotReload函数未找到');
            }
        } catch (error) {
            console.error('❌ 配置热更新启用失败:', error);
        }
    }
    
    /**
     * 设置全局错误处理
     */
    setupErrorHandling() {
        // JavaScript错误处理
        if (!window.commonErrorHandlerAdded) {
            window.addEventListener('error', (event) => {
                console.error('❌ JavaScript错误:', event.error);
                this.handleError('JavaScript Error', event.error);
            });
            
            // Promise错误处理
            window.addEventListener('unhandledrejection', (event) => {
                console.error('❌ Promise错误:', event.reason);
                this.handleError('Promise Rejection', event.reason);
                event.preventDefault(); // 防止错误显示在控制台
            });
            
            window.commonErrorHandlerAdded = true;
            console.log('✅ 全局错误处理已设置');
        }
    }
    
    /**
     * 处理错误
     * @param {string} type - 错误类型
     * @param {Error} error - 错误对象
     */
    handleError(type, error) {
        const errorInfo = {
            type: type,
            message: error?.message || error,
            stack: error?.stack,
            page: this.pageName,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
        };
        
        // 这里可以添加错误上报逻辑
        console.group(`❌ ${type} 详细信息`);
        console.error('错误信息:', errorInfo);
        console.groupEnd();
    }
    
    /**
     * 设置性能监控
     */
    setupPerformanceMonitoring() {
        try {
            if (performance.timing) {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
                console.log(`⚡ 页面加载时间: ${loadTime}ms`);
                
                // 性能警告
                if (loadTime > 3000) {
                    console.warn('⚠️ 页面加载较慢，建议优化');
                }
                
                // 记录初始化时间
                const initTime = Date.now() - this.initStartTime;
                console.log(`🔧 初始化耗时: ${initTime}ms`);
                
            } else {
                console.warn('⚠️ Performance API不可用');
            }
        } catch (error) {
            console.error('❌ 性能监控设置失败:', error);
        }
    }
    
    /**
     * 添加自定义初始化回调
     * @param {Function} callback - 回调函数
     * @param {string} name - 回调名称
     */
    addCustomCallback(callback, name = 'anonymous') {
        if (typeof callback === 'function') {
            this.customInitCallbacks.push({ callback, name });
            console.log(`📝 已添加自定义初始化回调: ${name}`);
        } else {
            console.warn('⚠️ 无效的回调函数:', name);
        }
    }
    
    /**
     * 执行自定义初始化回调
     */
    executeCustomCallbacks() {
        this.customInitCallbacks.forEach(({ callback, name }) => {
            try {
                callback();
                console.log(`✅ 自定义回调执行成功: ${name}`);
            } catch (error) {
                console.error(`❌ 自定义回调执行失败: ${name}`, error);
            }
        });
    }
    
    /**
     * 获取初始化状态
     */
    getInitStatus() {
        return {
            isInitialized: this.isInitialized,
            pageName: this.pageName,
            initTime: Date.now() - this.initStartTime,
            callbackCount: this.customInitCallbacks.length
        };
    }
}

// 创建全局实例
const commonPageInit = new CommonPageInitializer();

/**
 * 简化的页面初始化函数
 * @param {string} pageName - 页面名称
 * @param {Object} options - 初始化选项
 */
function initPageCommon(pageName, options = {}) {
    return commonPageInit.initPageCommon(pageName, options);
}

/**
 * 添加页面特定的初始化逻辑
 * @param {Function} callback - 初始化回调函数
 * @param {string} name - 回调名称
 */
function addPageInitCallback(callback, name) {
    return commonPageInit.addCustomCallback(callback, name);
}

/**
 * 获取初始化状态
 */
function getPageInitStatus() {
    return commonPageInit.getInitStatus();
}

// 导出到全局作用域
if (typeof window !== 'undefined') {
    window.CommonPageInitializer = CommonPageInitializer;
    window.commonPageInit = commonPageInit;
    window.initPageCommon = initPageCommon;
    window.addPageInitCallback = addPageInitCallback;
    window.getPageInitStatus = getPageInitStatus;
}

// 模块导出（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CommonPageInitializer,
        commonPageInit,
        initPageCommon,
        addPageInitCallback,
        getPageInitStatus
    };
}

console.log('✅ 公共页面初始化模块加载完成');
