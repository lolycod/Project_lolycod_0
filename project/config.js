// 🎯 江湖情缘网站配置文件
// ===================================================================
// 🚀 【小白用户专用配置区域】- 只需要修改这里！
// ===================================================================
//
// 💡 使用说明：
// 1. 只需要修改下面的 USER_SIMPLE_CONFIG 对象
// 2. 修改后保存文件，刷新浏览器即可看到效果
// 3. 不需要修改其他任何代码
//
// ⚠️ 注意事项：
// - 图片文件需要放在 1/images/ 文件夹中
// - 背景图片需要放在 1/brk/ 文件夹中
// - 日期格式：YYYY-MM-DD（如：2025-01-15）
//
// ===================================================================

// 🎯 【用户简化配置】- 只需要修改这里！
const USER_SIMPLE_CONFIG = {
    // 🎨 网站基本信息
    website: {
        title: '柒柒和月月',                    // 🔄 网站标题
        subtitle: '恋与燕云',                   // 🔄 网站副标题
        heroName: '柒柒',                      // 🔄 主角名称
        backgroundImage: '微信图片_20250713234756.jpg'  // 🔄 背景图片文件名
    },

    // 📸 图片配置
    photos: [
        {
            file: '微信图片_20250710215816.jpg',    // 🔄 图片文件名
            title: '初遇江湖',                     // 🔄 图片标题
            description: '江湖初遇，一见倾心，从此我心中只有柒柒一人。',
            poem: '初见倾城色，再见倾城心'
        },
        {
            file: '微信图片_20250710215822.jpg',
            title: '携手同行',
            description: '与柒柒携手走过的每一个日子，都是我最珍贵的回忆。',
            poem: '执子之手，与子偕老'
        }
    ],

    // 📅 时间配置
    time: {
        startDate: '2025-07-13',               // 🔄 开始日期
        startDays: 32                          // 🔄 起始天数
    },

    // 📝 界面文本配置
    texts: {
        pages: {
            blindBoxSubtitle: '发现我们的珍贵回忆',
            memoriesPageTitle: '📸 江湖回忆录 📸',
            aboutPageTitle: 'ℹ️ 江湖情缘志 ℹ️',
            counterTitle: '🏮 陪伴时光 🏮',
            counterText: '天甜甜蜜蜜',              // 🔄 这里就是您要修改的地方！
            timeTitle: '⏰ 江湖时辰 ⏰',
            timeSubtitle: '当前时辰',
            lunarTitle: '🌙 农历时光 🌙'
        },
        buttons: {
            blindBox: '开启宝箱',
            close: '关闭',
            retry: '重试',
            back: '返回'
        }
    },

    // 📖 故事配置
    stories: [
        {
            title: '🌸 初遇江湖 🌸',
            content: '那一年，江湖初雪，我遇见了柒柒...',
            poem: '雪落江湖夜，初见倾城人'
        }
    ]
};

