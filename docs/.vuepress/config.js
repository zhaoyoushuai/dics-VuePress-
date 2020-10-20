module.exports = {
    title: "Zsin",
    description: "前端笔记",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
        ['meta', { name: 'author', content: 'Zsin' }],
        ['meta', { name: 'Keywords', content: 'vuepress 介绍, vuepress 说明, 前端笔记' }]

    ],
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