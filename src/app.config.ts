import { useGlobalIconFont } from './assets/iconfont/helper';

export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: "subPages",
      pages: [
        'pages/home/index',
        'pages/my/index',
        'pages/food/index',
        'pages/memorial/index',
        'pages/loveletter/index',
        'pages/setting/index',
        'pages/account/index',
        'pages/privacy/index',
        'pages/agreement/index',
        'pages/about/index',
        'pages/login/index',
        'pages/register/index',
        'pages/notice/index'
      ]
    }
  ],
  window: {
    navigationStyle: 'custom'
  },
  lazyCodeLoading: 'requiredComponents',
  usingComponents: Object.assign(useGlobalIconFont()),
})