const WEBSITE_CONFIG = {
    // 🎯 ===== 用户定制区域 - 主要修改这里 =====
    userCustomization: {
        // 🎨 网站基本信息 - 网站的核心信息配置
        siteInfo: {
            title: '柒柒和月月',                       // 🔄 网站标题 - 显示在浏览器标签页
            subtitle: '恋与燕云',                      // 🔄 网站副标题 - 网站的副标题描述
            heroName: '柒柒',                         // 🔄 主角名字 - 故事中的主角名称
            backgroundImage: '微信图片_20250713234756.jpg'  // 🔄 背景图片文件名 - 放在1/brk/文件夹中
        },

        // 📅 陪伴天数配置 - 计算陪伴天数的设置
        dayCounter: {
            startDays: 32,                           // 🔄 起始天数 - 开始计算的天数
            baseDate: '2025-07-13'                   // 🔄 基准日期 - 开始计算的日期 (YYYY-MM-DD格式)
        },

        // 📸 图片配置 - 修改这里来更换图片
        // 💡 使用说明：
        //    - filename: 图片文件名，放在1/images/文件夹中
        //    - title: 图片标题，显示在盲盒和回忆录中
        //    - description: 图片描述，详细的文字说明
        //    - poem: 诗句，简短的诗意表达
        images: [
            {
                filename: '微信图片_20250710215816.jpg',  // 🔄 改成你的图片文件名
                title: '初遇江湖',                        // 🔄 改成你想要的标题
                description: '江湖初遇，一见倾心，从此我心中只有柒柒一人。那一刻，仿佛整个江湖都为之静止。',
                poem: '初见倾城色，再见倾城心'
            },
        {
            filename: '微信图片_20250710215822.jpg',
            title: '携手同行',
            description: '与柒柒携手闯荡江湖，共赏人间美景。无论风雨，我们都在一起。',
            poem: '愿与君同行，共赏江湖景'
        },
        {
            filename: '微信图片_20250710215831.jpg',
            title: '情深如海',
            description: '深情如海，誓言如山，此生只为柒柒一人。这份情意，天地可鉴。',
            poem: '情深不负相思意，此心只为伊人痴'
        },
        {
            filename: '微信图片_20250710215835.jpg',
            title: '侠骨柔情',
            description: '纵横江湖多年，唯有柒柒能触动我心中最柔软的地方。侠骨柔情，此生不变。',
            poem: '侠骨柔情两相宜，为君倾尽此生痴'
        },
        {
            filename: '微信图片_20250710215839.jpg',
            title: '琴瑟和鸣',
            description: '与柒柒琴瑟和鸣，共谱人生最美乐章。这份默契，千金难买。',
            poem: '琴瑟和鸣奏华章，此生与君共徜徉'
        },
        {
            filename: '微信图片_20250710215844.jpg',
            title: '红尘作伴',
            description: '愿与柒柒在红尘中作伴，共度平凡而美好的每一天。江湖虽大，有你足矣。',
            poem: '红尘作伴活潇洒，与君共度好年华'
        },
        {
            filename: '微信图片_20250710215849.jpg',
            title: '天作之合',
            description: '感谢上天安排，让我在茫茫人海中遇见了柒柒。这份缘分，千金难求。',
            poem: '天作之合非偶然，前世今生续前缘'
        },
        {
            filename: '微信图片_20250710215854.jpg',
            title: '生死相依',
            description: '纵然江湖险恶，有柒柒相伴，此生无憾。生死相依，永不分离。',
            poem: '生死相依不离弃，此情此意永不移'
        },
        {
            filename: '微信图片_20250710215858.jpg',
            title: '江湖传说',
            description: '愿我和柒柒的爱情成为江湖中最美的传说，流传千古，永不褪色。',
            poem: '江湖传说千万种，唯有此情最动人'
            },
            {
                filename: '微信图片_20250719181938.jpg',
                title: '剑影成双',
                description: '得与柒柒剑影成双。她的扇如蝶舞，我的剑似龙吟，共谱绝世风华。',
                poem: '剑影流光映月华，扇舞翩跹伴天涯'
            },
            {
                filename: '微信图片_20250719182030.jpg',
                title: '月下对饮',
                description: '桃花树下，与柒柒对饮赏月。酒不醉人人自醉，只愿此刻永恒。',
                poem: '月下对饮桃花酿，醉眼朦胧见卿颜'
            }
        ],

        // 📖 故事内容配置 - 情缘志页面显示的故事
        // 💡 使用说明：
        //    - title: 故事标题，支持emoji表情
        //    - content: 故事内容，详细的文字描述
        //    - poem: 诗句，简短的诗意表达
        stories: [
            {
                title: '⚔️ 江湖初遇 ⚔️',              // 🔄 故事标题
                content: '江南烟雨朦胧，柒柒手执玉骨扇走过长街。扇面如凝霜冻雪，扇骨透若冰晶。转角忽见白衣剑客独立雨中，长剑"九州"未出鞘，周身三尺雨幕却自动分开。"姑娘的扇，很特别。"岸上明月目光如剑。柒柒轻摇折扇，掩唇轻笑："公子的剑，更不简单。"',
                poem: '"烟雨长街初相逢，扇底暗藏女儿心。松间明月照初心，剑影成牢困此身"'
            },
            {
                title: '🌙 情深如海 🌙',
                content: '柒柒总爱在晨露未晞时，以冰扇轻拂庭前梅枝，将凝结的霜华收作扇上纹样。明月见了，便以剑气在冻湖刻下"流风回雪"四字，待她踏冰而过时，字迹随步生光。某个雪夜，她将珍藏的千年寒玉雕成扇坠相赠，他却解下从不离身的剑穗系于玉上："此物采自昆仑暖阳处，可护你经脉。"后来江湖人总说，那柄冰魄扇上的霜花，从此再未化过。',
                poem: '"扇凝千载寒梅雪，剑系昆仑一缕阳。剑气裁春藏暗香，冰心一点付海棠"'
            },
            {
                title: '🎵 剑护冰心 🎵',
                content: '寒夜魔教围山，火把染红天际。柒柒冰扇独战群魔，忽见"蚀骨毒针"如雨袭至。千钧一发时霜明剑破空而来，明月白衣染血挡在她身前，剑气化虹尽碎毒针。"谁准你动她？"他剑招"月满西楼"直取敌首，却因护她后背空门大开。柒柒冰扇飞旋击落袭向明月的三枚透骨钉，玉骨尽碎时才发现他早已身中"七绝散"。"傻子...你的剑穗呢？""换了药...解你寒毒。"崖边残雪染朱，她将最后内力注入他心脉，冰扇霜花纹路寸寸消散',
                poem: '"剑破千军为红颜，扇碎玉骨护君安。玉冠碎处道心裂，明月沉潭作劫灰"'
            },
            {
                title: '🏮 永恒誓言 🏮',
                content: '后来极北之地出现两座冰雕：男子单膝跪地以断剑撑地，女子倚靠他肩执半面残扇。千年不化的冰层下，隐约可见剑穗与扇坠交缠成同心结。江湖再无至寒冰魄功与至阳明月剑，只余一句——"那年雪很大，他们成了彼此最后的光。',
                poem: '"剑气冲霄化霓虹，双影翩跹入鸿蒙。断剑刻婚天地证，冰渊永葬未亡人"'
            }
        ]
    },

    // 🎭 ===== 界面文本配置 - 可选修改 =====
    // 💡 使用说明：修改这里可以改变网站的界面文字，支持多语言定制
    uiText: {
        // 导航栏文字
        navigation: {
            brand: '柒柒和月月',                    // 🔄 品牌名称
            home: '江湖',                        // 🔄 首页导航
            memories: '回忆录',                  // 🔄 回忆录导航
            about: '情缘志'                      // 🔄 关于页导航
        },

        // 页面标题配置
        pages: {
            index: {
                title: '⚔️ 送给柒柒的特殊礼物 ⚔️',  // 🔄 首页标题
                blindBox: {
                    text: '开启回溯',                // 🔄 盲盒主文字
                    subtitle: '发现我们的珍贵回忆'  // 🔄 盲盒副标题
                }
            },
            memories: {
                title: '📸 回忆录 - 江湖情缘 ⚔️',      // 🔄 回忆录页标题
                pageTitle: '📸 属于我们的回忆录 📸'         // 🔄 页面主标题
            },
            about: {
                title: 'ℹ️ 情缘志 - 一个属于彼此的传说故事 ⚔️',      // 🔄 情缘志页标题
                pageTitle: 'ℹ️ 一个属于彼此的传说故事 ℹ️'         // 🔄 页面主标题
            }
        },

        // 按钮文字配置
        buttons: {
            close: '关闭',                       // 🔄 关闭按钮
            retry: '再来一次',                   // 🔄 重试按钮
            back: '返回'                         // 🔄 返回按钮
        },

        // 页脚文字配置
        footer: {
            seal: '柒月',                    // 🔄 页脚印章文字
            copyright: '⚔️ &copy; 2025 恋与燕云 - 武侠风格回忆录 ⚔️',  // 🔄 版权信息
            slogan: '🏮 千年冰雪封不住，剑魄扇魂共白头 🏮'  // 🔄 标语
        }
    },

    // ⚙️ ===== 系统配置 - 一般不需要修改 =====
    // 💡 使用说明：这些是系统级配置，除非有特殊需求，否则不建议修改
    systemConfig: {
        // 🌄 文件路径配置
        paths: {
            imageFolder: '1/images/',               // 图片文件夹路径
            backgroundFolder: '1/brk/'              // 背景图片文件夹路径
        },

        // 🎬 动画参数配置
        animations: {
            scrollDuration: '1s',                   // 滚动动画时长
            scrollEasing: 'ease-out',               // 滚动动画缓动函数
            blindBoxOpenDuration: '1.2s',           // 盲盒打开动画时长
            imageRevealDelay: '0.3s'                // 图片显示延迟
        },

        // ⚡ 性能相关配置
        performance: {
            imageLoadTimeout: 5000,                 // 图片加载超时时间(毫秒)
            animationFrameRate: 60,                 // 动画帧率
            lazyLoadThreshold: 100,                 // 懒加载触发距离(像素)
            cacheExpireTime: 3600000                // 缓存过期时间(毫秒)
        }
    }
};

// 🔧 辅助函数：生成完整的图片数据
function generateImageData() {
    return WEBSITE_CONFIG.userCustomization.images.map((item, index) => ({
        src: WEBSITE_CONFIG.systemConfig.paths.imageFolder + item.filename,
        title: item.title,
        description: item.description,
        poem: item.poem
    }));
}

// 🔧 辅助函数：获取背景图片路径
function getBackgroundImagePath() {
    return WEBSITE_CONFIG.systemConfig.paths.backgroundFolder + WEBSITE_CONFIG.userCustomization.siteInfo.backgroundImage;
}

