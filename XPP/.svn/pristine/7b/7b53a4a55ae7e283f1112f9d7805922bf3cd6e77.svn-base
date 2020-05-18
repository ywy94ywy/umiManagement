import { Input, DatePicker, Avatar } from 'antd';
import { ButtonModal } from 'lanlinker';
import { UploadOutlined } from '@ant-design/icons';
import styles from './style.less';

export default () => {
  return [
    {
      label: '模块URI',
      name: 'aa',
      component: <Input></Input>,
    },
    {
      component: <User></User>,
    },
    {
      label: '模块元素名称',
      name: 'ab',
      component: <Input></Input>,
    },
    { hold: true },
    {
      label: '模块元素值',
      name: 'ac',
      component: <Input></Input>,
    },
    { hold: true },
    {
      label: '模块创建时间',
      name: 'ad',
      component: <DatePicker disabled></DatePicker>,
    },
    { hold: true },
    {
      label: '模块修改时间',
      name: 'ae',
      component: <DatePicker disabled></DatePicker>,
    },
    { hold: true },
    {
      label: '模块启用时间',
      name: 'af',
      component: <DatePicker></DatePicker>,
      rules: [{ required: true }],
    },
    { hold: true },
    {
      label: '模块失效时间',
      name: 'ag',
      component: <DatePicker></DatePicker>,
    },
    { hold: true },
  ];
};

const User = () => {
  return (
    <div className={styles.userWrapper}>
      <div className={styles.user}>
        <Avatar
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          size={120}
        ></Avatar>
        <ButtonModal
          title="更换图标"
          buttonProps={{
            text: '更换头像',
            icon: <UploadOutlined />,
            className: styles.upload,
          }}
        >
          暂无页面
        </ButtonModal>
        <div className={styles.content}>
          <p>
            <span>图标中文名称：</span>
            <span>蓝瓴科技</span>
          </p>
          <p>
            <span>图标fontclass英文名称：</span>
            <span>icon-logo-enterprise-lanlinker</span>
          </p>
          <p>
            <span>图标unicode英文名称：</span>
            <span>e69b</span>
          </p>
        </div>
      </div>
    </div>
  );
};
