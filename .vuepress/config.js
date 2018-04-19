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
        title: 'Group 1',
        // collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
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