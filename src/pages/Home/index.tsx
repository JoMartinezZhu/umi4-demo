import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { getLocale, setLocale, useModel } from '@umijs/max';
import { Button, ColorPicker } from 'antd';
import type { Color } from 'antd/es/color-picker';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const { initialState, setInitialState } = useModel('@@initialState');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <Button
          type="primary"
          onClick={() => {
            const locale = getLocale();
            setLocale(locale === 'en-US' ? 'zh-CN' : 'en-US', false);
          }}
        >
          Switch Lang
        </Button>
        <ColorPicker
          onChange={(color: Color) => {
            const theme = color.toHexString();
            localStorage.setItem('themeToken', theme)
            setInitialState({ ...initialState, themeToken: theme });
          }}
        />
      </div>
    </PageContainer>
  );
};

export default HomePage;
