// 🚀 移动端全局配置文件
// ===================================================================
// 统一管理移动端优化配置，确保所有页面的一致性
// ===================================================================

(function() {
    'use strict';
    
    // 移动端全局配置
    const MOBILE_GLOBAL_CONFIG = {
        // 性能优化配置
        performance: {
            enableLazyLoading: true,
            enableImageOptimization: true,
            enableCDNFallback: true,
            enableResourcePreload: true,
            enableServiceWorker: false,
            maxImageSize: 800,
            compressionQuality: 0.7,
            preloadImageCount: 2,
            backgroundLoadDelay: 500,
            criticalResourceTimeout: 5000
        },
        
        // 重定向配置
        redirect: {
            enabled: true,
            forceRedirect: false,
            showPrompt: true,
            autoRedirectDelay: 3000,
            rememberUserChoice: true
        },
        
        // 网络优化配置
        network: {
            enableConnectionAware: true,
            slowConnectionThreshold: 1.5, // Mbps
            enableDataSaver: true,
            enableOfflineSupport: false
        },
        
        // UI优化配置
        ui: {
            enableReducedMotion: true,
            enableTouchOptimization: true,
            enableViewportOptimization: true,
            disableHoverEffects: true,
            simplifyAnimations: true
        },
        
        // 缓存配置
        cache: {
            enableLocalStorage: true,
            enableSessionStorage: true,
            cacheVersion: '1.0.0',
            maxCacheSize: 50 * 1024 * 1024, // 50MB
            cacheExpiry: 7 * 24 * 60 * 60 * 1000 // 7天
        },
        
        // 监控配置
        monitoring: {
            enablePerformanceMonitoring: true,
            enableErrorTracking: true,
            enableUserBehaviorTracking: false,
            reportingEndpoint: null
        }
    };
    
    // 设备检测
    const DEVICE_INFO = {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTablet: /iPad|Android(?=.*\bMobile\b)/i.test(navigator.userAgent),
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
        isAndroid: /Android/.test(navigator.userAgent),
        isLowEndDevice: navigator.hardwareConcurrency <= 2,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio || 1
    };
    
    // 网络检测
    const NETWORK_INFO = {
        isOnline: navigator.onLine,
        connection: navigator.connection || navigator.mozConnection || navigator.webkitConnection,
        isSlowConnection: false,
        effectiveType: 'unknown',
        downlink: 0,
        rtt: 0
    };
    
    // 更新网络信息
    function updateNetworkInfo() {
        if (NETWORK_INFO.connection) {
            NETWORK_INFO.effectiveType = NETWORK_INFO.connection.effectiveType || 'unknown';
            NETWORK_INFO.downlink = NETWORK_INFO.connection.downlink || 0;
            NETWORK_INFO.rtt = NETWORK_INFO.connection.rtt || 0;
            NETWORK_INFO.isSlowConnection = 
                NETWORK_INFO.effectiveType === 'slow-2g' || 
                NETWORK_INFO.effectiveType === '2g' ||
                NETWORK_INFO.downlink < MOBILE_GLOBAL_CONFIG.network.slowConnectionThreshold;
        }
    }
    
    // 初始化网络信息
    updateNetworkInfo();
    
    // 监听网络变化
    if (NETWORK_INFO.connection) {
        NETWORK_INFO.connection.addEventListener('change', updateNetworkInfo);
    }
    
    window.addEventListener('online', () => {
        NETWORK_INFO.isOnline = true;
        console.log('📶 网络已连接');
    });
    
    window.addEventListener('offline', () => {
        NETWORK_INFO.isOnline = false;
        console.log('📵 网络已断开');
    });
    
    // 获取优化配置
    function getOptimizedConfig() {
        const config = JSON.parse(JSON.stringify(MOBILE_GLOBAL_CONFIG));
        
        // 根据设备性能调整配置
        if (DEVICE_INFO.isLowEndDevice) {
            config.performance.enableLazyLoading = true;
            config.performance.maxImageSize = 600;
            config.performance.compressionQuality = 0.6;
            config.performance.preloadImageCount = 1;
            config.ui.simplifyAnimations = true;
        }
        
        // 根据网络状况调整配置
        if (NETWORK_INFO.isSlowConnection) {
            config.performance.enableCDNFallback = true;
            config.performance.preloadImageCount = 1;
            config.performance.backgroundLoadDelay = 1000;
            config.network.enableDataSaver = true;
            config.ui.simplifyAnimations = true;
        }
        
        // 根据屏幕尺寸调整配置
        if (DEVICE_INFO.screenWidth <= 360) {
            config.performance.maxImageSize = 500;
            config.performance.compressionQuality = 0.5;
        }
        
        return config;
    }
    
    // 应用移动端优化
    function applyMobileOptimizations() {
        const config = getOptimizedConfig();
        
        // 应用UI优化
        if (config.ui.enableViewportOptimization) {
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.content = 'width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover';
            }
        }
        
        // 应用触摸优化
        if (config.ui.enableTouchOptimization) {
            document.body.style.webkitOverflowScrolling = 'touch';
            document.body.style.webkitTapHighlightColor = 'transparent';
        }
        
        // 禁用hover效果
        if (config.ui.disableHoverEffects && DEVICE_INFO.isMobile) {
            const style = document.createElement('style');
            style.textContent = `
                @media (hover: none) {
                    .hover-effect:hover,
                    button:hover,
                    .btn:hover,
                    a:hover {
                        transform: none !important;
                        box-shadow: none !important;
                        background-color: initial !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // 简化动画
        if (config.ui.simplifyAnimations && (NETWORK_INFO.isSlowConnection || DEVICE_INFO.isLowEndDevice)) {
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.1s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0.1s !important;
                    transition-delay: 0s !important;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        console.log('📱 移动端优化配置已应用');
    }
    
    // 性能监控
    const performanceMonitor = {
        startTime: performance.now(),
        metrics: {},
        
        mark(name) {
            this.metrics[name] = performance.now() - this.startTime;
            if (MOBILE_GLOBAL_CONFIG.monitoring.enablePerformanceMonitoring) {
                console.log(`⚡ ${name}: ${this.metrics[name].toFixed(2)}ms`);
            }
        },
        
        getReport() {
            return {
                device: DEVICE_INFO,
                network: NETWORK_INFO,
                metrics: this.metrics,
                totalTime: performance.now() - this.startTime,
                config: getOptimizedConfig()
            };
        }
    };
    
    // 错误追踪
    function setupErrorTracking() {
        if (!MOBILE_GLOBAL_CONFIG.monitoring.enableErrorTracking) return;
        
        window.addEventListener('error', (event) => {
            console.error('🚨 JavaScript错误:', {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error
            });
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('🚨 未处理的Promise拒绝:', event.reason);
        });
    }
    
    // 缓存管理
    const cacheManager = {
        set(key, value, expiry = MOBILE_GLOBAL_CONFIG.cache.cacheExpiry) {
            if (!MOBILE_GLOBAL_CONFIG.cache.enableLocalStorage) return false;
            
            try {
                const item = {
                    value: value,
                    expiry: Date.now() + expiry,
                    version: MOBILE_GLOBAL_CONFIG.cache.cacheVersion
                };
                localStorage.setItem(`jianghu-mobile-${key}`, JSON.stringify(item));
                return true;
            } catch (error) {
                console.warn('⚠️ 缓存设置失败:', error);
                return false;
            }
        },
        
        get(key) {
            if (!MOBILE_GLOBAL_CONFIG.cache.enableLocalStorage) return null;
            
            try {
                const itemStr = localStorage.getItem(`jianghu-mobile-${key}`);
                if (!itemStr) return null;
                
                const item = JSON.parse(itemStr);
                
                // 检查版本
                if (item.version !== MOBILE_GLOBAL_CONFIG.cache.cacheVersion) {
                    this.remove(key);
                    return null;
                }
                
                // 检查过期
                if (Date.now() > item.expiry) {
                    this.remove(key);
                    return null;
                }
                
                return item.value;
            } catch (error) {
                console.warn('⚠️ 缓存读取失败:', error);
                return null;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(`jianghu-mobile-${key}`);
                return true;
            } catch (error) {
                console.warn('⚠️ 缓存删除失败:', error);
                return false;
            }
        },
        
        clear() {
            try {
                Object.keys(localStorage).forEach(key => {
                    if (key.startsWith('jianghu-mobile-')) {
                        localStorage.removeItem(key);
                    }
                });
                return true;
            } catch (error) {
                console.warn('⚠️ 缓存清理失败:', error);
                return false;
            }
        }
    };
    
    // 初始化
    function initMobileConfig() {
        performanceMonitor.mark('移动端配置初始化开始');
        
        // 应用优化
        applyMobileOptimizations();
        
        // 设置错误追踪
        setupErrorTracking();
        
        performanceMonitor.mark('移动端配置初始化完成');
        
        console.log('📱 移动端全局配置初始化完成');
    }
    
    // 导出到全局
    window.MobileConfig = {
        config: MOBILE_GLOBAL_CONFIG,
        device: DEVICE_INFO,
        network: NETWORK_INFO,
        getOptimizedConfig: getOptimizedConfig,
        performanceMonitor: performanceMonitor,
        cacheManager: cacheManager,
        init: initMobileConfig
    };
    
    // 自动初始化
    if (DEVICE_INFO.isMobile || window.innerWidth <= 768) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMobileConfig);
        } else {
            initMobileConfig();
        }
    }
    
    console.log('📱 移动端全局配置文件加载完成');
})();