// 🔧 辅助函数：计算陪伴天数
function calculateDayCounter() {
    const baseDate = new Date(WEBSITE_CONFIG.userCustomization.dayCounter.baseDate + 'T00:00:00+08:00');
    const baseDays = WEBSITE_CONFIG.userCustomization.dayCounter.startDays;

    // 获取当前北京时间
    const now = new Date();
    const beijingTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (8 * 3600000));

    // 计算天数差
    const timeDiff = beijingTime.getTime() - baseDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    // 返回显示天数
    return Math.max(baseDays + daysDiff, baseDays);
}

// 🔧 辅助函数：验证用户简化配置
function validateUserSimpleConfig() {
    const errors = [];

    if (typeof USER_SIMPLE_CONFIG === 'undefined') {
        errors.push('USER_SIMPLE_CONFIG 未定义');
        return { isValid: false, errors: errors };
    }

    // 验证网站基本信息
    if (!USER_SIMPLE_CONFIG.website) {
        errors.push('缺少网站基本信息 (website)');
    } else {
        if (!USER_SIMPLE_CONFIG.website.title) errors.push('缺少网站标题');
        if (!USER_SIMPLE_CONFIG.website.backgroundImage) errors.push('缺少背景图片');
    }

    // 验证图片配置
    if (!USER_SIMPLE_CONFIG.photos || !Array.isArray(USER_SIMPLE_CONFIG.photos)) {
        errors.push('图片配置必须是数组');
    } else if (USER_SIMPLE_CONFIG.photos.length === 0) {
        errors.push('至少需要配置一张图片');
    } else {
        // 验证每张图片都在1/images/文件夹中
        USER_SIMPLE_CONFIG.photos.forEach((photo, index) => {
            if (!photo.file) {
                errors.push(`第${index + 1}张图片缺少文件名`);
            } else if (!photo.file.includes('.')) {
                errors.push(`第${index + 1}张图片文件名格式不正确`);
            }
        });
    }

    // 验证时间配置
    if (!USER_SIMPLE_CONFIG.time) {
        errors.push('缺少时间配置 (time)');
    } else {
        if (!USER_SIMPLE_CONFIG.time.startDate) errors.push('缺少开始日期');
        if (typeof USER_SIMPLE_CONFIG.time.startDays !== 'number') errors.push('起始天数必须是数字');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// 🔧 辅助函数：配置验证
function validateConfig() {
    const config = WEBSITE_CONFIG;
    const errors = [];

    // 验证用户定制配置
    if (!config.userCustomization) {
        errors.push('缺少用户定制配置 (userCustomization)');
    } else {
        // 验证网站基本信息
        if (!config.userCustomization.siteInfo) {
            errors.push('缺少网站基本信息 (siteInfo)');
        } else {
            if (!config.userCustomization.siteInfo.title) errors.push('缺少网站标题');
            if (!config.userCustomization.siteInfo.backgroundImage) errors.push('缺少背景图片');
        }

        // 验证图片配置
        if (!config.userCustomization.images || !Array.isArray(config.userCustomization.images)) {
            errors.push('图片配置必须是数组');
        } else if (config.userCustomization.images.length === 0) {
            errors.push('至少需要配置一张图片');
        }

        // 验证天数计算配置
        if (!config.userCustomization.dayCounter) {
            errors.push('缺少天数计算配置 (dayCounter)');
        } else {
            if (!config.userCustomization.dayCounter.baseDate) errors.push('缺少基准日期');
            if (typeof config.userCustomization.dayCounter.startDays !== 'number') errors.push('起始天数必须是数字');
        }
    }

    // 验证UI文本配置
    if (!config.uiText) {
        errors.push('缺少UI文本配置 (uiText)');
    }

    // 验证系统配置
    if (!config.systemConfig) {
        errors.push('缺少系统配置 (systemConfig)');
    }

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// 🔧 辅助函数：获取带默认值的配置
function getConfigWithDefaults() {
    const defaultConfig = {
        userCustomization: {
            siteInfo: {
                title: '柒月',
                subtitle: '武侠风格回忆录',
                heroName: '主角',
                backgroundImage: 'default-bg.jpg'
            },
            dayCounter: {
                startDays: 1,
                baseDate: new Date().toISOString().split('T')[0]
            },
            images: [],
            stories: []
        },
        uiText: {
            navigation: { brand: '柒月', home: '首页', memories: '回忆录', about: '关于' },
            pages: { index: { title: '柒月' } },
            buttons: { close: '关闭', retry: '重试', back: '返回' },
            footer: { seal: '柒月', copyright: '版权所有', slogan: '回溯江湖时光' }
        },
        systemConfig: {
            paths: {
                imageFolder: '1/images/',
                backgroundFolder: '1/brk/'
            },
            animations: {
                scrollDuration: '1s',
                scrollEasing: 'ease-out',
                blindBoxOpenDuration: '1.2s',
                imageRevealDelay: '0.3s'
            },
            performance: {
                imageLoadTimeout: 5000,
                animationFrameRate: 60,
                lazyLoadThreshold: 100,
                cacheExpireTime: 3600000
            }
        }
    };

    // 深度合并配置（简单实现）
    return Object.assign({}, defaultConfig, WEBSITE_CONFIG);
}

// 🔧 辅助函数：更新页面UI文本 - 优化版本
function updateUIText() {
    try {
        const uiConfig = WEBSITE_CONFIG.uiText;
        if (!uiConfig) {
            console.warn('⚠️ UI文本配置不存在，使用默认配置');
            return;
        }

        // 获取当前页面类型
        const currentPage = getCurrentPageType();
        console.log('🎭 开始更新UI文本，当前页面:', currentPage);

        // 批量查询DOM元素以优化性能
        const elements = {
            title: document.querySelector('title'),
            brand: document.querySelector('.navbar-brand'),
            navLinks: document.querySelectorAll('.nav-link'),
            footerSeal: document.querySelector('.footer-seal'),
            footerTexts: document.querySelectorAll('.wuxia-footer p'),
            // 页面特定元素
            pageTitle: document.querySelector('.page-title'),
            blindBoxText: document.querySelector('.blind-box-text'),
            blindBoxSubtitle: document.querySelector('.blind-box-subtitle'),
            buttons: {
                close: document.querySelector('button[onclick="closeResult()"]'),
                retry: document.querySelector('button[onclick="openBlindBox()"]'),
                back: document.querySelector('.btn-back')
            }
        };

        // 更新页面标题
        updatePageTitle(elements.title, uiConfig, currentPage);

        // 更新导航栏
        updateNavigation(elements.brand, elements.navLinks, uiConfig);

        // 更新页脚
        updateFooter(elements.footerSeal, elements.footerTexts, uiConfig);

        // 更新按钮文字
        updateButtons(elements.buttons, uiConfig);

        // 更新页面特定元素
        updatePageSpecificElements(elements, uiConfig, currentPage);

        console.log('✅ UI文本更新完成');

        // 触发自定义事件，通知其他组件UI已更新
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('uiTextUpdated', {
                detail: { page: currentPage, config: uiConfig }
            }));
        }

    } catch (error) {
        console.error('❌ UI文本更新失败:', error);
    }
}

// 🔧 辅助函数：更新页面标题
function updatePageTitle(titleElement, uiConfig, currentPage) {
    if (titleElement && currentPage && uiConfig.pages && uiConfig.pages[currentPage]) {
        titleElement.textContent = uiConfig.pages[currentPage].title;
        console.log('📄 页面标题已更新:', uiConfig.pages[currentPage].title);
    }
}

// 🔧 辅助函数：更新导航栏
function updateNavigation(brandElement, navLinks, uiConfig) {
    // 更新品牌名称
    if (brandElement && uiConfig.navigation) {
        const icon = brandElement.querySelector('i');
        const iconHtml = icon ? icon.outerHTML + ' ' : '';
        brandElement.innerHTML = iconHtml + (uiConfig.navigation.brand || '柒月');
    }

    // 更新导航菜单项
    if (navLinks && uiConfig.navigation) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const icon = link.querySelector('i');
            const iconHtml = icon ? icon.outerHTML + ' ' : '';

            if (href === '#' || href === 'index.html' || href === '') {
                link.innerHTML = iconHtml + (uiConfig.navigation.home || '首页');
            } else if (href === 'memories.html') {
                link.innerHTML = iconHtml + (uiConfig.navigation.memories || '回忆录');
            } else if (href === 'about.html') {
                link.innerHTML = iconHtml + (uiConfig.navigation.about || '关于');
            }
        });
        console.log('🧭 导航栏文字已更新');
    }
}

