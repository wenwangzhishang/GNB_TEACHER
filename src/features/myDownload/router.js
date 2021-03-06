export default {
  path: '/myDownload',
  component: r => require.ensure([], () => r(require('./pages/layout')), 'myDownload/index'),
  children: [
    {
      path: '/',
      name: 'myDownload',
      component: r => require.ensure([], () => r(require('./pages/index')), 'myDownload/index')
    },
    {
      path: 'paper',
      name: 'myDownloadPaper',
      component: r => require.ensure([], () => r(require('./pages/paper')), 'myDownload/paper')
    },
    {
      path: 'paper/search',
      name: 'myDownloadPaperSearch',
      component: r => require.ensure([], () => r(require('./pages/paperSearch')), 'myDownload/paper/search')
    },
    {
      path: 'assemble',
      name: 'myDownloadAssemble',
      component: r => require.ensure([], () => r(require('./pages/assemble')), 'myDownload/assemble')
    },
    {
      path: 'assemble/:id',
      name: 'myDownloadAssemble_detail',
      component: r => require.ensure([], () => r(require('./pages/assembleDetail')), 'myDownload/assemble/detail')
    },
    {
      path: 'camera',
      name: 'myDownloadCamera',
      component: r => require.ensure([], () => r(require('./pages/camera')), 'myDownload/camera')
    },
    {
      path: 'camera/:id',
      name: 'myDownloadCamera_detail',
      component: r => require.ensure([], () => r(require('./pages/cameraDetail')), 'myDownload/camera/detail')
    },
    {
      path: 'good',
      name: 'myDownloadGood',
      component: r => require.ensure([], () => r(require('./pages/good')), 'myDownload/good')
    },
    {
      path: 'good/:id',
      name: 'myDownloadGood_detail',
      component: r => require.ensure([], () => r(require('./pages/goodDetail')), 'myDownload/good/detail')
    },
    {
      path: 'remember',
      name: 'myDownloadRemember',
      component: r => require.ensure([], () => r(require('./pages/remember')), 'myDownload/remember')
    },
    {
      path: 'remember/:id',
      name: 'myDownloadRemember_detail',
      component: r => require.ensure([], () => r(require('./pages/rememberDetail')), 'myDownload/remember/detail')
    }
  ]
}
