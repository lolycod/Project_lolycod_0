# 🎯 江湖情缘 - 武侠风格回忆录

一个充满武侠风情的个人回忆录网站，让您以独特的江湖风格记录和分享珍贵的回忆。

## 🚀 快速开始

### 📝 简化配置编辑（推荐）

**只需要修改 `config.js` 文件顶部的 `USER_SIMPLE_CONFIG` 对象即可！**

```javascript
const USER_SIMPLE_CONFIG = {
    // 🏠 网站基本信息
    website: {
        title: '你的网站标题',           // 修改这里
        subtitle: '你的网站副标题',      // 修改这里
        heroName: '主角名字',           // 修改这里
        backgroundImage: '背景图片.jpg'  // 修改这里
    },
    
    // 📸 图片管理
    photos: [
        {
            file: '图片文件名.jpg',      // 图片文件名（放在1/images/文件夹中）
            title: '图片标题',          // 图片标题
            description: '图片描述',     // 详细描述
            poem: '配图诗句'            // 诗意表达
        }
        // 添加更多图片...
    ],
    
    // 📖 故事管理
    stories: [
        {
            title: '故事标题',          // 故事标题
            content: '故事内容...',     // 故事详细内容
            poem: '配套诗句'            // 诗意表达
        }
        // 添加更多故事...
    ]
    
    // 更多配置选项...
};
```

### ⚡ 立即生效

修改配置后，**保存文件并刷新浏览器**，您的修改将立即生效！

## 📖 详细配置指南

### 🏠 网站基本信息配置

在 `USER_SIMPLE_CONFIG.website` 中配置网站的基本信息：

```javascript
website: {
    title: '柒柒和月月',                    // 网站标题（显示在浏览器标签页）
    subtitle: '恋与燕云',                   // 网站副标题
    heroName: '柒柒',                      // 主角名字（故事中的主要人物）
    backgroundImage: '微信图片_20250713234756.jpg'  // 背景图片文件名
}
```

**注意事项：**
- 背景图片需要放在 `1/brk/` 文件夹中
- 支持 jpg、png、gif 等常见图片格式

### 📸 图片管理

在 `USER_SIMPLE_CONFIG.photos` 数组中管理您的图片：

```javascript
photos: [
    {
        file: '微信图片_20250710215816.jpg',    // 图片文件名
        title: '初遇江湖',                      // 图片标题
        description: '江湖初遇，一见倾心...',    // 详细描述
        poem: '初见倾城色，再见倾城心'            // 配图诗句
    }
]
```

**操作方法：**
- **添加图片**：在数组中添加新的图片对象
- **删除图片**：删除对应的图片对象
- **修改图片**：编辑对应字段的内容

**注意事项：**
- 图片文件需要放在 `1/images/` 文件夹中
- 建议图片大小不超过 2MB，以确保加载速度

### 📖 故事管理

在 `USER_SIMPLE_CONFIG.stories` 数组中管理您的故事：

```javascript
stories: [
    {
        title: '⚔️ 江湖初遇 ⚔️',
        content: '在这个充满传奇的江湖世界里...',
        poem: '初见倾城色，再见倾城心'
    }
]
```

**操作方法：**
- **添加故事**：在数组中添加新的故事对象
- **删除故事**：删除对应的故事对象
- **修改故事**：编辑标题、内容或诗句

### 📝 界面文本配置

在 `USER_SIMPLE_CONFIG.texts` 中自定义界面文字：

```javascript
texts: {
    navigation: {
        brand: '江湖情缘',      // 网站品牌名（左上角显示）
        home: '江湖',          // 首页按钮文字
        memories: '回忆录',     // 回忆录按钮文字
        about: '情缘志'        // 关于页面按钮文字
    },
    buttons: {
        blindBox: '开启宝箱',   // 盲盒按钮文字
        close: '关闭',         // 关闭按钮文字
        retry: '重试',         // 重试按钮文字
        back: '返回'           // 返回按钮文字
    }
}
```

### ⏰ 时间设置

在 `USER_SIMPLE_CONFIG.time` 中配置陪伴天数计算：

```javascript
time: {
    startDate: '2025-07-13',    // 开始日期（YYYY-MM-DD格式）
    startDays: 32               // 起始天数（从这个数字开始计算）
}
```

