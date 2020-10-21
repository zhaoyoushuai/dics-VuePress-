const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    title: "Zsin",
    description: "前端笔记",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['meta', { name: 'author', content: 'Zsin' }],
        ['meta', { name: 'Keywords', content: 'vuepress 介绍, vuepress 说明, 前端笔记' }],


    ],
    plugins: {
        '@vuepress/last-updated': {
            transformer: (timestamp) => moment(timestamp).format('LLLL')
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        }
    },
    themeConfig: {
        // navbar: false,
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about.html' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: 'Vue',
                path: '/vue/'
            },
            {
                title: 'Git',
                children: ['git/']
            },
            {
                title: '工具方法',
                children: ['utils/', 'utils/skill']
            },
        ],
        lastUpdated: '更新时间', // string | boolean
    },
}