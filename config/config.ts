import { defineConfig } from '@umijs/max';
import routes from './routes';

  export default defineConfig({
    antd: {
       // configProvider
    configProvider: {
      theme:{
        token: {
          colorPrimary: '#00b96b',
        },
      }
    },
    // babel-plugin-import
    import: false,
    // less or css, default less
    style: 'less',
    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    theme: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
    // Transform DayJS to MomentJS
    momentPicker: false,
    },
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
      title: '@umijs/max',
    },
    routes: routes,
    locale: {
      // 默认使用 src/locales/zh-CN.ts 作为多语言文件
      default: 'zh-CN',
      baseSeparator: '-',
    },
    hash: true,
    history: {
      type: 'hash',
    },
    npmClient: 'pnpm',
  });