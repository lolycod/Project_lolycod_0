# API 参考文档

## 全局对象

### window.moduleManager

模块管理器实例，负责管理所有功能模块。

#### 方法

##### register(name, moduleClass, options)

注册新模块到管理器。

**参数**：
- `name` (string): 模块名称
- `moduleClass` (Class): 模块类
- `options` (Object): 注册选项
  - `config` (Object): 模块配置
  - `dependencies` (Array): 依赖模块列表
  - `autoInit` (boolean): 是否自动初始化，默认 true
  - `priority` (number): 初始化优先级，默认 0
  - `initDelay` (number): 初始化延迟（毫秒），默认 0
  - `maxRetries` (number): 最大重试次数，默认 3

**返回值**：boolean - 注册是否成功

**示例**：
```javascript
moduleManager.register('myModule', MyModule, {
    config: { enabled: true },
    dependencies: ['timeDisplay'],
    priority: 5
});
```

##### initModule(name, config)

初始化指定模块。

**参数**：
- `name` (string): 模块名称
- `config` (Object): 配置覆盖，可选

**返回值**：Promise<Object> - 模块实例

##### destroyModule(name)

销毁指定模块。

**参数**：
- `name` (string): 模块名称

**返回值**：Promise<boolean> - 销毁是否成功

##### getInstance(name)

获取模块实例。

**参数**：
- `name` (string): 模块名称

**返回值**：Object|null - 模块实例

##### getModuleState(name)

获取模块状态。

**参数**：
- `name` (string): 模块名称

**返回值**：string - 模块状态

##### getAllModuleStates()

获取所有模块状态。

**返回值**：Object - 所有模块状态映射

### window.ConfigManager

配置管理器，提供配置读取和管理功能。

#### 方法

##### get(path, defaultValue)

获取配置值。

**参数**：
- `path` (string): 配置路径，如 'timeDisplay.enabled'
- `defaultValue` (any): 默认值，可选

**返回值**：any - 配置值

**示例**：
```javascript
const enabled = ConfigManager.get('timeDisplay.enabled', true);
```

##### set(path, value)

设置配置值。

**参数**：
- `path` (string): 配置路径
- `value` (any): 配置值

##### syncUserConfig()

同步用户配置到系统配置。

**返回值**：Object - 同步结果

##### enableHotReload()

启用配置热更新。

### 配置同步函数

#### window.syncUserSimpleConfig(options)

同步用户简化配置到系统配置。

**参数**：
- `options` (Object): 同步选项
  - `forceUpdate` (boolean): 强制更新，默认 false
  - `partialUpdate` (boolean): 部分更新，默认 true
  - `enableDiffCheck` (boolean): 启用差异检测，默认 true
  - `progressCallback` (Function): 进度回调函数

**返回值**：Object - 同步结果
- `success` (boolean): 是否成功
- `message` (string): 结果消息
- `syncTime` (number): 同步耗时（毫秒）
- `changes` (Array): 变更的配置块
- `validation` (Object): 验证结果

**示例**：
```javascript
const result = syncUserSimpleConfig({
    partialUpdate: true,
    progressCallback: (progress) => {
        console.log(`同步进度: ${progress.progress}%`);
    }
});
```

#### window.detectConfigChanges()

检测配置变化。

**返回值**：Array - 变化的配置块列表

#### window.validateUserSimpleConfig()

验证用户简化配置。

**返回值**：Object - 验证结果
- `isValid` (boolean): 是否有效
- `errors` (Array): 错误列表

### 页面初始化函数

#### window.initPageCommon(pageName, options)

初始化页面公共功能。

**参数**：
- `pageName` (string): 页面名称
- `options` (Object): 初始化选项

#### window.addPageInitCallback(callback, name)

添加页面初始化回调。

**参数**：
- `callback` (Function): 回调函数
- `name` (string): 回调名称

#### window.getPageInitStatus()

获取页面初始化状态。

**返回值**：Object - 初始化状态信息

### 模块特定API

#### 时间显示模块

##### window.testHourlyEffect()

测试整点特效。

##### window.getTimeModuleInfo()

获取时间模块信息。

**返回值**：Object|null - 时间信息

#### 农历显示模块

##### window.getLunarInfo()

获取农历信息。

**返回值**：Object|null - 农历信息

