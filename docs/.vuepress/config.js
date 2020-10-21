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
            transformer: (timestamp, lang) => {
                return moment(timestamp).format('LLLL')
            }
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'zhaoyoushuai',
            repo: 'docs',
            clientId: '07f39e7eccd48abcf730',
            clientSecret: 'ddc9bdada5d4a3647970f9ee7fc342f3498a9285',
        },
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
        sidebar: {
            '/css/': [
                '',
                'c-aaa',     /* /foo/ */
                'c-bbb',  /* /foo/one.html */
                'c-ccc'   /* /foo/two.html */
            ],
            '/javascript/': [
                '',
                'js-aaa',     /* /foo/ */
                'js-bbb',  /* /foo/one.html */
                'js-ccc'   /* /foo/two.html */
            ]
        },
        lastUpdated: '更新时间', // string | boolean
    },
}