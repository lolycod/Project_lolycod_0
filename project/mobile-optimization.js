// 🚀 移动端性能优化脚本
// ===================================================================
// 专门针对移动端的性能优化，包括资源预加载、懒加载、缓存优化等
// ===================================================================

(function() {
    'use strict';
    
    console.log('📱 移动端性能优化脚本启动...');
    
    // 检测移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSlowConnection = navigator.connection && (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');
    
    // 性能优化配置
    const OPTIMIZATION_CONFIG = {
        enableLazyLoading: true,
        enableImageOptimization: true,
        enableCDNFallback: true,
        enableResourcePreload: true,
        enableServiceWorker: false, // 可选开启
        maxImageSize: isMobile ? 800 : 1200, // 移动端限制图片尺寸
        compressionQuality: isMobile ? 0.7 : 0.8
    };
    
    // 性能监控
    const performanceMonitor = {
        startTime: performance.now(),
        metrics: {},
        
        mark(name) {
            this.metrics[name] = performance.now() - this.startTime;
            console.log(`⚡ ${name}: ${this.metrics[name].toFixed(2)}ms`);
        },
        
        getReport() {
            return {
                isMobile: isMobile,
                isSlowConnection: isSlowConnection,
                metrics: this.metrics,
                totalTime: performance.now() - this.startTime
            };
        }
    };
    
    // CDN资源本地化映射
    const CDN_FALLBACKS = {
        'bootstrap-css': {
            cdn: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
            local: 'assets/css/bootstrap.min.css',
            critical: false
        },
        'fontawesome': {
            cdn: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
            local: 'assets/css/fontawesome.min.css',
            critical: false
        },
        'bootstrap-js': {
            cdn: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
            local: 'assets/js/bootstrap.bundle.min.js',
            critical: false
        },
        'lunar-js': {
            cdn: 'https://cdn.jsdelivr.net/npm/lunar-javascript@1.6.12/dist/lunar.min.js',
            local: 'assets/js/lunar.min.js',
            critical: false
        }
    };
    
    // 图片懒加载
    function initLazyLoading() {
        if (!OPTIMIZATION_CONFIG.enableLazyLoading) return;
        
        performanceMonitor.mark('懒加载初始化开始');
        
        // 创建Intersection Observer
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // 加载图片
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px 0px', // 提前50px开始加载
            threshold: 0.01
        });
        
        // 观察所有懒加载图片
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
        
        performanceMonitor.mark('懒加载初始化完成');
    }
    
    // 图片优化
    function optimizeImages() {
        if (!OPTIMIZATION_CONFIG.enableImageOptimization) return;
        
        performanceMonitor.mark('图片优化开始');
        
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // 添加loading="lazy"属性
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // 移动端图片尺寸优化
            if (isMobile && img.naturalWidth > OPTIMIZATION_CONFIG.maxImageSize) {
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
            }
            
            // 添加错误处理
            img.addEventListener('error', function() {
                console.warn('⚠️ 图片加载失败:', this.src);
                this.style.display = 'none';
            });
        });
        
        performanceMonitor.mark('图片优化完成');
    }
    
    // CDN资源加载优化
    function optimizeCDNLoading() {
        if (!OPTIMIZATION_CONFIG.enableCDNFallback) return;
        
        performanceMonitor.mark('CDN优化开始');
        
        // 检查CDN资源加载状态
        Object.keys(CDN_FALLBACKS).forEach(key => {
            const resource = CDN_FALLBACKS[key];
            
            // 为非关键资源添加延迟加载
            if (!resource.critical && (isMobile || isSlowConnection)) {
                setTimeout(() => {
                    loadResourceWithFallback(resource);
                }, 1000); // 延迟1秒加载非关键资源
            }
        });
        
        performanceMonitor.mark('CDN优化完成');
    }
    
    // 带降级的资源加载
    function loadResourceWithFallback(resource) {
        return new Promise((resolve, reject) => {
            const isCSS = resource.cdn.includes('.css');
            const element = isCSS ? document.createElement('link') : document.createElement('script');
            
            // 设置超时
            const timeout = setTimeout(() => {
                console.warn(`⚠️ CDN资源加载超时: ${resource.cdn}`);
                loadLocalFallback(resource);
                reject(new Error('CDN timeout'));
            }, 5000);
            
            element.onload = () => {
                clearTimeout(timeout);
                console.log(`✅ CDN资源加载成功: ${resource.cdn}`);
                resolve();
            };
            
            element.onerror = () => {
                clearTimeout(timeout);
                console.warn(`❌ CDN资源加载失败: ${resource.cdn}`);
                loadLocalFallback(resource);
                reject(new Error('CDN failed'));
            };
            
            if (isCSS) {
                element.rel = 'stylesheet';
                element.href = resource.cdn;
            } else {
                element.src = resource.cdn;
                element.async = true;
            }
            
            document.head.appendChild(element);
        });
    }
    
    // 加载本地降级资源
    function loadLocalFallback(resource) {
        console.log(`🔄 尝试加载本地资源: ${resource.local}`);
        
        const isCSS = resource.local.includes('.css');
        const element = isCSS ? document.createElement('link') : document.createElement('script');
        
        if (isCSS) {
            element.rel = 'stylesheet';
            element.href = resource.local;
        } else {
            element.src = resource.local;
        }
        
        element.onerror = () => {
            console.error(`❌ 本地资源也加载失败: ${resource.local}`);
        };
        
        document.head.appendChild(element);
    }
    
    // 资源预加载
    function preloadCriticalResources() {
        if (!OPTIMIZATION_CONFIG.enableResourcePreload) return;
        
        performanceMonitor.mark('资源预加载开始');
        
        // 预加载关键图片
        const criticalImages = [
            '1/brk/微信图片_20250713234756.jpg', // 背景图片
            '1/images/微信图片_20250710215816.jpg', // 第一张图片
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
        
        // 预加载关键字体
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.as = 'font';
        fontPreload.type = 'font/woff2';
        fontPreload.href = 'assets/fonts/kaiti.woff2';
        fontPreload.crossOrigin = 'anonymous';
        document.head.appendChild(fontPreload);
        
        performanceMonitor.mark('资源预加载完成');
    }
    
    // 移动端特定优化
    function mobileSpecificOptimizations() {
        if (!isMobile) return;
        
        performanceMonitor.mark('移动端优化开始');
        
        // 禁用hover效果（移动端无意义且影响性能）
        const style = document.createElement('style');
        style.textContent = `
            @media (hover: none) {
                .hover-effect:hover,
                button:hover,
                .btn:hover {
                    transform: none !important;
                    box-shadow: none !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // 优化触摸滚动
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // 禁用双击缩放（如果需要）
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport && !viewport.content.includes('user-scalable=no')) {
            viewport.content += ', user-scalable=no';
        }
        
        // 减少动画复杂度
        if (isSlowConnection) {
            const animationStyle = document.createElement('style');
            animationStyle.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.1s !important;
                    animation-delay: 0s !important;
                    transition-duration: 0.1s !important;
                    transition-delay: 0s !important;
                }
            `;
            document.head.appendChild(animationStyle);
        }
        
        performanceMonitor.mark('移动端优化完成');
    }
    
    // 缓存优化
    function setupCaching() {
        // 设置本地存储缓存
        const cacheVersion = '1.0.0';
        const cacheKey = 'jianghu-cache-v' + cacheVersion;
        
        // 缓存配置数据
        if (typeof USER_SIMPLE_CONFIG !== 'undefined') {
            localStorage.setItem(cacheKey + '-config', JSON.stringify(USER_SIMPLE_CONFIG));
        }
        
        // 清理旧缓存
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('jianghu-cache-v') && key !== cacheKey + '-config') {
                localStorage.removeItem(key);
            }
        });
    }
    
    // 性能报告
    function generatePerformanceReport() {
        const report = performanceMonitor.getReport();
        
        console.group('📊 移动端性能报告');
        console.log('设备类型:', isMobile ? '移动设备' : '桌面设备');
        console.log('网络状况:', isSlowConnection ? '慢速网络' : '正常网络');
        console.log('总耗时:', report.totalTime.toFixed(2) + 'ms');
        console.log('性能指标:', report.metrics);
        console.groupEnd();
        
        // 发送性能数据（可选）
        if (window.gtag) {
            gtag('event', 'page_load_time', {
                event_category: 'Performance',
                event_label: isMobile ? 'Mobile' : 'Desktop',
                value: Math.round(report.totalTime)
            });
        }
        
        return report;
    }
    
    // 主初始化函数
    function initMobileOptimization() {
        performanceMonitor.mark('移动端优化总开始');
        
        // 立即执行的优化
        mobileSpecificOptimizations();
        preloadCriticalResources();
        
        // DOM加载完成后执行
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initLazyLoading();
                optimizeImages();
                optimizeCDNLoading();
                setupCaching();
                
                performanceMonitor.mark('移动端优化总完成');
                
                // 延迟生成报告
                setTimeout(generatePerformanceReport, 2000);
            });
        } else {
            initLazyLoading();
            optimizeImages();
            optimizeCDNLoading();
            setupCaching();
            
            performanceMonitor.mark('移动端优化总完成');
            setTimeout(generatePerformanceReport, 2000);
        }
    }
    
    // 导出到全局
    window.mobileOptimization = {
        init: initMobileOptimization,
        monitor: performanceMonitor,
        config: OPTIMIZATION_CONFIG,
        generateReport: generatePerformanceReport
    };
    
    // 自动初始化
    initMobileOptimization();
    
    console.log('✅ 移动端性能优化脚本加载完成');
})();