### 调试和管理函数

#### window.getModuleManagerStatus()

获取模块管理器状态。

**返回值**：Object - 状态信息
- `isInitialized` (boolean): 是否已初始化
- `moduleStates` (Object): 模块状态映射
- `initOrder` (Array): 初始化顺序

#### window.initModule(moduleName, config)

手动初始化模块。

**参数**：
- `moduleName` (string): 模块名称
- `config` (Object): 配置覆盖

**返回值**：Promise<Object> - 模块实例

#### window.destroyModule(moduleName)

手动销毁模块。

**参数**：
- `moduleName` (string): 模块名称

**返回值**：Promise<boolean> - 销毁结果

#### window.registerModule(name, moduleClass, options)

注册新模块（供二次开发使用）。

**参数**：
- `name` (string): 模块名称
- `moduleClass` (Class): 模块类
- `options` (Object): 注册选项

**返回值**：boolean - 注册结果

#### window.getModuleInstance(moduleName)

获取模块实例（供二次开发使用）。

**参数**：
- `moduleName` (string): 模块名称

**返回值**：Object|null - 模块实例

### 配置管理函数

#### window.refreshUserConfig()

手动刷新用户配置。

**返回值**：Object - 刷新结果

#### window.updateConfigSection(sectionName, progressCallback)

更新指定配置块。

**参数**：
- `sectionName` (string): 配置块名称
- `progressCallback` (Function): 进度回调

## 事件系统

### 配置相关事件

#### configSyncCompleted

配置同步完成事件。

**事件详情**：
- `syncTime` (number): 同步耗时
- `changes` (Array): 变更列表
- `partialUpdate` (boolean): 是否部分更新
- `validation` (Object): 验证结果

**示例**：
```javascript
window.addEventListener('configSyncCompleted', (event) => {
    console.log('配置同步完成:', event.detail);
});
```

#### configSyncError

配置同步错误事件。

**事件详情**：
- `error` (string): 错误消息
- `syncTime` (number): 同步耗时
- `stack` (string): 错误堆栈

#### userConfigUpdated

用户配置更新事件。

#### moduleConfigUpdated

模块配置更新事件。

**事件详情**：
- `changes` (Array): 变更的配置块

### 模块相关事件

#### moduleInitialized

模块初始化完成事件。

**事件详情**：
- `name` (string): 模块名称
- `instance` (Object): 模块实例

#### moduleInitFailed

模块初始化失败事件。

**事件详情**：
- `name` (string): 模块名称
- `error` (string): 错误信息

#### moduleDestroyed

模块销毁完成事件。

**事件详情**：
- `name` (string): 模块名称

#### allModulesInitialized

所有模块初始化完成事件。

**事件详情**：
- `total` (number): 总模块数
- `initialized` (number): 已初始化模块数

## 数据结构

### ModuleState 枚举

```javascript
const ModuleState = {
    UNREGISTERED: 'unregistered',
    REGISTERED: 'registered',
    INITIALIZING: 'initializing',
    INITIALIZED: 'initialized',
    DESTROYING: 'destroying',
    DESTROYED: 'destroyed',
    ERROR: 'error'
};
```

### 配置结构

#### USER_SIMPLE_CONFIG

```javascript
{
    website: {
        title: string,
        subtitle: string,
        heroName: string,
        backgroundImage: string
    },
    photos: Array<{
        file: string,
        title: string,
        description: string,
        poem: string
    }>,
    stories: Array<{
        title: string,
        content: string,
        poem: string
    }>,
    time: {
        startDate: string,
        startDays: number
    },
    texts: {
        pages: Object,
        buttons: Object
    }
}
```

## 错误代码

### 配置错误

- `CONFIG_NOT_FOUND`: 配置未找到
- `CONFIG_INVALID`: 配置格式无效
- `CONFIG_SYNC_FAILED`: 配置同步失败

### 模块错误

- `MODULE_NOT_REGISTERED`: 模块未注册
- `MODULE_INIT_FAILED`: 模块初始化失败
- `MODULE_DEPENDENCY_MISSING`: 模块依赖缺失
- `MODULE_CIRCULAR_DEPENDENCY`: 循环依赖

---

**注意**：所有异步操作都返回 Promise，建议使用 async/await 语法处理。
