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
        'pages/message/index',
        'pages/food/index',
        'pages/memorial/index',
        'pages/loveletter/index',
      ]
    }
  ],
  window: {
    navigationStyle: 'custom'
  },
  lazyCodeLoading: 'requiredComponents',
  usingComponents: Object.assign(useGlobalIconFont()),
})

