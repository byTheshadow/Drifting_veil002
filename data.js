// ==================== 网站配置数据 ====================
const siteData = {
    // 基础信息
    siteName: "XXX's Portfolio",
    subtitle: "✧ Welcome to my creative world ✧",
    
    // 背景设置
    background: {
        useCustomImage: false,
        customImageUrl: "",
        gradientColors: {
            center: "#FFFFFF",
            edge: "#FAD8DF"
        }
    },
    
    // 开屏动画文字
    bootScreen: {
        text: "slide to unlock",
        subText: "Dreamy Portfolio OS"
    },
    
    // 时钟挂件
    clock: {
        show: true
    },
    
    // 音乐播放器
    musicPlayer: {
        show: true,
        title: "Aesthetic Vibes",
        artist: "Playing now...",
        coverImage: ""
    },
    
    // 桌面图标
    desktopIcons: [
        {
            name: "Cards",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/apP9/1547X1590/2026-04-23_124400.png/webp",
            action: "cards"
        },
        {
            name: "About",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/Ft94/1531X1531/2026-04-23_124405.png/webp",
            action: "about"
        },
        {
            name: "Gallery",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/QAUR/1517X1533/2026-04-23_124354.png/webp",
            action: "gallery"
        },
        {
            name: "Home",
            icon: "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/ojeL/1512X1521/2026-04-23_124349.png/webp",
            action: "home"
        }
    ],
    
    // 物理掉落物件
    fallingItems: [
        "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/ZSjf/2048X2048/2026-04-23_123941.png/webp",
        "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/XLGH/2048X2048/2026-04-23_124100.png/webp",
        "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/Iqlf/2048X2048/2026-04-23_124032.png/webp",
        "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/PhPh/2048X2048/2026-04-23_123511.png/webp",
        "https://tc-new.z.wiki/autoupload/1N2_UJVYUo2KjM-_22IFnCfNcKcqEnRmcljopnyJoMs/20260423/SOzn/2048X2048/2026-04-23_124135.png/webp"
    ],
    
    fallingItemsCount: 15
};
