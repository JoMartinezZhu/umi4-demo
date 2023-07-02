import { Outlet } from "@umijs/max"
import { ConfigProvider } from "antd"
import { useModel } from '@umijs/max';


export default function ThemeLayout(){
    const { initialState } = useModel('@@initialState');
    return (<ConfigProvider theme={{
        token: {
          colorPrimary: initialState?.themeToken,
        }
      }}>
        <Outlet/>
    </ConfigProvider>)
}