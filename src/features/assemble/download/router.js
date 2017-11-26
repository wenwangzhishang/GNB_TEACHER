export default {
  path: '/assemble/download',
  component: r => require.ensure([], () => r(require('./pages/layout')), 'download/layout'),
  children: [
    {
      path: '/',
      name: 'download',
      component: r => require.ensure([], () => r(require('./pages/index')), 'download/index')
    },
    {
      path: 'update/:id',
      name: 'download_update',
      component: r => require.ensure([], () => r(require('./pages/update')), 'download/update')
    }
  ]
}