// 🔧 辅助函数：更新页脚
function updateFooter(footerSeal, footerTexts, uiConfig) {
    if (footerSeal && uiConfig.footer) {
        footerSeal.textContent = uiConfig.footer.seal || '江湖情缘';
    }

    if (footerTexts && footerTexts.length >= 2 && uiConfig.footer) {
        footerTexts[0].innerHTML = uiConfig.footer.copyright || '版权所有';
        footerTexts[1].innerHTML = uiConfig.footer.slogan || '回溯江湖时光';
        console.log('🦶 页脚文字已更新');
    }
}

// 🔧 辅助函数：更新按钮文字
function updateButtons(buttons, uiConfig) {
    if (!uiConfig.buttons) return;

    // 更新关闭按钮
    if (buttons.close) {
        const icon = buttons.close.querySelector('i');
        const iconHtml = icon ? icon.outerHTML + ' ' : '';
        buttons.close.innerHTML = iconHtml + (uiConfig.buttons.close || '关闭');
    }

    // 更新重试按钮
    if (buttons.retry) {
        const icon = buttons.retry.querySelector('i');
        const iconHtml = icon ? icon.outerHTML + ' ' : '';
        buttons.retry.innerHTML = iconHtml + (uiConfig.buttons.retry || '再来一次');
    }

    // 更新返回按钮
    if (buttons.back) {
        const icon = buttons.back.querySelector('i');
        const iconHtml = icon ? icon.outerHTML + ' ' : '';
        buttons.back.innerHTML = iconHtml + (uiConfig.buttons.back || '返回');
    }

    console.log('🔘 按钮文字已更新');
}

// 🔧 辅助函数：更新页面特定元素
function updatePageSpecificElements(elements, uiConfig, currentPage) {
    switch (currentPage) {
        case 'index':
            updateIndexPageElements(elements, uiConfig);
            break;
        case 'memories':
            updateMemoriesPageElements(elements, uiConfig);
            break;
        case 'about':
            updateAboutPageElements(elements, uiConfig);
            break;
        default:
            console.log('🔍 未知页面类型，跳过页面特定元素更新');
    }
}

// 🔧 辅助函数：更新首页特定元素
function updateIndexPageElements(elements, uiConfig) {
    if (uiConfig.pages && uiConfig.pages.index) {
        // 更新盲盒文字
        if (elements.blindBoxText && uiConfig.pages.index.blindBox) {
            elements.blindBoxText.textContent = uiConfig.pages.index.blindBox.text || '回溯时光';
        }

        // 更新盲盒副标题
        if (elements.blindBoxSubtitle && uiConfig.pages.index.blindBox) {
            elements.blindBoxSubtitle.textContent = uiConfig.pages.index.blindBox.subtitle || '发现我们的珍贵回忆';
        }

        console.log('🏠 首页特定元素已更新');
    }
}

// 🔧 辅助函数：更新回忆录页面特定元素
function updateMemoriesPageElements(elements, uiConfig) {
    if (elements.pageTitle && uiConfig.pages && uiConfig.pages.memories) {
        elements.pageTitle.textContent = uiConfig.pages.memories.pageTitle || '📸 江湖回忆录 📸';
        console.log('📸 回忆录页面特定元素已更新');
    }
}

// 🔧 辅助函数：更新情缘志页面特定元素
function updateAboutPageElements(elements, uiConfig) {
    if (elements.pageTitle && uiConfig.pages && uiConfig.pages.about) {
        elements.pageTitle.textContent = uiConfig.pages.about.pageTitle || 'ℹ️ 江湖情缘志 ℹ️';
        console.log('ℹ️ 情缘志页面特定元素已更新');
    }
}

// 🔧 辅助函数：配置热更新机制 - 增强版本（支持用户简化配置）
function enableConfigHotReload() {
    if (typeof window === 'undefined') return;

    // 监听传统配置更新事件
    window.addEventListener('configUpdated', function(event) {
        console.log('🔄 检测到系统配置更新，重新加载UI文本');
        updateUIText();
    });

    // 监听用户简化配置更新事件 - 增强版
    window.addEventListener('userConfigUpdated', function(event) {
        console.log('🔄 检测到用户配置更新，开始智能同步配置');

        // 显示进度提示
        let progressElement = null;
        if (document.getElementById('config-sync-progress')) {
            progressElement = document.getElementById('config-sync-progress');
        }

        try {
            // 使用优化的同步机制
            const syncResult = syncUserSimpleConfig({
                partialUpdate: true,
                enableDiffCheck: true,
                progressCallback: (progress) => {
                    if (progressElement) {
                        progressElement.textContent = `配置同步中... ${progress.progress}%`;
                    }
                    console.log('🔄 同步进度:', progress);
                }
            });

            if (syncResult.success) {
                // 更新页面UI
                updateUIText();

                // 通知模块管理器重新初始化（如果存在）
                if (typeof window.moduleManager !== 'undefined') {
                    console.log('🔄 通知模块管理器配置已更新');
                    window.dispatchEvent(new CustomEvent('moduleConfigUpdated', {
                        detail: { changes: syncResult.changes }
                    }));
                }

                console.log(`✅ 用户配置热更新完成，耗时: ${syncResult.syncTime?.toFixed(2)}ms`);

                if (progressElement) {
                    progressElement.textContent = '配置同步完成';
                    setTimeout(() => {
                        progressElement.textContent = '';
                    }, 2000);
                }
            } else {
                console.error('❌ 用户配置同步失败:', syncResult.error);
                if (progressElement) {
                    progressElement.textContent = '配置同步失败';
                }
            }
        } catch (error) {
            console.error('❌ 用户配置热更新异常:', error.message);
            if (progressElement) {
                progressElement.textContent = '配置同步异常';
            }
        }
    });

    // 提供手动触发更新的全局函数
    window.refreshUIText = function() {
        console.log('🔄 手动刷新UI文本');
        updateUIText();
    };

    // 提供手动触发用户配置更新的全局函数
    window.triggerUserConfigUpdate = function() {
        console.log('🔄 手动触发用户配置更新');
        window.dispatchEvent(new CustomEvent('userConfigUpdated', {
            detail: {
                source: 'manual',
                timestamp: new Date().toISOString()
            }
        }));
    };

    console.log('🔥 配置热更新机制已启用（支持用户简化配置）');
}



