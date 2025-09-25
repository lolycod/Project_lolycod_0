# 配置使用指南

## 概述

江湖情缘系统采用双重配置架构：
- **USER_SIMPLE_CONFIG**: 用户简化配置，易于理解和修改
- **WEBSITE_CONFIG**: 系统内部配置，自动从用户配置同步

## 用户简化配置 (USER_SIMPLE_CONFIG)

### 网站基本信息 (website)

```javascript
website: {
    title: '江湖情缘',              // 网站标题
    subtitle: '武侠风格回忆录',      // 网站副标题
    heroName: '主角',               // 主角名称
    backgroundImage: 'bg.jpg'       // 背景图片文件名
}
```

**说明**：
- `title`: 显示在浏览器标题栏和页面标题中
- `subtitle`: 显示在首页副标题位置
- `heroName`: 在故事中引用的主角名称
- `backgroundImage`: 必须放在 `1/brk/` 目录下

### 图片配置 (photos)

```javascript
photos: [
    {
        file: 'photo1.jpg',         // 图片文件名
        title: '美好回忆',          // 图片标题
        description: '这是一张...',  // 图片描述
        poem: '相见时难别亦难'       // 相关诗句
    },
    {
        file: 'photo2.jpg',
        title: '难忘时光',
        description: '那一天...',
        poem: '此情可待成追忆'
    }
]
```

**说明**：
- 所有图片文件必须放在 `1/images/` 目录下
- 支持 JPG、PNG、GIF、WebP 格式
- 建议图片尺寸：400x300 像素
- `poem` 字段用于增加文学氛围

### 故事配置 (stories)

```javascript
stories: [
    {
        title: '初遇江湖',          // 故事标题
        content: '那是一个...',     // 故事内容
        poem: '江湖路远，情深如海'   // 故事诗句
    }
]
```

**说明**：
- 故事按数组顺序显示在about页面
- 支持HTML标签格式化内容
- `poem` 字段显示在故事末尾

### 时间配置 (time)

```javascript
time: {
    startDate: '2024-01-01',        // 开始日期
    startDays: 1                    // 起始天数
}
```

**说明**：
- `startDate`: 计算陪伴天数的起始日期
- `startDays`: 起始天数，通常设为1
- 系统会自动计算到当前日期的天数

### 界面文本配置 (texts)

#### 页面文本 (texts.pages)

```javascript
texts: {
    pages: {
        blindBoxSubtitle: '发现我们的珍贵回忆',
        memoriesPageTitle: '📸 江湖回忆录 📸',
        aboutPageTitle: 'ℹ️ 江湖情缘志 ℹ️',
        counterTitle: '🏮 陪伴时光 🏮',
        counterText: '天的江湖情缘',
        timeTitle: '⏰ 江湖时辰 ⏰',
        timeSubtitle: '当前时辰',
        lunarTitle: '🌙 农历时光 🌙'
    }
}
```

#### 按钮文本 (texts.buttons)

```javascript
buttons: {
    blindBox: '开启宝箱',
    close: '关闭',
    retry: '重试',
    back: '返回'
}
```

## 配置热更新

### 自动同步

系统会自动检测配置变化并同步：

```javascript
// 修改配置后触发更新事件
window.dispatchEvent(new CustomEvent('userConfigUpdated'));
```

### 手动同步

```javascript
// 手动刷新配置
window.refreshUserConfig();

// 带选项的同步
window.syncUserSimpleConfig({
    forceUpdate: true,          // 强制更新
    partialUpdate: false,       // 全量更新
    enableDiffCheck: true,      // 启用差异检测
    progressCallback: (progress) => {
        console.log('同步进度:', progress);
    }
});
```

### 监听配置更新

```javascript
// 监听配置同步完成
window.addEventListener('configSyncCompleted', (event) => {
    console.log('配置更新完成:', event.detail);
});

// 监听配置同步错误
window.addEventListener('configSyncError', (event) => {
    console.error('配置同步失败:', event.detail);
});
```

## 配置验证

### 自动验证

系统会自动验证配置的完整性：

```javascript
// 验证用户配置
const validation = window.validateUserSimpleConfig();
if (!validation.isValid) {
    console.warn('配置验证失败:', validation.errors);
}
```

### 验证规则

1. **必需字段检查**：
   - `website.title` - 网站标题
   - `website.backgroundImage` - 背景图片
   - `photos` - 至少一张图片
   - `time.startDate` - 开始日期

2. **格式验证**：
   - 日期格式：YYYY-MM-DD
   - 图片文件：必须包含文件扩展名
   - 数组类型：photos 和 stories 必须是数组

3. **文件存在性**：
   - 图片文件必须存在于指定目录
   - 背景图片必须存在于 `1/brk/` 目录

## 高级配置

### 模块配置

```javascript
// 时间显示模块配置
timeDisplay: {
    enabled: true,
    showSeconds: true,
    format: 'YYYY年MM月DD日 HH:mm:ss',
    hourlyEffect: true
}

// 农历显示模块配置
lunarCalendar: {
    enabled: true,
    showGanZhi: true,
    showSolarTerm: true,
    animationDuration: 1000
}
```

### 性能配置

```javascript
// 性能优化配置
performance: {
    preloadImages: true,        // 预加载图片
    animationMonitoring: true,  // 动画性能监控
    lazyLoading: false         // 懒加载（暂未实现）
}
```

## 故障排除

### 常见问题

1. **配置不生效**
   - 检查 JavaScript 语法错误
   - 确认触发了配置更新事件
   - 查看浏览器控制台错误信息

2. **图片不显示**
   - 确认图片文件存在于正确目录
   - 检查文件名大小写
   - 确认图片格式支持

3. **时间显示异常**
   - 检查 `startDate` 格式
   - 确认 `startDays` 为数字类型
   - 查看时间模块初始化日志

### 调试工具

```javascript
// 获取当前配置状态
console.log('用户配置:', USER_SIMPLE_CONFIG);
console.log('系统配置:', WEBSITE_CONFIG);

// 检测配置变化
const changes = window.detectConfigChanges();
console.log('配置变化:', changes);

// 获取模块状态
const moduleStatus = window.getModuleManagerStatus();
console.log('模块状态:', moduleStatus);
```

## 最佳实践

1. **配置备份**：修改前备份原始配置
2. **渐进式修改**：一次只修改一个配置块
3. **测试验证**：修改后及时测试功能
4. **版本控制**：使用 Git 管理配置变更
5. **文档更新**：重要修改要更新文档

---

**提示**：配置修改后，系统会自动检测变化并应用更新。如果遇到问题，可以刷新页面重新加载配置。
