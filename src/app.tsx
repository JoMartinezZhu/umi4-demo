import { RuntimeAntdConfig } from '@umijs/max';
import { theme } from 'antd';

import { DEFAULT_THEME } from '@/constants';

// import {
//   LogoutOutlined
// } from '@ant-design/icons';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name?: string;
  themeToken: string;
}> {
  console.log(localStorage.getItem('themeToken'))
  return { name: '@umijs/max', themeToken: DEFAULT_THEME };
}

export const layout = () => {
  return {
    navTheme: 'light',
    layout: 'mix',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    headerHeight: 48,
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: '七妮妮',
      // render: (/*props,  */dom:any) => {
      //   return (
      //     <Dropdown
      //       menu={{
      //         items: [
      //           {
      //             key: 'logout',
      //             icon: <LogoutOutlined />,
      //             label: '退出登录',
      //           },
      //         ],
      //       }}
      //     >
      //       {dom}
      //     </Dropdown>
      //   );
      // },
    },
    menu: {
      locale: true,
    },
  };
};

export const antd: RuntimeAntdConfig = (memo: any) => {
  memo.theme ??= {};
  memo.theme.algorithm = theme.darkAlgorithm; // 配置 antd5 的预设 dark 算法

  memo.appConfig = {
    message: {
      // 配置 message 最大显示数，超过限制时，最早的消息会被自动关闭
      maxCount: 3,
    },
  };

  return memo;
};
