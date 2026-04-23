// ==================== data.js网站配置数据 ====================
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
    
    // 🎬 新增：电影字幕式更新日志
    updates: {
        show: true,
        items: [
            {
                date: "2026.04.23",
                title: "🌸 网站正式上线啦",
                description: "欢迎来到我的甜心小站～希望你喜欢这里的每一个角落！"
            },
            {
                date: "2026.04.20",
                title: "✨ 添加了物理引擎",
                description: "现在可以和掉落的小物件互动啦，试试点击它们吧！"
            },
            {
                date: "2026.04.18",
                title: "💕 优化了视觉效果",
                description: "调整了配色方案，让整体更加温柔可爱～"
            },
            {
                date: "2026.04.15",
                title: "🎵 音乐播放器上线",
                description: "边听歌边浏览，享受更好的体验！"
            },
            {
                date: "2026.04.10",
                title: "🎨 画廊功能开发中",
                description: "即将可以展示更多作品，敬请期待！"
            },
            {
                date: "2026.04.05",
                title: "📝 开始构建项目",
                description: "从零开始打造这个梦幻般的作品集网站～"
            },
            {
                date: "Coming Soon",
                title: "🚀 更多功能即将到来",
                description: "角色卡系统、互动留言板、主题切换...stay tuned!"
            }
        ]
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
