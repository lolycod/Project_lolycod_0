// 🚀 移动端智能重定向脚本
// ===================================================================
// 检测移动设备和网络状况，自动重定向到优化版本
// ===================================================================

(function() {
    'use strict';
    
    // 等待设备检测器加载
    function waitForDeviceDetector() {
        return new Promise((resolve) => {
            if (window.DeviceDetector) {
                resolve();
            } else {
                const checkInterval = setInterval(() => {
                    if (window.DeviceDetector) {
                        clearInterval(checkInterval);
                        resolve();
                    }
                }, 100);

                // 超时降级
                setTimeout(() => {
                    clearInterval(checkInterval);
                    console.warn('⚠️ 设备检测器加载超时，使用简单检测');
                    resolve();
                }, 2000);
            }
        });
    }

    // 获取设备信息
    function getDeviceInfo() {
        if (window.DeviceDetector) {
            const device = window.DeviceDetector.detect();
            const network = window.DeviceDetector.getNetworkInfo();

            return {
                isMobile: device.isMobile,
                isTablet: device.isTablet,
                isDesktop: device.isDesktop,
                confidence: device.confidence,
                isSlowConnection: network.isSlowConnection,
                isSmallScreen: window.innerWidth <= 768,
                details: device.details,
                reasons: device.reasons
            };
        } else {
            // 降级检测
            console.warn('⚠️ 使用降级设备检测');
            const userAgent = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);

            return {
                isMobile: isMobile && !isTablet,
                isTablet: isTablet,
                isDesktop: !isMobile && !isTablet,
                confidence: 60, // 降级检测置信度较低
                isSlowConnection: false,
                isSmallScreen: window.innerWidth <= 768,
                details: { userAgent },
                reasons: ['降级检测模式']
            };
        }
    }
    
    // 重定向配置
    const REDIRECT_CONFIG = {
        enabled: true,
        forceRedirect: false, // 是否强制重定向
        showPrompt: true,     // 是否显示选择提示
        autoRedirectDelay: 3000, // 自动重定向延迟（毫秒）
        
        // 页面映射
        pageMapping: {
            'about.html': 'about-mobile.html',
            'index.html': 'index-mobile.html',
            'memories.html': 'memories-mobile.html'
        }
    };
    
    // 获取当前页面
    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        return filename;
    }
    
    // 检查是否需要重定向
    function shouldRedirect() {
        const currentPage = getCurrentPage();
        const mobileVersion = REDIRECT_CONFIG.pageMapping[currentPage];

        // 检查移动版本是否存在
        if (!mobileVersion) return false;

        // 检查是否已经在移动版本
        if (currentPage.includes('-mobile')) return false;

        // 检查用户偏好
        const userPreference = localStorage.getItem('jianghu-version-preference');
        if (userPreference === 'desktop') return false;

        // 获取设备信息
        const deviceInfo = getDeviceInfo();

        // 检查重定向条件
        const shouldRedirectToMobile = REDIRECT_CONFIG.enabled && (
            (deviceInfo.isMobile && deviceInfo.confidence >= 70) ||  // 高置信度移动设备
            (deviceInfo.isTablet && deviceInfo.isSmallScreen) ||     // 小屏平板
            deviceInfo.isSlowConnection ||                           // 慢速网络
            (deviceInfo.isSmallScreen && deviceInfo.confidence >= 50) // 小屏设备
        );

        // 记录检测结果
        console.log('🔍 重定向检测结果:', {
            shouldRedirect: shouldRedirectToMobile,
            deviceInfo: deviceInfo,
            currentPage: currentPage,
            targetPage: mobileVersion
        });

        return shouldRedirectToMobile;
    }
    
    // 执行重定向
    function performRedirect(targetPage, auto = false) {
        console.log(`📱 ${auto ? '自动' : '手动'}重定向到移动版本: ${targetPage}`);
        
        // 保存用户选择
        if (!auto) {
            localStorage.setItem('jianghu-version-preference', 'mobile');
        }
        
        // 执行重定向
        window.location.href = targetPage;
    }
    
    // 创建重定向提示
    function createRedirectPrompt(targetPage) {
        // 检查是否已经显示过提示
        const hasShown = sessionStorage.getItem('jianghu-redirect-prompt-shown');
        if (hasShown && !REDIRECT_CONFIG.forceRedirect) return;
        
        // 获取设备信息用于显示
        const deviceInfo = getDeviceInfo();
        const deviceTypeText = deviceInfo.isMobile ? '移动设备' :
                              deviceInfo.isTablet ? '平板设备' : '设备';

        const promptHTML = `
            <div id="mobile-redirect-prompt" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 15px;
                text-align: center;
                z-index: 10000;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: 14px;
                line-height: 1.4;
            ">
                <div style="max-width: 600px; margin: 0 auto;">
                    <div style="margin-bottom: 10px;">
                        📱 检测到您正在使用${deviceTypeText}，是否切换到移动优化版本？
                    </div>
                    <div style="margin-bottom: 10px; font-size: 12px; opacity: 0.9;">
                        移动版本加载更快，体验更流畅 (检测置信度: ${deviceInfo.confidence}%)
                    </div>
                    <div>
                        <button onclick="mobileRedirect.accept()" style="
                            background: #4CAF50;
                            color: white;
                            border: none;
                            padding: 8px 16px;
                            margin: 0 5px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 13px;
                        ">切换到移动版</button>
                        <button onclick="mobileRedirect.decline()" style="
                            background: rgba(255,255,255,0.2);
                            color: white;
                            border: none;
                            padding: 8px 16px;
                            margin: 0 5px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-size: 13px;
                        ">继续使用桌面版</button>
                    </div>
                    <div id="auto-redirect-countdown" style="
                        margin-top: 8px;
                        font-size: 11px;
                        opacity: 0.8;
                    "></div>
                </div>
            </div>
        `;
        
        // 插入提示
        document.body.insertAdjacentHTML('afterbegin', promptHTML);
        
        // 自动重定向倒计时
        if (REDIRECT_CONFIG.autoRedirectDelay > 0) {
            let countdown = Math.ceil(REDIRECT_CONFIG.autoRedirectDelay / 1000);
            const countdownElement = document.getElementById('auto-redirect-countdown');
            
            const updateCountdown = () => {
                if (countdownElement) {
                    countdownElement.textContent = `${countdown}秒后自动切换到移动版`;
                }
                countdown--;
                
                if (countdown < 0) {
                    performRedirect(targetPage, true);
                }
            };
            
            updateCountdown();
            const countdownInterval = setInterval(() => {
                if (document.getElementById('mobile-redirect-prompt')) {
                    updateCountdown();
                } else {
                    clearInterval(countdownInterval);
                }
            }, 1000);
        }
        
        // 标记已显示
        sessionStorage.setItem('jianghu-redirect-prompt-shown', 'true');
    }
    
    // 移除提示
    function removePrompt() {
        const prompt = document.getElementById('mobile-redirect-prompt');
        if (prompt) {
            prompt.remove();
        }
    }
    
    // 全局重定向控制对象
    window.mobileRedirect = {
        accept() {
            const currentPage = getCurrentPage();
            const targetPage = REDIRECT_CONFIG.pageMapping[currentPage];
            removePrompt();
            performRedirect(targetPage, false);
        },
        
        decline() {
            localStorage.setItem('jianghu-version-preference', 'desktop');
            removePrompt();
            console.log('📱 用户选择继续使用桌面版');
        },
        
        // 手动切换到移动版
        switchToMobile() {
            const currentPage = getCurrentPage();
            const targetPage = REDIRECT_CONFIG.pageMapping[currentPage];
            if (targetPage) {
                performRedirect(targetPage, false);
            }
        },
        
        // 重置用户偏好
        resetPreference() {
            localStorage.removeItem('jianghu-version-preference');
            sessionStorage.removeItem('jianghu-redirect-prompt-shown');
            console.log('📱 用户偏好已重置');
        }
    };
    
    // 主初始化函数
    async function initMobileRedirect() {
        // 等待设备检测器加载
        await waitForDeviceDetector();

        // 等待DOM加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', checkAndRedirect);
        } else {
            checkAndRedirect();
        }
    }

    function checkAndRedirect() {
        if (!shouldRedirect()) {
            console.log('📱 不需要重定向到移动版本');
            return;
        }

        const currentPage = getCurrentPage();
        const targetPage = REDIRECT_CONFIG.pageMapping[currentPage];

        if (!targetPage) {
            console.log('📱 当前页面没有对应的移动版本');
            return;
        }

        const deviceInfo = getDeviceInfo();

        console.log('📱 检测到移动设备，准备重定向');
        console.log('设备信息:', {
            type: deviceInfo.isMobile ? 'mobile' : deviceInfo.isTablet ? 'tablet' : 'desktop',
            confidence: deviceInfo.confidence,
            isSlowConnection: deviceInfo.isSlowConnection,
            isSmallScreen: deviceInfo.isSmallScreen,
            userAgent: navigator.userAgent,
            screenSize: `${window.innerWidth}x${window.innerHeight}`,
            reasons: deviceInfo.reasons
        });

        if (REDIRECT_CONFIG.forceRedirect) {
            // 强制重定向
            performRedirect(targetPage, true);
        } else if (REDIRECT_CONFIG.showPrompt) {
            // 显示选择提示
            createRedirectPrompt(targetPage);
        } else {
            // 直接重定向
            performRedirect(targetPage, true);
        }
    }
    
    // 添加移动版本切换按钮（可选）
    function addMobileSwitchButton() {
        const currentPage = getCurrentPage();
        const targetPage = REDIRECT_CONFIG.pageMapping[currentPage];
        
        if (!targetPage || currentPage.includes('-mobile')) return;
        
        const button = document.createElement('button');
        button.innerHTML = '📱 移动版';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            z-index: 1000;
            font-size: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        `;
        
        button.onclick = () => window.mobileRedirect.switchToMobile();
        document.body.appendChild(button);
    }
    
    // 自动初始化
    initMobileRedirect();
    
    // 延迟添加切换按钮
    setTimeout(addMobileSwitchButton, 2000);
    
    console.log('📱 移动端重定向脚本加载完成');
})();