// 🔧 辅助函数：友好的配置验证提示
function validateConfigWithTips() {
    const validation = validateConfig();

    if (validation.isValid) {
        console.log('✅ 配置验证通过！所有配置项都正确。');
        return { success: true, message: '配置验证通过！' };
    } else {
        console.warn('⚠️ 配置验证发现问题：');
        validation.errors.forEach((error, index) => {
            console.warn(`   ${index + 1}. ${error}`);
        });

        // 提供修复建议
        const suggestions = generateFixSuggestions(validation.errors);
        console.log('💡 修复建议：');
        suggestions.forEach((suggestion, index) => {
            console.log(`   ${index + 1}. ${suggestion}`);
        });

        return {
            success: false,
            errors: validation.errors,
            suggestions: suggestions
        };
    }
}

// 🔧 辅助函数：生成修复建议
function generateFixSuggestions(errors) {
    const suggestions = [];

    errors.forEach(error => {
        if (error.includes('网站标题')) {
            suggestions.push('请在 userCustomization.siteInfo.title 中设置网站标题');
        } else if (error.includes('背景图片')) {
            suggestions.push('请在 userCustomization.siteInfo.backgroundImage 中设置背景图片文件名');
        } else if (error.includes('图片配置')) {
            suggestions.push('请在 userCustomization.images 数组中添加至少一张图片配置');
        } else if (error.includes('基准日期')) {
            suggestions.push('请在 userCustomization.dayCounter.baseDate 中设置正确的日期格式 (YYYY-MM-DD)');
        } else if (error.includes('起始天数')) {
            suggestions.push('请在 userCustomization.dayCounter.startDays 中设置数字类型的起始天数');
        } else {
            suggestions.push('请检查配置文件的完整性，确保所有必需字段都已填写');
        }
    });

    return suggestions;
}

// 🔧 辅助函数：配置重置功能
function resetConfigToDefault(templateType = 'default') {
    try {
        const template = generateConfigTemplate(templateType);

        // 备份当前配置
        const backup = JSON.parse(JSON.stringify(WEBSITE_CONFIG));
        window.configBackup = backup;

        // 应用新配置
        Object.assign(WEBSITE_CONFIG, template);

        console.log(`🔄 配置已重置为 ${templateType} 模板`);
        console.log('💾 原配置已备份到 window.configBackup');

        // 触发配置更新事件
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('configUpdated', {
                detail: { type: 'reset', template: templateType }
            }));
        }

        return { success: true, message: `配置已重置为 ${templateType} 模板` };
    } catch (error) {
        console.error('❌ 配置重置失败:', error);
        return { success: false, error: error.message };
    }
}

