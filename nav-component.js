// ==================== 全局导航组件 ====================

// 导航配置
const navConfig = {
    icons: [
        {
            name: "Characters",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/apP9/1547X1590/2026-04-23_124400.png/webp",
            action: "characters",
            url: "characters.html"
        },
        {
            name: "About",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/Ft94/1531X1531/2026-04-23_124405.png/webp",
            action: "about",
            url: "about-me.html"
        },
        {
            name: "Gallery",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/QAUR/1517X1533/2026-04-23_124354.png/webp",
            action: "gallery",
            url: "gallery.html"
        },
        {
            name: "Home",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/ojeL/1512X1521/2026-04-23_124349.png/webp",
            action: "home",
            url: "index.html"
        }
    ]
};

// 创建导航HTML
function createNavComponent() {
    const navHTML = `
        <style>
            .global-nav {
                position: fixed;
                bottom: 30px;
                right: 30px;
                z-index: 999;
                background: rgba(255, 255, 255, 0.75);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 2px solid rgba(255, 255, 255, 0.9);
                border-radius: 25px;
                padding: 15px 20px;
                box-shadow: 0 10px 30px rgba(242, 157, 128, 0.2);
                display: flex;
                gap: 15px;
                align-items: center;
                transition: all 0.3s ease;
            }

            .global-nav:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(242, 157, 128, 0.3);
            }

            .nav-icon-btn {
                width: 50px;
                height: 50px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 15px;
                border: 1px solid rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }

            .nav-icon-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(242, 157, 128, 0.2), rgba(250, 216, 223, 0.2));
                opacity: 0;
                transition: opacity 0.3s;
            }

            .nav-icon-btn:hover::before {
                opacity: 1;
            }

            .nav-icon-btn:hover {
                transform: scale(1.1);
                box-shadow: 0 5px 15px rgba(242, 157, 128, 0.3);
            }

            .nav-icon-btn:active {
                transform: scale(0.95);
            }

            .nav-icon-btn img {
                width: 70%;
                height: 70%;
                object-fit: contain;
                position: relative;
                z-index: 1;
            }

            .nav-tooltip {
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%) translateY(-10px);
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 6px 12px;
                border-radius: 8px;
                font-size: 0.75rem;
                font-weight: 600;
                white-space: nowrap;
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s;
                font-family: 'Nunito', sans-serif;
            }

            .nav-icon-btn:hover .nav-tooltip {
                opacity: 1;
                transform: translateX(-50%) translateY(-5px);
            }

            /* 响应式设计 */
            @media (max-width: 768px) {
                .global-nav {
                    bottom: 20px;
                    right: 20px;
                    padding: 12px 15px;
                    gap: 12px;
                }

                .nav-icon-btn {
                    width: 45px;
                    height: 45px;
                }
            }

            @media (max-width: 480px) {
                .global-nav {
                    bottom: 15px;
                    right: 15px;
                    left: 15px;
                    padding: 10px;
                    gap: 10px;
                    justify-content: space-around;
                }

                .nav-icon-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                }
            }
        </style>

        <div class="global-nav" id="globalNav">
            ${navConfig.icons.map(icon => `
                <div class="nav-icon-btn" onclick="navigateTo('${icon.url}')" title="${icon.name}">
                    <img src="${icon.icon}" alt="${icon.name}">
                    <div class="nav-tooltip">${icon.name}</div>
                </div>
            `).join('')}
        </div>
    `;

    return navHTML;
}

// 导航函数
function navigateTo(url) {
    // 添加淡出动画
    document.body.style.transition = 'opacity 0.3s';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// 自动插入导航组件
function initGlobalNav() {
    const navElement = document.createElement('div');
    navElement.innerHTML = createNavComponent();
    document.body.appendChild(navElement);
}

// 页面加载时自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNav);
} else {
    initGlobalNav();
}
