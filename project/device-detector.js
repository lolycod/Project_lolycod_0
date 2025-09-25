// 🔍 精确设备检测器
// ===================================================================
// 使用多重检测算法，准确识别设备类型，避免误判
// ===================================================================

(function() {
    'use strict';
    
    // 设备检测结果缓存
    let deviceInfo = null;
    
    // 精确设备检测函数
    function detectDevice() {
        if (deviceInfo) return deviceInfo;
        
        const userAgent = navigator.userAgent.toLowerCase();
        const platform = navigator.platform ? navigator.platform.toLowerCase() : '';
        const vendor = navigator.vendor ? navigator.vendor.toLowerCase() : '';
        
        // 多重检测算法
        const detection = {
            // 1. User Agent 检测
            userAgent: {
                mobile: /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent),
                tablet: /ipad|android(?!.*mobile)|kindle|silk/i.test(userAgent),
                desktop: /windows|macintosh|linux/i.test(userAgent) && !/android|iphone|ipad/i.test(userAgent)
            },
            
            // 2. 屏幕尺寸检测
            screen: {
                width: window.screen.width,
                height: window.screen.height,
                availWidth: window.screen.availWidth,
                availHeight: window.screen.availHeight,
                devicePixelRatio: window.devicePixelRatio || 1
            },
            
            // 3. 视口尺寸检测
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                outerWidth: window.outerWidth,
                outerHeight: window.outerHeight
            },
            
            // 4. 平台检测
            platform: {
                value: platform,
                isWindows: /win/i.test(platform),
                isMac: /mac/i.test(platform),
                isLinux: /linux/i.test(platform),
                isAndroid: /android/i.test(platform),
                isIOS: /iphone|ipad|ipod/i.test(platform)
            },
            
            // 5. 厂商检测
            vendor: {
                value: vendor,
                isApple: /apple/i.test(vendor),
                isGoogle: /google/i.test(vendor)
            },
            
            // 6. 触摸支持检测
            touch: {
                supported: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
                maxTouchPoints: navigator.maxTouchPoints || 0
            },
            
            // 7. 硬件检测
            hardware: {
                concurrency: navigator.hardwareConcurrency || 1,
                memory: navigator.deviceMemory || 0,
                connection: navigator.connection || null
            }
        };
        
        // 综合判断设备类型
        const deviceType = determineDeviceType(detection);
        
        // 构建设备信息对象
        deviceInfo = {
            type: deviceType.type,
            confidence: deviceType.confidence,
            isMobile: deviceType.type === 'mobile',
            isTablet: deviceType.type === 'tablet',
            isDesktop: deviceType.type === 'desktop',
            details: {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                vendor: navigator.vendor,
                screen: detection.screen,
                viewport: detection.viewport,
                touch: detection.touch,
                hardware: detection.hardware
            },
            reasons: deviceType.reasons,
            timestamp: Date.now()
        };
        
        console.log('🔍 设备检测完成:', deviceInfo);
        return deviceInfo;
    }
    
    // 综合判断设备类型
    function determineDeviceType(detection) {
        const scores = { mobile: 0, tablet: 0, desktop: 0 };
        const reasons = [];
        
        // 1. User Agent 权重分析 (权重: 40%)
        if (detection.userAgent.mobile) {
            scores.mobile += 40;
            reasons.push('User Agent 识别为移动设备');
        } else if (detection.userAgent.tablet) {
            scores.tablet += 40;
            reasons.push('User Agent 识别为平板设备');
        } else if (detection.userAgent.desktop) {
            scores.desktop += 40;
            reasons.push('User Agent 识别为桌面设备');
        }
        
        // 2. 屏幕尺寸分析 (权重: 30%)
        const screenWidth = Math.max(detection.screen.width, detection.screen.height);
        const screenHeight = Math.min(detection.screen.width, detection.screen.height);
        
        if (screenWidth <= 768) {
            scores.mobile += 30;
            reasons.push(`屏幕宽度 ${screenWidth}px 符合移动设备`);
        } else if (screenWidth <= 1024) {
            scores.tablet += 25;
            scores.mobile += 5;
            reasons.push(`屏幕宽度 ${screenWidth}px 可能是平板设备`);
        } else {
            scores.desktop += 30;
            reasons.push(`屏幕宽度 ${screenWidth}px 符合桌面设备`);
        }
        
        // 3. 视口尺寸分析 (权重: 20%)
        const viewportWidth = detection.viewport.width;
        
        if (viewportWidth <= 480) {
            scores.mobile += 20;
            reasons.push(`视口宽度 ${viewportWidth}px 符合手机`);
        } else if (viewportWidth <= 768) {
            scores.mobile += 15;
            scores.tablet += 5;
            reasons.push(`视口宽度 ${viewportWidth}px 可能是大屏手机或小平板`);
        } else if (viewportWidth <= 1024) {
            scores.tablet += 20;
            reasons.push(`视口宽度 ${viewportWidth}px 符合平板设备`);
        } else {
            scores.desktop += 20;
            reasons.push(`视口宽度 ${viewportWidth}px 符合桌面设备`);
        }
        
        // 4. 触摸支持分析 (权重: 10%)
        if (detection.touch.supported) {
            if (detection.touch.maxTouchPoints >= 5) {
                scores.tablet += 8;
                scores.mobile += 2;
                reasons.push(`支持 ${detection.touch.maxTouchPoints} 点触摸，可能是平板`);
            } else {
                scores.mobile += 6;
                scores.tablet += 4;
                reasons.push('支持触摸，可能是移动设备');
            }
        } else {
            scores.desktop += 10;
            reasons.push('不支持触摸，可能是桌面设备');
        }
        
        // 5. 平台特殊处理
        if (detection.platform.isWindows || detection.platform.isMac || detection.platform.isLinux) {
            // 桌面操作系统，但可能是触摸屏笔记本
            if (detection.touch.supported && viewportWidth <= 1366) {
                scores.tablet += 5;
                reasons.push('桌面系统但支持触摸，可能是触摸屏笔记本');
            } else {
                scores.desktop += 15;
                reasons.push('桌面操作系统');
            }
        }
        
        if (detection.platform.isIOS) {
            if (screenWidth >= 1024) {
                scores.tablet += 15;
                reasons.push('iOS 大屏设备，可能是 iPad');
            } else {
                scores.mobile += 15;
                reasons.push('iOS 设备，可能是 iPhone');
            }
        }
        
        if (detection.platform.isAndroid) {
            if (screenWidth >= 800 && !navigator.userAgent.includes('Mobile')) {
                scores.tablet += 15;
                reasons.push('Android 大屏设备，可能是平板');
            } else {
                scores.mobile += 15;
                reasons.push('Android 移动设备');
            }
        }
        
        // 6. 硬件性能分析 (辅助判断)
        if (detection.hardware.concurrency <= 2 && detection.hardware.memory <= 2) {
            scores.mobile += 5;
            reasons.push('硬件性能较低，可能是移动设备');
        }
        
        // 7. 特殊情况处理
        // 检测开发者工具模拟
        if (detection.viewport.width !== detection.screen.availWidth || 
            detection.viewport.height !== detection.screen.availHeight) {
            const ratio = detection.viewport.width / detection.screen.availWidth;
            if (ratio < 0.8) {
                scores.desktop += 10;
                reasons.push('检测到可能的开发者工具模拟');
            }
        }
        
        // 确定最终设备类型
        const maxScore = Math.max(scores.mobile, scores.tablet, scores.desktop);
        let deviceType = 'desktop';
        
        if (scores.mobile === maxScore) {
            deviceType = 'mobile';
        } else if (scores.tablet === maxScore) {
            deviceType = 'tablet';
        }
        
        // 计算置信度
        const totalScore = scores.mobile + scores.tablet + scores.desktop;
        const confidence = totalScore > 0 ? (maxScore / totalScore * 100).toFixed(1) : 0;
        
        return {
            type: deviceType,
            confidence: parseFloat(confidence),
            scores: scores,
            reasons: reasons
        };
    }
    
    // 获取网络信息
    function getNetworkInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        return {
            isOnline: navigator.onLine,
            effectiveType: connection ? connection.effectiveType : 'unknown',
            downlink: connection ? connection.downlink : 0,
            rtt: connection ? connection.rtt : 0,
            saveData: connection ? connection.saveData : false,
            isSlowConnection: connection ? (
                connection.effectiveType === 'slow-2g' || 
                connection.effectiveType === '2g' ||
                connection.downlink < 1.5
            ) : false
        };
    }
    
    // 设备检测调试工具
    function createDebugPanel() {
        const device = detectDevice();
        const network = getNetworkInfo();
        
        const panel = document.createElement('div');
        panel.id = 'device-debug-panel';
        panel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 15px;
            border-radius: 8px;
            font-family: monospace;
            font-size: 12px;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        
        panel.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 10px; color: #4CAF50;">
                🔍 设备检测调试面板
            </div>
            <div><strong>设备类型:</strong> ${device.type}</div>
            <div><strong>置信度:</strong> ${device.confidence}%</div>
            <div><strong>屏幕:</strong> ${device.details.screen.width}×${device.details.screen.height}</div>
            <div><strong>视口:</strong> ${device.details.viewport.width}×${device.details.viewport.height}</div>
            <div><strong>触摸:</strong> ${device.details.touch.supported ? '支持' : '不支持'}</div>
            <div><strong>网络:</strong> ${network.effectiveType}</div>
            <div style="margin-top: 10px; font-size: 10px; opacity: 0.8;">
                <strong>判断依据:</strong><br>
                ${device.reasons.slice(0, 3).join('<br>')}
            </div>
            <button onclick="this.parentElement.remove()" style="
                position: absolute;
                top: 5px;
                right: 8px;
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 16px;
            ">&times;</button>
        `;
        
        document.body.appendChild(panel);
        
        // 5秒后自动隐藏
        setTimeout(() => {
            if (panel.parentElement) {
                panel.remove();
            }
        }, 10000);
    }
    
    // 导出到全局
    window.DeviceDetector = {
        detect: detectDevice,
        getNetworkInfo: getNetworkInfo,
        showDebugPanel: createDebugPanel,
        
        // 便捷方法
        isMobile: () => detectDevice().isMobile,
        isTablet: () => detectDevice().isTablet,
        isDesktop: () => detectDevice().isDesktop,
        getConfidence: () => detectDevice().confidence,
        
        // 强制重新检测
        refresh: () => {
            deviceInfo = null;
            return detectDevice();
        }
    };
    
    console.log('🔍 精确设备检测器加载完成');
})();
