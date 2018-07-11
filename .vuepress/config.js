module.exports = {
	title: 'Vinli',
	description: 'Playground',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
		],
    sidebar: [
      {
        title: '文章',
        // collapsable: false,
        children: [
          '/',
          '/articles/04.md',
          '/articles/03.md',
          '/articles/02.md',
          '/articles/01.md'
        ]
      },
      {
        title: '项目',
        children: [ 
          '/page-a',
          '/page-b'
        ]
      }
    ],
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'cnblackj.github.io',
    // 当你的文档不是仓库的根目录时需要设置
    docsDir: 'docs',
    // 可选的, 默认是  master
    docsBranch: 'master',
    // 默认是 true, 设置为 false 来禁用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '纠正错误！'
  }
}