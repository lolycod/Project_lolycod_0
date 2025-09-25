# 江湖情缘 - 武侠风格回忆录系统

## 项目概述

江湖情缘是一个基于武侠风格的个人回忆录网站系统，采用现代化的模块化架构设计，支持灵活的配置管理和热更新机制。

## 系统特性

### 🏗️ 架构特性
- **双重配置系统**：USER_SIMPLE_CONFIG（用户简化配置） + WEBSITE_CONFIG（系统配置）
- **模块化管理**：统一的模块管理器，支持生命周期管理和依赖注入
- **热更新机制**：智能差异检测，支持部分配置更新
- **低耦合设计**：公共初始化模块，代码复用率高

### 🎨 功能特性
- **武侠风格界面**：古典美学设计，沉浸式用户体验
- **智能盲盒系统**：随机展示回忆照片，增加趣味性
- **时间显示模块**：实时时间显示，支持整点特效
- **农历显示模块**：传统农历信息，增强文化氛围
- **陪伴计数器**：记录美好时光，情感化设计

### 🔧 技术特性
- **配置驱动**：所有界面元素都可通过配置文件修改
- **响应式设计**：适配多种设备屏幕
- **性能优化**：智能预加载，动画性能监控
- **错误处理**：完善的错误捕获和回滚机制

## 快速开始

### 1. 基础配置

编辑 `config.js` 文件中的 `USER_SIMPLE_CONFIG` 部分：

```javascript
const USER_SIMPLE_CONFIG = {
    // 网站基本信息
    website: {
        title: '你的网站标题',
        subtitle: '你的网站副标题',
        heroName: '主角名称',
        backgroundImage: 'your-background.jpg'
    },
    
    // 图片配置
    photos: [
        {
            file: 'photo1.jpg',
            title: '照片标题',
            description: '照片描述',
            poem: '相关诗句'
        }
    ],
    
    // 时间配置
    time: {
        startDate: '2024-01-01',
        startDays: 1
    }
};
```

### 2. 图片资源

将图片文件放置在以下目录：
- `1/images/` - 回忆照片
- `1/brk/` - 背景图片

### 3. 启动网站

直接在浏览器中打开 `index.html` 即可。

## 目录结构

```
123/
├── index.html              # 首页（盲盒系统）
├── memories.html           # 回忆录页面
├── about.html              # 关于页面
├── config.js               # 配置文件
├── common-init.js          # 公共初始化模块
├── module-manager.js       # 模块管理器
├── docs/                   # 文档目录
│   ├── README.md           # 项目说明
│   ├── config-guide.md     # 配置指南
│   ├── module-guide.md     # 模块开发指南
│   └── api-reference.md    # API参考
└── 1/                      # 资源目录
    ├── images/             # 回忆照片
    └── brk/                # 背景图片
```

## 核心模块

### 配置管理系统
- **ConfigManager**: 统一配置管理器
- **syncUserSimpleConfig()**: 配置同步函数
- **detectConfigChanges()**: 差异检测算法

### 模块管理系统
- **ModuleManager**: 模块生命周期管理
- **TimeDisplayModule**: 时间显示模块
- **LunarCalendarModule**: 农历显示模块

### 公共初始化系统
- **CommonPageInitializer**: 页面初始化管理器
- **initPageCommon()**: 公共初始化函数
- **addPageInitCallback()**: 自定义回调注册

## 开发指南

### 添加新模块

1. 创建模块类：
```javascript
class YourModule {
    constructor(config = {}) {
        this.config = config;
    }
    
    init() {
        // 初始化逻辑
        return { success: true };
    }
    
    destroy() {
        // 清理逻辑
    }
}
```

2. 注册模块：
```javascript
moduleManager.register('yourModule', YourModule, {
    config: { /* 模块配置 */ },
    autoInit: true,
    priority: 5
});
```

### 配置热更新

系统支持实时配置更新：

```javascript
// 手动触发配置同步
window.refreshUserConfig();

// 监听配置更新事件
window.addEventListener('configSyncCompleted', (event) => {
    console.log('配置更新完成:', event.detail);
});
```

## 维护指南

### 性能监控

系统内置性能监控功能：
- 页面加载时间监控
- 配置同步性能监控
- 模块初始化性能监控

### 错误处理

完善的错误处理机制：
- 全局错误捕获
- 模块初始化错误恢复
- 配置同步错误回滚

### 调试工具

提供丰富的调试接口：
```javascript
// 获取模块管理器状态
window.getModuleManagerStatus();

// 获取配置同步状态
window.detectConfigChanges();

// 手动初始化模块
window.initModule('moduleName');
```

## 许可证

本项目采用 MIT 许可证。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来改进项目。

---

**版权所有 © 2025 米醋电子工作室**
