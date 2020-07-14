/**
 * @module 用户基本信息
 */
import { Input, Select } from 'antd';
import { BindInput } from 'lanlinker';
import { USER_TYPE } from '@/config/enum';

export default ({ disabled, userType, authorized, form } = {}) => {
  // console.log(form.getFieldsValue(), '123');
  return [
    {
      name: 'userType',
      label: '用户类型',
      component: (
        <Select disabled>
          <Select.Option value={USER_TYPE[0]}>个人</Select.Option>
          <Select.Option value={USER_TYPE[1]}>企业</Select.Option>
        </Select>
      ),
    },
    {
      component: null,
    },
    {
      name: 'userFullName',
      label: '用户全名',
      component: <Input disabled={authorized ? true : disabled}></Input>,
      rules: [{ required: true }],
    },
    userType === USER_TYPE[0] && {
      component: null,
    },
    userType === USER_TYPE[1] && {
      name: 'userBriefName',
      label: '用户简名',
      component: <Input disabled={disabled}></Input>,
    },
    {
      name: 'userId',
      label: '用户数字账号',
      component: <Input disabled></Input>,
    },
    {
      name: 'userNickname',
      label: '用户昵称账号',
      component: <Input disabled={authorized ? true : disabled}></Input>,
    },
    {
      name: 'userMobile',
      label: '用户手机账号',
      component: <BindInput disabled active={true}></BindInput>,
    },
    {
      name: 'userEmail',
      label: '用户邮箱账号',
      component: <BindInput disabled active></BindInput>,
    },
    {
      name: 'userIdentity',
      label: '用户证件账号',
      component: (
        <BindInput
          disabled
          activeTitle="已认证"
          inactiveTitle="未认证"
        ></BindInput>
      ),
    },
    {
      name: 'userGuidId',
      label: '用户全球编号',
      component: <Input disabled></Input>,
    },
  ];
};