### 🕐 实时时间显示配置

在 `USER_SIMPLE_CONFIG.timeDisplay` 中配置实时时间显示：

```javascript
timeDisplay: {
    enabled: true,                      // 是否启用实时时间显示
    showSeconds: true,                  // 是否显示秒数
    format: 'YYYY年MM月DD日 HH:mm:ss',   // 时间显示格式
    enableHourlyEffect: true,           // 是否启用整点特效
    effectType: 'sword-sweep',          // 特效类型：'sword-sweep' | 'clip-path' | 'svg-path'
    effectDuration: 2000                // 特效持续时间（毫秒）
}
```

### 🌙 农历显示配置

在 `USER_SIMPLE_CONFIG.lunarCalendar` 中配置农历日期显示：

```javascript
lunarCalendar: {
    enabled: true,                      // 是否启用农历显示
    showGanZhi: true,                   // 是否显示干支纪年
    showSolarTerm: true,                // 是否显示节气
    displayFormat: '{ganZhi} {lunar} {solarTerm}',  // 显示格式
    scrollStyle: 'traditional',         // 卷轴样式：'traditional' | 'modern'
    scrollAnimation: true               // 是否启用卷轴动画
}
```

### 📜 古诗文内容配置

在 `USER_SIMPLE_CONFIG.poetryContent` 中配置古诗文显示：

```javascript
poetryContent: {
    useClassicPoetry: true,             // 是否使用经典古诗文
    enableCustomContent: true,          // 是否启用自定义内容
    sources: ['侠客行', '滕王阁序'],      // 诗文来源
    customSections: [                   // 自定义古诗文内容
        {
            title: '🗡️ 侠客行 🗡️',
            content: '赵客缦胡缨，吴钩霜雪明。银鞍照白马，飒沓如流星。十步杀一人，千里不留行。事了拂衣去，深藏身与名。',
            poem: '纵死侠骨香，不惭世上英',
            source: '李白·侠客行'
        }
        // 可以添加更多自定义古诗文...
    ]
}
```

## 🎨 最佳实践

### 1. 文件组织
- 将图片按类型分类存放
- 使用有意义的文件名
- 定期备份配置文件

### 2. 内容编写
- 标题简洁有力，体现武侠风格
- 描述详细生动，增强代入感
- 诗句精炼优美，提升意境

### 3. 图片优化
- 压缩图片大小，提升加载速度
- 统一图片尺寸比例，保持美观
- 选择高质量图片，提升视觉效果

## 🔧 高级功能

### 手动刷新配置

如果修改后没有立即生效，可以在浏览器控制台中执行：

```javascript
// 手动刷新用户配置
window.refreshUserConfig();

// 手动触发配置更新
window.triggerUserConfigUpdate();
```

### 配置验证

检查配置是否正确：

```javascript
// 在浏览器控制台中执行
console.log(USER_SIMPLE_CONFIG);
```

## ❓ 常见问题解答

### Q: 修改配置后页面没有变化？
**A:** 请确保：
1. 保存了 config.js 文件
2. 刷新了浏览器页面
3. 检查浏览器控制台是否有错误信息

### Q: 图片无法显示？
**A:** 请检查：
1. 图片文件是否放在正确的文件夹中（`1/images/`）
2. 文件名是否与配置中的完全一致
3. 图片格式是否支持（jpg、png、gif）

### Q: 如何添加更多图片？
**A:** 在 `photos` 数组中添加新的图片对象：
```javascript
photos: [
    // 现有图片...
    {
        file: '新图片.jpg',
        title: '新图片标题',
        description: '新图片描述',
        poem: '新诗句'
    }
]
```

### Q: 如何修改网站标题？
**A:** 修改 `website.title` 字段：
```javascript
website: {
    title: '您的新标题',  // 修改这里
    // 其他配置...
}
```

### Q: 如何备份配置？
**A:** 复制整个 `config.js` 文件到安全位置，或者只复制 `USER_SIMPLE_CONFIG` 对象的内容。

## 🎯 技术说明

### 配置同步机制
- 页面加载时自动同步用户配置
- 支持热更新，修改后立即生效
- 兼容现有的配置系统