// 🔧 辅助函数：配置导出功能
function exportConfig(filename = null) {
    try {
        const configData = {
            exportTime: new Date().toISOString(),
            version: '1.0',
            config: WEBSITE_CONFIG
        };

        const jsonString = JSON.stringify(configData, null, 2);

        if (typeof window !== 'undefined' && window.document) {
            // 浏览器环境：创建下载链接
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || `江湖情缘配置_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log('📥 配置文件已导出');
            return { success: true, message: '配置文件已导出' };
        } else {
            // Node.js环境：返回JSON字符串
            return { success: true, data: jsonString };
        }
    } catch (error) {
        console.error('❌ 配置导出失败:', error);
        return { success: false, error: error.message };
    }
}

// 🔧 辅助函数：配置导入功能
function importConfig(configData) {
    try {
        let parsedConfig;

        if (typeof configData === 'string') {
            parsedConfig = JSON.parse(configData);
        } else {
            parsedConfig = configData;
        }

        // 验证导入的配置格式
        if (!parsedConfig.config) {
            throw new Error('无效的配置文件格式');
        }

        // 备份当前配置
        const backup = JSON.parse(JSON.stringify(WEBSITE_CONFIG));
        window.configBackup = backup;

        // 应用导入的配置
        Object.assign(WEBSITE_CONFIG, parsedConfig.config);

        // 验证导入后的配置
        const validation = validateConfigWithTips();
        if (!validation.success) {
            console.warn('⚠️ 导入的配置存在问题，但已应用');
        }

        console.log('📤 配置文件已导入');
        console.log('💾 原配置已备份到 window.configBackup');

        // 触发配置更新事件
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('configUpdated', {
                detail: { type: 'import', validation: validation }
            }));
        }

        return { success: true, message: '配置文件已导入', validation: validation };
    } catch (error) {
        console.error('❌ 配置导入失败:', error);
        return { success: false, error: error.message };
    }
}

// 🔧 性能优化：延迟加载非关键功能
function initializeOptionalFeatures() {
    // 只在需要时初始化配置助手
    if (typeof window !== 'undefined' && !window.江湖情缘助手) {
        initializeConfigHelper();
    }
}

// 🔧 配置助手初始化（延迟加载）
function initializeConfigHelper() {
    // 🎯 用户定制助手
    window.江湖情缘助手 = {
        // 验证配置
        验证配置: validateConfigWithTips,

        // 重置配置
        重置配置: (模板类型 = 'default') => resetConfigToDefault(模板类型),

        // 导出配置
        导出配置: (文件名) => exportConfig(文件名),

        // 导入配置（需要先选择文件）
        导入配置: () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const result = importConfig(e.target.result);
                        if (result.success) {
                            alert('✅ 配置导入成功！页面将自动刷新。');
                            window.location.reload();
                        } else {
                            alert('❌ 配置导入失败：' + result.error);
                        }
                    };
                    reader.readAsText(file);
                }
            };
            input.click();
        },

        // 获取配置模板
        获取模板: (类型) => generateConfigTemplate(类型),

        // 刷新UI
        刷新界面: () => {
            if (typeof updateUIText === 'function') {
                updateUIText();
                console.log('🔄 界面已刷新');
            }
        },

        // 显示帮助信息
        帮助: () => {
            console.log(`
🎯 江湖情缘配置助手使用指南：

📋 基本操作：
   江湖情缘助手.验证配置()     - 检查当前配置是否正确
   江湖情缘助手.刷新界面()     - 手动刷新页面文字
   江湖情缘助手.帮助()         - 显示此帮助信息

🔄 配置管理：
   江湖情缘助手.重置配置()     - 重置为默认配置
   江湖情缘助手.重置配置('couple')  - 重置为情侣模板
   江湖情缘助手.重置配置('family')  - 重置为家庭模板

📁 导入导出：
   江湖情缘助手.导出配置()     - 下载当前配置文件
   江湖情缘助手.导入配置()     - 从文件导入配置

🎨 模板获取：
   江湖情缘助手.获取模板('default')  - 获取默认模板
   江湖情缘助手.获取模板('couple')   - 获取情侣模板
   江湖情缘助手.获取模板('family')   - 获取家庭模板

💡 提示：在浏览器控制台中输入上述命令即可使用！
            `);
        }
    };

    // 英文版本（兼容性）
    window.ConfigHelper = window.江湖情缘助手;

    console.log('🎯 江湖情缘配置助手已加载！输入 江湖情缘助手.帮助() 查看使用指南');
}

// 🔧 性能优化：智能初始化
(function() {
    // 立即执行基础功能验证
    if (typeof WEBSITE_CONFIG !== 'undefined') {
        console.log('✅ 配置文件加载成功');

        // 延迟初始化可选功能
        if (typeof window !== 'undefined') {
            // 使用 requestIdleCallback 在浏览器空闲时初始化
            if (window.requestIdleCallback) {
                window.requestIdleCallback(initializeOptionalFeatures);
            } else {
                // 降级方案：延迟执行
                setTimeout(initializeOptionalFeatures, 100);
            }
        }
    } else {
        console.error('❌ 配置文件加载失败');
    }
})();

// 🔄 用户简化配置同步机制
// ===================================================================
// 将用户简化配置同步到系统配置，确保修改后立即生效
// ===================================================================

// 🔧 配置差异检测函数
let lastConfigSnapshot = null;

function detectConfigChanges() {
    if (!USER_SIMPLE_CONFIG) return [];

    const currentSnapshot = JSON.stringify(USER_SIMPLE_CONFIG);

    if (!lastConfigSnapshot) {
        lastConfigSnapshot = currentSnapshot;
        return ['initial']; // 首次检测，认为有变化
    }

    if (currentSnapshot === lastConfigSnapshot) {
        return []; // 无变化
    }

    // 详细差异检测
    const changes = [];
    const current = JSON.parse(currentSnapshot);
    const last = JSON.parse(lastConfigSnapshot);

    // 检测各个配置块的变化
    if (JSON.stringify(current.website) !== JSON.stringify(last.website)) {
        changes.push('website');
    }
    if (JSON.stringify(current.photos) !== JSON.stringify(last.photos)) {
        changes.push('photos');
    }
    if (JSON.stringify(current.stories) !== JSON.stringify(last.stories)) {
        changes.push('stories');
    }
    if (JSON.stringify(current.time) !== JSON.stringify(last.time)) {
        changes.push('time');
    }
    if (JSON.stringify(current.texts) !== JSON.stringify(last.texts)) {
        changes.push('texts');
    }

    lastConfigSnapshot = currentSnapshot;
    console.log('🔍 检测到配置变化:', changes);

    return changes;
}

// 🔧 部分配置更新函数
function updateConfigSection(sectionName, progressCallback) {
    const updateFunctions = {
        website: updateWebsiteConfig,
        photos: updatePhotosConfig,
        stories: updateStoriesConfig,
        time: updateTimeConfig,
        texts: updateTextsConfig
    };

    const updateFn = updateFunctions[sectionName];
    if (updateFn) {
        updateFn();
        if (progressCallback) {
            progressCallback({ section: sectionName, completed: true });
        }
        console.log(`✅ ${sectionName} 配置更新完成`);
    }
}

function syncUserSimpleConfig(options = {}) {
    const startTime = performance.now();
    const {
        forceUpdate = false,
        partialUpdate = true,
        enableDiffCheck = true,
        progressCallback = null
    } = options;

    try {
        console.log('🔄 开始同步用户简化配置...', { forceUpdate, partialUpdate, enableDiffCheck });

        // 验证用户配置是否存在
        if (typeof USER_SIMPLE_CONFIG === 'undefined') {
            console.warn('⚠️ USER_SIMPLE_CONFIG 未定义，跳过同步');
            return { success: false, error: 'USER_SIMPLE_CONFIG 未定义' };
        }

        // 配置差异检测
        const changes = enableDiffCheck ? detectConfigChanges() : null;
        if (enableDiffCheck && !forceUpdate && changes && changes.length === 0) {
            console.log('ℹ️ 配置无变化，跳过同步');
            return { success: true, message: '配置无变化', skipped: true };
        }

        // 进度回调
        if (progressCallback) progressCallback({ stage: 'validation', progress: 10 });

        // 部分更新模式：只更新有变化的配置块
        if (partialUpdate && changes && changes.length > 0) {
            console.log('🔄 执行部分配置更新:', changes);

            let completedSections = 0;
            const totalSections = changes.length;

            for (const sectionName of changes) {
                if (sectionName !== 'initial') {
                    updateConfigSection(sectionName, progressCallback);
                    completedSections++;

                    if (progressCallback) {
                        progressCallback({
                            stage: 'updating',
                            progress: 20 + (completedSections / totalSections) * 60
                        });
                    }
                }
            }
        } else {
            // 全量更新模式
            console.log('🔄 执行全量配置更新');

            // 1. 同步网站基本信息
            if (USER_SIMPLE_CONFIG.website) {
                updateWebsiteConfig();
                if (progressCallback) progressCallback({ stage: 'updating', progress: 30 });
            }


            // 2. 同步图片配置
            if (USER_SIMPLE_CONFIG.photos) {
                updatePhotosConfig();
                if (progressCallback) progressCallback({ stage: 'updating', progress: 50 });
            }

            // 3. 同步故事配置
            if (USER_SIMPLE_CONFIG.stories) {
                updateStoriesConfig();
                if (progressCallback) progressCallback({ stage: 'updating', progress: 60 });
            }

            // 4. 同步时间配置
            if (USER_SIMPLE_CONFIG.time) {
                updateTimeConfig();
                if (progressCallback) progressCallback({ stage: 'updating', progress: 70 });
            }

            // 5. 同步文本配置
            if (USER_SIMPLE_CONFIG.texts) {
                updateTextsConfig();
                if (progressCallback) progressCallback({ stage: 'updating', progress: 80 });
            }
        }


        // 验证配置完整性
        if (progressCallback) progressCallback({ stage: 'validation', progress: 85 });
        const userValidation = validateUserSimpleConfig();
        if (!userValidation.isValid) {
            console.warn('⚠️ 用户配置验证发现问题:', userValidation.errors);
        }

        // 系统配置验证
        let validation = { success: true, message: '配置同步成功' };
        if (typeof validateConfigWithTips === 'function') {
            validation = validateConfigWithTips();
        }

        // 性能监控
        const endTime = performance.now();
        const syncTime = endTime - startTime;

        // 进度完成
        if (progressCallback) progressCallback({ stage: 'completed', progress: 100 });

        // 触发配置更新事件
        if (typeof window !== 'undefined') {
            const event = new CustomEvent('configSyncCompleted', {
                detail: {
                    syncTime: syncTime,
                    changes: changes,
                    partialUpdate: partialUpdate,
                    validation: validation
                }
            });
            window.dispatchEvent(event);
        }

        console.log(`🎉 用户简化配置同步完成！耗时: ${syncTime.toFixed(2)}ms`);
        return {
            success: true,
            message: '配置同步成功',
            syncTime: syncTime,
            changes: changes,
            validation: validation
        };

    } catch (error) {
        const endTime = performance.now();
        const syncTime = endTime - startTime;

        console.error('❌ 用户简化配置同步失败:', error.message);

        // 错误回滚机制
        try {
            if (lastConfigSnapshot && enableDiffCheck) {
                console.log('🔄 尝试回滚到上一个稳定配置...');
                const backupConfig = JSON.parse(lastConfigSnapshot);

                // 这里可以添加回滚逻辑
                console.log('⚠️ 回滚功能需要进一步实现');
            }
        } catch (rollbackError) {
            console.error('❌ 配置回滚也失败了:', rollbackError.message);
        }

        // 触发错误事件
        if (typeof window !== 'undefined') {
            const event = new CustomEvent('configSyncError', {
                detail: {
                    error: error.message,
                    syncTime: syncTime,
                    stack: error.stack
                }
            });
            window.dispatchEvent(event);
        }

        // 进度回调错误状态
        if (progressCallback) {
            progressCallback({ stage: 'error', progress: 0, error: error.message });
        }

        return {
            success: false,
            error: error.message,
            syncTime: syncTime,
            stack: error.stack
        };
    }
}

// 🔧 手动刷新用户配置的全局接口
window.refreshUserConfig = function() {
    console.log('🔄 手动刷新用户配置');
    const result = syncUserSimpleConfig();
    if (result.success && typeof updateUIText === 'function') {
        updateUIText();
        console.log('✅ 页面内容已更新');
    }
    return result;
};

// 🔧 辅助函数：获取当前页面类型
function getCurrentPageType() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';

    if (filename === 'index.html' || filename === '') {
        return 'index';
    } else if (filename === 'memories.html') {
        return 'memories';
    } else if (filename === 'about.html') {
        return 'about';
    }
    return null;
}



// 🚀 页面加载时自动初始化用户配置系统
// ===================================================================
// 确保用户配置在页面加载时自动同步，实现真正的热更新体验
// ===================================================================

(function initializeUserConfigSystem() {
    if (typeof window === 'undefined') return;

    // 页面加载完成后自动同步用户配置
    function autoSyncUserConfig() {
        try {
            console.log('🚀 页面加载完成，开始自动同步用户配置...');

            // 检查用户配置是否存在
            if (typeof USER_SIMPLE_CONFIG !== 'undefined') {
                // 同步用户配置到系统配置
                const syncResult = syncUserSimpleConfig();
                if (syncResult.success) {
                    console.log('✅ 用户配置自动同步成功');

                    // 更新页面UI
                    if (typeof updateUIText === 'function') {
                        updateUIText();
                        console.log('✅ 页面UI已更新');
                    }

                    // 启用热更新机制
                    if (typeof enableConfigHotReload === 'function') {
                        enableConfigHotReload();
                    }
                } else {
                    console.warn('⚠️ 用户配置自动同步失败:', syncResult.error);
                }
            } else {
                console.log('ℹ️ 未检测到用户简化配置，使用默认配置');

                // 启用传统热更新机制
                if (typeof enableConfigHotReload === 'function') {
                    enableConfigHotReload();
                }
            }
        } catch (error) {
            console.error('❌ 用户配置系统初始化失败:', error.message);

            // 回退到传统配置模式
            if (typeof enableConfigHotReload === 'function') {
                enableConfigHotReload();
            }
        }
    }

    // 监听页面加载事件
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoSyncUserConfig);
    } else {
        // 如果页面已经加载完成，立即执行
        autoSyncUserConfig();
    }

    // 监听页面可见性变化，重新同步配置
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && typeof USER_SIMPLE_CONFIG !== 'undefined') {
            console.log('🔄 页面重新可见，检查配置同步');
            setTimeout(() => {
                const syncResult = syncUserSimpleConfig();
                if (syncResult.success && typeof updateUIText === 'function') {
                    updateUIText();
                }
            }, 100);
        }
    });

    console.log('🎯 用户配置系统初始化完成');
})();

// 导出配置（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        WEBSITE_CONFIG,
        USER_SIMPLE_CONFIG,
        syncUserSimpleConfig,
        generateImageData,
        getBackgroundImagePath,
        calculateDayCounter,
        updateUIText,
        getCurrentPageType,
        validateConfig,
        getConfigWithDefaults,
        enableConfigHotReload,
        updatePageTitle,
        updateNavigation,
        updateFooter,
        updateButtons,
        generateConfigTemplate,
        validateConfigWithTips,
        resetConfigToDefault,
        exportConfig,
        importConfig
    };
}



// 🔧 新增：获取当前页面类型
function getCurrentPageType() {
    if (typeof window === 'undefined') return 'unknown';
    
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === 'index.html' || filename === '' || path === '/') {
        return 'index';
    } else if (filename === 'memories.html') {
        return 'memories';
    } else if (filename === 'about.html') {
        return 'about';
    }
    
    return 'unknown';
}

// 🔧 新增：增强的配置管理器
const ConfigManager = {
    // 初始化配置管理器
    init() {
        try {
            // 同步用户简化配置
            this.syncUserConfig();
            
            // 启用热更新机制
            this.enableHotReload();
            
            // 验证配置
            const validation = validateConfigWithTips();
            if (!validation.success) {
                console.warn('⚠️ 配置验证发现问题，但系统将继续运行');
            }
            
            console.log('✅ 配置管理器初始化完成');
            return { success: true };
            
        } catch (error) {
            console.error('❌ 配置管理器初始化失败:', error);
            return { success: false, error: error.message };
        }
    },
    
    // 同步用户配置
    syncUserConfig() {
        return syncUserSimpleConfig();
    },
    
    // 启用热更新
    enableHotReload() {
        return enableConfigHotReload();
    },
    
    // 获取配置值
    get(path, defaultValue = null) {
        try {
            const keys = path.split('.');
            let current = USER_SIMPLE_CONFIG;
            
            for (const key of keys) {
                if (current && typeof current === 'object' && key in current) {
                    current = current[key];
                } else {
                    return defaultValue;
                }
            }
            
            return current;
        } catch (error) {
            console.warn(`⚠️ 获取配置失败: ${path}`, error);
            return defaultValue;
        }
    },
    
    // 设置配置值
    set(path, value) {
        try {
            const keys = path.split('.');
            const lastKey = keys.pop();
            let current = USER_SIMPLE_CONFIG;
            
            for (const key of keys) {
                if (!current[key] || typeof current[key] !== 'object') {
                    current[key] = {};
                }
                current = current[key];
            }
            
            current[lastKey] = value;
            
            // 触发配置更新事件
            this.triggerUpdate();
            
            return { success: true };
        } catch (error) {
            console.error(`❌ 设置配置失败: ${path}`, error);
            return { success: false, error: error.message };
        }
    },
    
    // 触发配置更新
    triggerUpdate() {
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('userConfigUpdated', {
                detail: {
                    source: 'ConfigManager',
                    timestamp: new Date().toISOString()
                }
            }));
        }
    }
};

// 🔧 新增：错误处理和降级机制
const ErrorHandler = {
    // 错误日志收集
    errors: [],
    
    // 记录错误
    log(error, context = '') {
        const errorInfo = {
            message: error.message || error,
            context: context,
            timestamp: new Date().toISOString(),
            stack: error.stack || null
        };
        
        this.errors.push(errorInfo);
        console.error(`❌ [${context}] ${errorInfo.message}`, error);
        
        // 保持错误日志数量在合理范围内
        if (this.errors.length > 50) {
            this.errors = this.errors.slice(-25);
        }
    },
    
    // 获取错误日志
    getErrors() {
        return [...this.errors];
    },
    
    // 清除错误日志
    clearErrors() {
        this.errors = [];
    },
    
    // 安全执行函数
    safeExecute(fn, context = '', fallback = null) {
        try {
            return fn();
        } catch (error) {
            this.log(error, context);
            return fallback;
        }
    },
    
    // 异步安全执行
    async safeExecuteAsync(fn, context = '', fallback = null) {
        try {
            return await fn();
        } catch (error) {
            this.log(error, context);
            return fallback;
        }
    }
};

// 🔧 页面加载时自动初始化配置管理器
if (typeof window !== 'undefined') {
    // 确保在DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            ErrorHandler.safeExecute(() => {
                ConfigManager.init();
            }, 'ConfigManager初始化');
        });
    } else {
        // DOM已经加载完成，立即初始化
        ErrorHandler.safeExecute(() => {
            ConfigManager.init();
        }, 'ConfigManager初始化');
    }
}

// 🔧 各配置块的更新函数
function updateWebsiteConfig() {
    if (USER_SIMPLE_CONFIG.website) {
        Object.assign(WEBSITE_CONFIG.userCustomization.siteInfo, {
            title: USER_SIMPLE_CONFIG.website.title || '江湖情缘',
            subtitle: USER_SIMPLE_CONFIG.website.subtitle || '武侠风格回忆录',
            heroName: USER_SIMPLE_CONFIG.website.heroName || '主角',
            backgroundImage: USER_SIMPLE_CONFIG.website.backgroundImage || 'default-bg.jpg'
        });
        console.log('✅ 网站信息同步完成');
    }
}

function updatePhotosConfig() {
    if (USER_SIMPLE_CONFIG.photos && Array.isArray(USER_SIMPLE_CONFIG.photos)) {
        WEBSITE_CONFIG.userCustomization.images = USER_SIMPLE_CONFIG.photos.map(photo => ({
            filename: photo.file || 'default.jpg',
            title: photo.title || '默认标题',
            description: photo.description || '默认描述',
            poem: photo.poem || '默认诗句'
        }));
        console.log(`✅ 图片配置同步完成，共 ${USER_SIMPLE_CONFIG.photos.length} 张图片`);
    }
}

function updateStoriesConfig() {
    if (USER_SIMPLE_CONFIG.stories && Array.isArray(USER_SIMPLE_CONFIG.stories)) {
        WEBSITE_CONFIG.userCustomization.stories = USER_SIMPLE_CONFIG.stories.map(story => ({
            title: story.title || '默认故事标题',
            content: story.content || '默认故事内容',
            poem: story.poem || '默认诗句'
        }));
        console.log(`✅ 故事配置同步完成，共 ${USER_SIMPLE_CONFIG.stories.length} 个故事`);
    }
}

function updateTimeConfig() {
    if (USER_SIMPLE_CONFIG.time) {
        Object.assign(WEBSITE_CONFIG.userCustomization.dayCounter, {
            startDays: USER_SIMPLE_CONFIG.time.startDays || 1,
            baseDate: USER_SIMPLE_CONFIG.time.startDate || '2024-01-01'
        });
        console.log('✅ 时间配置同步完成');
    }
}

function updateTextsConfig() {
    if (USER_SIMPLE_CONFIG.texts) {
        // 同步页面文本
        if (USER_SIMPLE_CONFIG.texts.pages) {
            // 更新页面标题
            WEBSITE_CONFIG.uiText.pages.index.blindBox.subtitle =
                USER_SIMPLE_CONFIG.texts.pages.blindBoxSubtitle || '发现江湖情缘的珍贵回忆';
            WEBSITE_CONFIG.uiText.pages.memories.pageTitle =
                USER_SIMPLE_CONFIG.texts.pages.memoriesPageTitle || '📸 江湖回忆录 📸';
            WEBSITE_CONFIG.uiText.pages.about.pageTitle =
                USER_SIMPLE_CONFIG.texts.pages.aboutPageTitle || 'ℹ️ 江湖情缘志 ℹ️';

            // 更新盲盒按钮文字
            WEBSITE_CONFIG.uiText.pages.index.blindBox.text =
                USER_SIMPLE_CONFIG.texts.buttons.blindBox || '开启宝箱';

            // 同步about页面特有元素
            if (!WEBSITE_CONFIG.uiText.pages.about.elements) {
                WEBSITE_CONFIG.uiText.pages.about.elements = {};
            }
            Object.assign(WEBSITE_CONFIG.uiText.pages.about.elements, {
                counterTitle: USER_SIMPLE_CONFIG.texts.pages.counterTitle || '🏮 陪伴时光 🏮',
                counterText: USER_SIMPLE_CONFIG.texts.pages.counterText || '天与柒柒度过的时光，执子之手，与之偕老',
                timeTitle: USER_SIMPLE_CONFIG.texts.pages.timeTitle || '⏰ 江湖时辰 ⏰',
                timeSubtitle: USER_SIMPLE_CONFIG.texts.pages.timeSubtitle || '当前时辰',
                lunarTitle: USER_SIMPLE_CONFIG.texts.pages.lunarTitle || '🌙 农历时光 🌙'
            });
        }
        console.log('✅ 文本配置同步完成');
    }
}

// 🔧 导出全局函数供页面使用
if (typeof window !== 'undefined') {
    window.ConfigManager = ConfigManager;
    window.ErrorHandler = ErrorHandler;
    window.syncUserSimpleConfig = syncUserSimpleConfig;
    window.getCurrentPageType = getCurrentPageType;
    window.detectConfigChanges = detectConfigChanges;
    window.updateConfigSection = updateConfigSection;
    window.generateImageData = generateImageData;
    window.updateWebsiteConfig = updateWebsiteConfig;
    window.updatePhotosConfig = updatePhotosConfig;
    window.updateStoriesConfig = updateStoriesConfig;
    window.updateTimeConfig = updateTimeConfig;
    window.updateTextsConfig = updateTextsConfig;
    window.validateUserSimpleConfig = validateUserSimpleConfig;
}