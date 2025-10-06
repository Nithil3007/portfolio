/**
 * Device Detection and Redirect Script
 * Detects mobile devices and redirects to appropriate version
 */

(function() {
    // Check if we're already on a specific version to prevent redirect loops
    const currentPage = window.location.pathname;
    const isMobilePage = currentPage.includes('mobile.html');
    const isDesktopPage = currentPage.includes('index.html') || currentPage.endsWith('/');
    
    // Mobile detection function
    function isMobileDevice() {
        // Check user agent
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Mobile device patterns
        const mobilePatterns = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
        
        // Check screen size as additional verification
        const isSmallScreen = window.innerWidth <= 768;
        
        // Check touch capability
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        return mobilePatterns.test(userAgent) || (isSmallScreen && isTouchDevice);
    }
    
    // Perform redirect if needed
    function redirectToAppropriateVersion() {
        const isMobile = isMobileDevice();
        
        if (isMobile && !isMobilePage) {
            // Redirect to mobile version
            window.location.href = 'mobile.html';
        } else if (!isMobile && isMobilePage) {
            // Redirect to desktop version
            window.location.href = 'index.html';
        }
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', redirectToAppropriateVersion);
    } else {
        redirectToAppropriateVersion();
    }
    
    // Optional: Add manual override buttons
    window.switchToMobile = function() {
        localStorage.setItem('forceVersion', 'mobile');
        window.location.href = 'mobile.html';
    };
    
    window.switchToDesktop = function() {
        localStorage.setItem('forceVersion', 'desktop');
        window.location.href = 'index.html';
    };
})();
