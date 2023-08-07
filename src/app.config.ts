import { useGlobalIconFont } from './assets/iconfont/helper';

export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  subPackages: [
    {
      root: "subpage",
      pages: [
        'home/index',
        'my/index',
        'notice/index',
      ]
    },
    {
      root: "publish",
      pages: [
        'loveletter/index',
        'memorial/index',
        'daily/index'
      ]
    },
    {
      root: "settings",
      pages: [
        'setting/index',
        'account/index',
        'privacy/index',
        'agreement/index',
        'about/index',
      ]
    },
    {
      root: "user",
      pages: [
        'login/index',
        'register/index',
      ]
    },
    {
      root: "feature",
      pages: [
        'daily/index',
        'memorial/index',
        'loveletter/index',
      ]
    }
  ],
  window: {
    navigationStyle: 'custom'
  },
  lazyCodeLoading: 'requiredComponents',
  usingComponents: Object.assign(useGlobalIconFont()),
})

