/**
 * @module 扩展信息（企业）
 */
import { useState } from 'react';
import { Form } from 'lanlinker';
import { Input, Select, Space, DatePicker, message } from 'antd';
import { useRequest, useModel } from 'umi';
import EditForm from '../../components/EditForm';
import {
  SOCIAL_CODE_LENGTH_VALIDATOR,
  LICENSE_VALIDATOR,
  BIZ_ADDRESS_VALIDATOR,
  LAW_PERSON_VALIDATOR,
  BIZ_SCOPE_VALIDATOR,
  UNIT_SCALE_VALIDATOR,
  MANAGER_NAME_VALIDATOR,
  MANAGER_RANK_VALIDATOR,
  MANAGER_TELEPHONE_VALIDATOR,
  FAX_VALIDATOR,
  MOBILE_VALIDATOR,
  EMAIL_VALIDATOR,
  EMAIL_LENGTH_VALIDATOR,
} from '@/config/reg';
import { fetchCompanyExpanded, updateCompanyExpanded } from '../../services';
import { fetchUnitType, fetchIndustryType } from '@/services';
import moment from 'moment';

const { RangePicker } = DatePicker;

export default ({ layout }) => {
  const [expandedForm] = Form.useForm();
  const { userInfo } = useModel('userInfo');
  const [disabled, setDisabled] = useState(true);
  const fetchCompanyExpandedRequest = useRequest(fetchCompanyExpanded, {
    onSuccess(res) {
      const data = res;
      data.registerDate = moment(data.registerDate);
      data.bizExpire = [moment(data.operatingStart), moment(data.operatingEnd)];
      expandedForm.setFieldsValue(data);
    },
  });
  const fetchUnitTypeRequest = useRequest(fetchUnitType);
  const fetchIndustryTypeRequest = useRequest(fetchIndustryType);
  const updateCompanyExpandedRequest = useRequest(updateCompanyExpanded, {
    manual: true,
    onSuccess(res) {
      fetchCompanyExpandedRequest.run();
      setDisabled(true);
    },
    onError(err) {
      message.error(err.message);
    },
  });

  return (
    <>
      <EditForm
        disabled={disabled}
        setDisabled={setDisabled}
        onSave={async () => {
          const data = await expandedForm.validateFields();
          data.userId = userInfo.id;
          data.registerDate = moment(data.registerDate).format('YYYY-MM-DD');
          data.operatingStart = moment(data.bizExpire[0]).format('YYYY-MM-DD');
          data.operatingEnd = moment(data.bizExpire[1]).format('YYYY-MM-DD');
          updateCompanyExpandedRequest.run(data);
        }}
        onCancel={() => {
          setDisabled(true);
        }}
      >
        <Form
          {...layout}
          columns={2}
          style={{ width: 800, margin: '0 auto' }}
          form={expandedForm}
        >
          <Form.Item
            label="统一社会信用代码"
            name="unifiedSocialCreditCode"
            rules={[
              {
                required: true,
              },
              SOCIAL_CODE_LENGTH_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照注册号"
            name="bizLicRegistrationCode"
            rules={[
              {
                required: true,
              },
              LICENSE_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照单位类型"
            name="type"
            rules={[
              {
                required: true,
                message: '请选择营业执照单位类型',
              },
            ]}
          >
            <Select disabled={disabled}>
              {fetchUnitTypeRequest.data &&
                fetchUnitTypeRequest.data.map(v => (
                  <Select.Option value={v.key} key={v.key}>
                    {v.value}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item />
          <Form.Item
            label="营业执照经营地址"
            colSpan={2}
            name="businessAddress"
            rules={[
              {
                required: true,
              },
              BIZ_ADDRESS_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照法人代表"
            name="legalRepresentative"
            rules={[
              {
                required: true,
              },
              LAW_PERSON_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照注册资本"
            name="registerCapital"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <FundsInput disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照成立日期"
            name="registerDate"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照营业期限"
            name="bizExpire"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <RangePicker disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="营业执照经营范围"
            colSpan={2}
            name="businessScope"
            rules={[
              {
                required: true,
              },
              BIZ_SCOPE_VALIDATOR,
            ]}
          >
            <Input.TextArea disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="单位行业"
            name="industry"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select disabled={disabled}>
              {fetchIndustryTypeRequest.data &&
                fetchIndustryTypeRequest.data.map(v => (
                  <Select.Option value={v.key} key={v.key}>
                    {v.value}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="单位规模"
            name="scale"
            rules={[
              {
                required: true,
              },
              UNIT_SCALE_VALIDATOR,
            ]}
          >
            <ScaleInput disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="负责人姓名"
            name="managerName"
            rules={[
              {
                required: true,
              },
              MANAGER_NAME_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="负责人姓职级"
            name="managerDutiesRank"
            rules={[
              {
                required: true,
              },
              MANAGER_RANK_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="负责人手机"
            name="managerMobile"
            rules={[
              {
                required: true,
              },
              MOBILE_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="负责人电话"
            name="managerTelephone"
            rules={[
              {
                required: true,
              },
              MANAGER_TELEPHONE_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="负责人邮箱"
            name="managerEmail"
            validateFirst
            rules={[
              {
                required: true,
              },
              EMAIL_VALIDATOR,
              EMAIL_LENGTH_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
          <Form.Item
            label="公司传真"
            name="fax"
            rules={[
              {
                required: true,
              },
              FAX_VALIDATOR,
            ]}
          >
            <Input disabled={disabled} />
          </Form.Item>
        </Form>
      </EditForm>
    </>
  );
};

const FundsInput = ({ value, onChange, ...props }) => (
  <Space>
    <span style={{ width: 50, display: 'inline-block' }}>人民币</span>
    <Input value={value} onChange={onChange} {...props} />
    <span style={{ width: 50, display: 'inline-block' }}>万元整</span>
  </Space>
);

const ScaleInput = ({ value, onChange, ...props }) => (
  <Space>
    <Input value={value} onChange={onChange} {...props} />
    <span style={{ width: 50, display: 'inline-block' }}>人</span>
  </Space>
);
