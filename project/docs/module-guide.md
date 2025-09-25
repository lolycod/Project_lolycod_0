# 模块开发指南

## 模块管理器概述

江湖情缘系统采用统一的模块管理器 (ModuleManager) 来管理所有功能模块的生命周期，提供依赖注入、错误恢复、性能监控等企业级功能。

## 模块生命周期

```
UNREGISTERED → REGISTERED → INITIALIZING → INITIALIZED → DESTROYING → DESTROYED
                    ↓              ↓
                  ERROR ←────────────┘
```

### 状态说明

- **UNREGISTERED**: 模块未注册
- **REGISTERED**: 模块已注册，等待初始化
- **INITIALIZING**: 模块正在初始化
- **INITIALIZED**: 模块初始化完成，正常运行
- **DESTROYING**: 模块正在销毁
- **DESTROYED**: 模块已销毁
- **ERROR**: 模块出现错误

## 创建新模块

### 1. 基础模块结构

```javascript
class YourModule {
    constructor(config = {}) {
        // 合并默认配置
        this.config = {
            enabled: true,
            // 其他默认配置
            ...config
        };
        
        // 初始化属性
        this.isInitialized = false;
        this.elements = {};
        
        console.log('🔧 YourModule 初始化完成', this.config);
    }
    
    /**
     * 初始化模块
     * @returns {Object} 初始化结果 { success: boolean, message?: string, error?: string }
     */
    init() {
        try {
            if (!this.config.enabled) {
                return { success: false, message: '模块已禁用' };
            }
            
            // 执行初始化逻辑
            this.setupElements();
            this.bindEvents();
            this.startServices();
            
            this.isInitialized = true;
            console.log('✅ YourModule 初始化成功');
            
            return { success: true, message: '模块初始化成功' };
            
        } catch (error) {
            console.error('❌ YourModule 初始化失败:', error);
            return { success: false, error: error.message };
        }
    }
    
    /**
     * 销毁模块
     */
    destroy() {
        try {
            this.stopServices();
            this.unbindEvents();
            this.cleanupElements();
            
            this.isInitialized = false;
            console.log('🗑️ YourModule 已销毁');
            
        } catch (error) {
            console.error('❌ YourModule 销毁失败:', error);
        }
    }
    
    /**
     * 更新配置
     * @param {Object} newConfig 新配置
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        console.log('🔄 YourModule 配置已更新', this.config);
        
        // 重新应用配置
        if (this.isInitialized) {
            this.applyConfig();
        }
    }
    
    // 私有方法
    setupElements() {
        // 设置DOM元素
    }
    
    bindEvents() {
        // 绑定事件监听器
    }
    
    startServices() {
        // 启动服务（如定时器、网络请求等）
    }
    
    stopServices() {
        // 停止服务
    }
    
    unbindEvents() {
        // 解绑事件监听器
    }
    
    cleanupElements() {
        // 清理DOM元素
    }
    
    applyConfig() {
        // 应用新配置
    }
}
```

### 2. 注册模块

```javascript
// 注册模块到管理器
moduleManager.register('yourModule', YourModule, {
    config: {
        // 模块特定配置
        customOption: 'value'
    },
    dependencies: ['otherModule'],  // 依赖的其他模块
    autoInit: true,                 // 是否自动初始化
    priority: 5,                    // 初始化优先级（数字越大越优先）
    initDelay: 0,                   // 初始化延迟（毫秒）
    maxRetries: 3                   // 最大重试次数
});
```

### 3. 模块配置

```javascript
// 在 config.js 中添加模块配置
const USER_SIMPLE_CONFIG = {
    // 其他配置...
    
    yourModule: {
        enabled: true,
        customOption: 'value',
        // 其他模块配置
    }
};
```

## 高级功能

### 依赖管理

```javascript
// 模块A依赖模块B
moduleManager.register('moduleA', ModuleA, {
    dependencies: ['moduleB']
});

// 模块管理器会自动确保依赖顺序
// 初始化顺序：moduleB → moduleA
```

### 错误恢复

```javascript
class RobustModule {
    init() {
        try {
            // 可能失败的初始化逻辑
            this.riskyOperation();
            return { success: true };
            
        } catch (error) {
            // 错误恢复逻辑
            this.fallbackOperation();
            return { success: false, error: error.message };
        }
    }
    
    riskyOperation() {
        // 主要功能实现
    }
    
    fallbackOperation() {
        // 降级功能实现
    }
}
```

### 配置热更新

```javascript
class ConfigurableModule {
    constructor(config) {
        super(config);
        
        // 监听配置更新事件
        window.addEventListener('moduleConfigUpdated', (event) => {
            if (event.detail.changes.includes('yourModule')) {
                this.handleConfigUpdate();
            }
        });
    }
    
    handleConfigUpdate() {
        // 获取新配置
        const newConfig = ConfigManager.get('yourModule', {});
        this.updateConfig(newConfig);
    }
}
```

