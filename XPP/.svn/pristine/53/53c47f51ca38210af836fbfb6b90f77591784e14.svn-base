/**
 * @module 用户证件信息
 */
import { Input, Avatar } from 'antd';
import { ButtonModal } from 'lanlinker';
import { UploadOutlined } from '@ant-design/icons';

export default () => {
  return [
    {
      label: '用户常用电话',
      component: <Input></Input>,
    },
    {
      component: <User></User>,
    },
    {
      label: '用户QQ账号',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      label: '用户微信账号',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      label: '用户出生账号',
      component: <Input></Input>,
    },
    {
      component: null,
    },
    {
      label: '用户常用地址',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户住址地区',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户常用邮编',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户简介',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户描述',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户备注',
      component: <Input></Input>,
      colSpan: 2,
    },
    {
      label: '用户网址',
      component: <Input></Input>,
      colSpan: 2,
    },
  ];
};

const User = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          zIndex: 20,
        }}
      >
        <Avatar size={150}></Avatar>
        <ButtonModal
          buttonProps={{ text: '更换头像', icon: <UploadOutlined />, style: { marginTop: 10 } }}
        >
          等待复用
        </ButtonModal>
      </div>
    </div>
  );
};
