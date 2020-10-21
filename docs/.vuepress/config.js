const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    title: "前端清单",
    description: "前端清单",
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
            { text: 'GitHub', link: 'https://github.com/zhaoyoushuai/docs' },
        ],
        sidebar: [
            {
                title: 'Vue',
                path: '/vue/'
            },
            {
                title: 'React',
                children: ['react/']
            },
            {
                title: 'Taro',
                children: ['taro/']
            },
            {
                title: 'Git',
                children: ['git/']
            },
            {
                title: 'Node',
                children: ['node/']
            },
            {
                title: '微信小程序',
                children: ['wx/']
            },
            {
                title: '工具方法',
                children: ['utils/regexp', 'utils/skill']
            },
            {
                title: 'BUG',
                children: ['bug/']
            },
        ],
        lastUpdated: '更新时间', // string | boolean
    },
}