## 内置模块参考

### TimeDisplayModule

时间显示模块，提供实时时间显示和整点特效。

```javascript
// 配置选项
timeDisplay: {
    enabled: true,                  // 是否启用
    showSeconds: true,              // 显示秒数
    format: 'YYYY年MM月DD日 HH:mm:ss', // 时间格式
    hourlyEffect: true,             // 整点特效
    effectDuration: 3000,           // 特效持续时间
    updateInterval: 1000            // 更新间隔
}

// API方法
timeDisplayModule.getCurrentTimeInfo();  // 获取当前时间信息
timeDisplayModule.testHourlyEffect();    // 测试整点特效
```

### LunarCalendarModule

农历显示模块，提供农历信息和节气显示。

```javascript
// 配置选项
lunarCalendar: {
    enabled: true,              // 是否启用
    showGanZhi: true,          // 显示干支
    showSolarTerm: true,       // 显示节气
    animationDuration: 1000,   // 动画持续时间
    scrollEffect: true         // 滚动效果
}

// API方法
lunarCalendarModule.getCurrentLunarInfo();  // 获取农历信息
lunarCalendarModule.updateLunarInfo();      // 手动更新信息
```

## 模块管理器 API

### 基础操作

```javascript
// 注册模块
moduleManager.register(name, moduleClass, options);

// 初始化单个模块
await moduleManager.initModule(name, config);

// 销毁单个模块
await moduleManager.destroyModule(name);

// 初始化所有模块
await moduleManager.initAllModules();

// 销毁所有模块
await moduleManager.destroyAllModules();
```

### 状态查询

```javascript
// 获取模块实例
const instance = moduleManager.getInstance(name);

// 获取模块状态
const state = moduleManager.getModuleState(name);

// 获取所有模块状态
const allStates = moduleManager.getAllModuleStates();
```

### 事件监听

```javascript
// 监听模块初始化完成
window.addEventListener('moduleInitialized', (event) => {
    console.log('模块初始化完成:', event.detail);
});

// 监听模块初始化失败
window.addEventListener('moduleInitFailed', (event) => {
    console.error('模块初始化失败:', event.detail);
});

// 监听所有模块初始化完成
window.addEventListener('allModulesInitialized', (event) => {
    console.log('所有模块初始化完成:', event.detail);
});
```

## 调试和测试

### 调试工具

```javascript
// 获取模块管理器状态
const status = window.getModuleManagerStatus();
console.log('模块管理器状态:', status);

// 手动初始化模块
window.initModule('yourModule').then(instance => {
    console.log('模块初始化完成:', instance);
});

// 手动销毁模块
window.destroyModule('yourModule').then(result => {
    console.log('模块销毁完成:', result);
});

// 获取模块实例
const instance = window.getModuleInstance('yourModule');
console.log('模块实例:', instance);
```

### 测试用例

```javascript
// 模块测试示例
async function testYourModule() {
    try {
        // 1. 注册模块
        const registered = moduleManager.register('testModule', YourModule, {
            config: { testMode: true }
        });
        console.assert(registered, '模块注册失败');
        
        // 2. 初始化模块
        const instance = await moduleManager.initModule('testModule');
        console.assert(instance, '模块初始化失败');
        
        // 3. 测试模块功能
        const result = instance.someMethod();
        console.assert(result.success, '模块功能测试失败');
        
        // 4. 销毁模块
        const destroyed = await moduleManager.destroyModule('testModule');
        console.assert(destroyed, '模块销毁失败');
        
        console.log('✅ 模块测试通过');
        
    } catch (error) {
        console.error('❌ 模块测试失败:', error);
    }
}
```

## 最佳实践

### 1. 模块设计原则

- **单一职责**：每个模块只负责一个特定功能
- **松耦合**：模块间通过事件或配置通信，避免直接依赖
- **高内聚**：模块内部功能紧密相关
- **可配置**：通过配置控制模块行为
- **可测试**：提供清晰的API和状态查询

### 2. 错误处理

- 所有公共方法都应该有错误处理
- 初始化失败时提供降级方案
- 记录详细的错误日志
- 避免错误传播到其他模块

### 3. 性能优化

- 延迟初始化非关键模块
- 及时清理资源和事件监听器
- 避免内存泄漏
- 监控模块性能指标

### 4. 文档规范

- 详细的配置选项说明
- 完整的API文档
- 使用示例和测试用例
- 版本变更记录

---

**提示**：开发新模块时，建议先参考现有的 TimeDisplayModule 和 LunarCalendarModule 实现，了解标准的模块结构和最佳实践。