### 文件结构
```
项目根目录/
├── config.js          # 主配置文件（重点编辑）
├── index.html          # 首页
├── memories.html       # 回忆录页面
├── about.html          # 关于页面
└── 1/
    ├── images/         # 图片文件夹
    └── brk/           # 背景图片文件夹
```

## 🏗️ 系统架构特性

### 现代化模块架构
本系统采用企业级的模块化架构设计，具备以下特性：

- **双重配置系统**: USER_SIMPLE_CONFIG（用户简化配置） + WEBSITE_CONFIG（系统配置）
- **模块管理器**: 统一的模块生命周期管理，支持依赖注入和错误恢复
- **热更新机制**: 智能差异检测，支持部分配置更新，无需重启
- **低耦合设计**: 公共初始化模块，代码复用率高，便于维护

### 核心模块
- **ConfigManager**: 统一配置管理器，支持配置验证和热更新
- **ModuleManager**: 模块生命周期管理，支持依赖关系和优先级
- **TimeDisplayModule**: 时间显示模块，支持整点特效
- **LunarCalendarModule**: 农历显示模块，传统文化元素
- **CommonPageInitializer**: 页面初始化管理器

## 📚 详细文档

### 完整文档指南
- **[详细项目说明](docs/README.md)** - 完整的项目概述和架构说明
- **[配置使用指南](docs/config-guide.md)** - 详细的配置说明和最佳实践
- **[模块开发指南](docs/module-guide.md)** - 模块开发和扩展指南
- **[API参考文档](docs/api-reference.md)** - 完整的API接口文档

### 开发者工具
- **测试套件**: 打开 `test-suite.html` 进行功能测试
- **调试接口**: 丰富的调试API和状态查询功能
- **性能监控**: 内置性能监控和优化建议

## 🔧 高级功能

### 配置热更新
```javascript
// 手动触发配置同步
window.refreshUserConfig();

// 监听配置更新事件
window.addEventListener('configSyncCompleted', (event) => {
    console.log('配置更新完成:', event.detail);
});
```

### 模块扩展
```javascript
// 注册新模块
moduleManager.register('yourModule', YourModule, {
    config: { /* 模块配置 */ },
    autoInit: true,
    priority: 5
});
```

### 调试工具
```javascript
// 获取系统状态
window.getModuleManagerStatus();

// 检测配置变化
window.detectConfigChanges();
```

## 🧪 测试验证

系统提供完整的测试套件，打开 `test-suite.html` 可进行：
- 系统状态检查
- 配置系统测试
- 模块管理器测试
- 功能模块测试
- 性能基准测试

## 🛠️ 故障排除

### 常见问题
1. **配置不生效**: 检查JavaScript语法，确认触发配置更新事件
2. **图片不显示**: 确认图片文件存在于正确目录，检查文件名大小写
3. **模块初始化失败**: 查看浏览器控制台错误信息，检查依赖关系

### 性能优化
- 页面加载时间监控
- 配置同步性能监控
- 模块初始化性能监控

## 📄 许可证

本项目采用 MIT 许可证。

## 📞 支持与反馈

如果您在使用过程中遇到问题或有改进建议，欢迎反馈！

### 📱 移动端优化

系统提供完整的移动端优化方案：

#### 自动重定向
- 智能检测移动设备和网络状况
- 自动重定向到移动优化版本
- 支持用户选择和偏好记忆

#### 移动端页面
- **index-mobile.html** - 移动优化首页
- **memories-mobile.html** - 移动优化回忆录
- **about-mobile.html** - 移动优化关于页面

#### 性能优化
- 内联关键CSS，减少HTTP请求
- 图片懒加载和尺寸优化
- CDN资源降级方案
- 缓存优化和预加载

#### 测试工具
- **mobile-performance-test.html** - 移动端性能测试
- **mobile-comparison.html** - 桌面版vs移动版对比

### 技术支持
- 查看详细文档: `docs/` 目录
- 运行测试套件: `test-suite.html`
- 查看API参考: `docs/api-reference.md`
- 移动端性能测试: `mobile-performance-test.html`

---

**版权所有 © 2025 米醋电子工作室**

**🏮 愿您的江湖情缘，在此现代化系统中得到最美的记录与传承 🏮**
