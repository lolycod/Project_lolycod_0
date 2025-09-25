// 🚨 江湖情缘系统快速修复脚本
// ===================================================================
// 用于修复常见的功能问题，确保系统正常运行
// ===================================================================

(function() {
    'use strict';
    
    console.log('🔧 江湖情缘快速修复脚本启动...');
    
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuickFix);
    } else {
        initQuickFix();
    }
    
    function initQuickFix() {
        console.log('🔧 开始执行快速修复...');
        
        // 修复1: 确保generateImageData函数可用
        fixGenerateImageData();
        
        // 修复2: 确保盲盒功能正常
        fixBlindBoxFunction();
        
        // 修复3: 确保时间模块正常
        fixTimeModule();
        
        // 修复4: 确保农历模块降级方案
        fixLunarModule();
        
        // 修复5: 确保配置同步正常
        fixConfigSync();

        // 修复6: 防止页面闪烁
        fixPageFlicker();

        console.log('✅ 快速修复完成');
    }
    
    // 修复generateImageData函数
    function fixGenerateImageData() {
        if (typeof window.generateImageData !== 'function') {
            console.log('🔧 修复generateImageData函数...');
            
            window.generateImageData = function() {
                try {
                    if (typeof WEBSITE_CONFIG === 'undefined' || !WEBSITE_CONFIG.userCustomization.images) {
                        console.warn('⚠️ WEBSITE_CONFIG不可用，使用USER_SIMPLE_CONFIG');
                        
                        if (typeof USER_SIMPLE_CONFIG !== 'undefined' && USER_SIMPLE_CONFIG.photos) {
                            return USER_SIMPLE_CONFIG.photos.map((photo, index) => ({
                                src: '1/images/' + photo.file,
                                title: photo.title || '默认标题',
                                description: photo.description || '默认描述',
                                poem: photo.poem || '默认诗句'
                            }));
                        }
                        
                        return [];
                    }
                    
                    return WEBSITE_CONFIG.userCustomization.images.map((item, index) => ({
                        src: (WEBSITE_CONFIG.systemConfig.paths.imageFolder || '1/images/') + item.filename,
                        title: item.title,
                        description: item.description,
                        poem: item.poem
                    }));
                } catch (error) {
                    console.error('❌ generateImageData修复失败:', error);
                    return [];
                }
            };
            
            console.log('✅ generateImageData函数修复完成');
        }
    }
    
    // 修复盲盒功能
    function fixBlindBoxFunction() {
        // 确保盲盒点击事件正确绑定
        setTimeout(() => {
            const blindBoxMain = document.getElementById('blindBoxMain');
            if (blindBoxMain && typeof openBlindBox === 'function') {
                // 移除可能的重复事件监听器
                blindBoxMain.removeEventListener('click', openBlindBox);
                // 重新绑定事件
                blindBoxMain.addEventListener('click', openBlindBox);
                console.log('✅ 盲盒点击事件修复完成');
            }
        }, 500);
    }
    
    // 修复时间模块
    function fixTimeModule() {
        if (typeof TimeDisplayModule !== 'undefined') {
            // 确保时间模块能正常工作
            window.ensureTimeModule = function() {
                try {
                    if (!window.timeDisplayModule) {
                        window.timeDisplayModule = new TimeDisplayModule();
                        const result = window.timeDisplayModule.init();
                        if (result.success) {
                            console.log('✅ 时间模块修复初始化成功');
                        }
                    }
                } catch (error) {
                    console.error('❌ 时间模块修复失败:', error);
                }
            };
            
            // 延迟执行确保DOM元素存在
            setTimeout(window.ensureTimeModule, 1000);
        }
    }
    
    // 修复农历模块
    function fixLunarModule() {
        if (typeof LunarCalendarModule !== 'undefined') {
            // 确保农历模块能正常工作（即使没有lunar库）
            window.ensureLunarModule = function() {
                try {
                    if (!window.lunarCalendarModule) {
                        window.lunarCalendarModule = new LunarCalendarModule();
                        const result = window.lunarCalendarModule.init();
                        if (result.success) {
                            console.log('✅ 农历模块修复初始化成功');
                        }
                    }
                } catch (error) {
                    console.error('❌ 农历模块修复失败:', error);
                }
            };
            
            // 延迟执行确保DOM元素存在
            setTimeout(window.ensureLunarModule, 1500);
        }
    }
    
    // 修复配置同步
    function fixConfigSync() {
        if (typeof syncUserSimpleConfig === 'function') {
            // 确保配置同步正常工作
            setTimeout(() => {
                try {
                    // 检查USER_SIMPLE_CONFIG是否存在
                    if (typeof USER_SIMPLE_CONFIG === 'undefined') {
                        console.error('❌ USER_SIMPLE_CONFIG 未定义，无法同步配置');
                        return;
                    }

                    const result = syncUserSimpleConfig({
                        forceUpdate: true,  // 强制更新确保配置生效
                        partialUpdate: true,
                        enableDiffCheck: true
                    });

                    if (result.success) {
                        console.log('✅ 配置同步修复完成');

                        // 特别检查counterText配置
                        if (USER_SIMPLE_CONFIG.texts &&
                            USER_SIMPLE_CONFIG.texts.pages &&
                            USER_SIMPLE_CONFIG.texts.pages.counterText) {
                            console.log(`🎯 counterText配置: "${USER_SIMPLE_CONFIG.texts.pages.counterText}"`);
                        }
                    } else {
                        console.warn('⚠️ 配置同步可能有问题:', result.error);
                    }
                } catch (error) {
                    console.error('❌ 配置同步修复失败:', error);
                }
            }, 2000);
        }
    }
    
    // 全局错误处理
    window.addEventListener('error', function(event) {
        console.error('🚨 全局错误捕获:', event.error);
        
        // 尝试自动修复常见问题
        if (event.error.message.includes('generateImageData')) {
            fixGenerateImageData();
        }
    });
    
    // 修复页面闪烁
    function fixPageFlicker() {
        // 确保页面在初始化完成后显示
        if (!document.documentElement.classList.contains('loaded')) {
            setTimeout(() => {
                document.documentElement.classList.add('loaded');
                document.documentElement.style.visibility = 'visible';
                document.documentElement.style.opacity = '1';
                console.log('✅ 页面闪烁修复完成');
            }, 100);
        }
    }

    // 提供手动修复接口
    window.quickFix = {
        fixAll: initQuickFix,
        fixImages: fixGenerateImageData,
        fixBlindBox: fixBlindBoxFunction,
        fixTime: fixTimeModule,
        fixLunar: fixLunarModule,
        fixConfig: fixConfigSync,
        fixFlicker: fixPageFlicker
    };
    
    console.log('🔧 快速修复脚本加载完成，可使用 window.quickFix 进行手动修复');
})();
