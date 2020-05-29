/**
 * @module 标签页
 */
import moment from 'moment';
import { useRequest } from 'umi';
import { message } from 'antd';
import { Form } from 'lanlinker';
import baseInfoForm from './forms/baseInfo';
import generalInfoForm from './forms/generalInfo';
import personExpandedForm from './forms/personExpanded';
import companyExpandedForm from './forms/companyExpanded';
import EditForm from '../EditForm';
import { fetchUserInfo } from '../../servers';

const layout = { labelCol: { flex: '0 0 120px' } };

// 用户基本信息
export const BasicInfo = ({ type, authorized }) => {
  const [form] = Form.useForm();
  useRequest(fetchUserInfo, {
    defaultParams: [1],
    onSuccess(res, params) {
      form.setFieldsValue(res);
    },
  });

  return (
    <EditForm
      form={form}
      saveData={() => {
        // 认证过的个人无修改
        if (authorized === true && type === 'person') {
          return;
        }

        // message.success('修改成功');
      }}
      template={baseInfoForm}
      columns={2}
      type={type}
      authorized={authorized}
      {...layout}
    ></EditForm>
  );
};

// 用户综合信息
export const GeneralInfo = ({ type }) => {
  const [form] = Form.useForm();
  useRequest(fetchUserInfo, {
    defaultParams: [2],
    onSuccess(res, params) {
      res.D = moment(res.D, 'YYYY/MM/DD');
      const path = res.Hadfgdf.match(/^(\S*\/\/)(\S*)/);
      if (path) {
        res.prefix = path[1];
        res.Hadfgdf = path[2];
      }
      form.setFieldsValue(res);
    },
  });

  return (
    <EditForm
      form={form}
      saveData={() => {
        // todo 发起修改请求

        message.success('修改成功');
      }}
      template={generalInfoForm}
      type={type}
      columns={2}
      {...layout}
    ></EditForm>
  );
};

// 个人扩展信息
export const PersonExpanded = ({ type, authorized }) => {
  const [form] = Form.useForm();
  useRequest(fetchUserInfo, {
    defaultParams: [3],
    onSuccess(res, params) {
      form.setFieldsValue(res);
    },
  });

  return (
    <EditForm
      form={form}
      saveData={() => {
        // todo 发起修改请求

        message.success('修改成功');
      }}
      template={personExpandedForm}
      type={type}
      authorized={authorized}
      columns={2}
      {...layout}
    ></EditForm>
  );
};

// 企业扩展信息
export const CompanyExpanded = ({ type }) => {
  const [form] = Form.useForm();
  useRequest(fetchUserInfo, {
    defaultParams: [3],
    onSuccess(res, params) {
      form.setFieldsValue(res);
    },
  });

  return (
    <EditForm
      form={form}
      saveData={() => {
        // todo 发起修改请求
        message.success('修改成功');
      }}
      template={companyExpandedForm}
      type={type}
      columns={2}
      {...layout}
    ></EditForm>
  );
};
