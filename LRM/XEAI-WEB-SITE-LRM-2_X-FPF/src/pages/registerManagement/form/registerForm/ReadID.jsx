/**
 * @module 读取身份证
 */
import { useState } from 'react';
import { Input, message } from 'antd';
import moment from 'moment';

export default ({ value, onChange, disabled, form }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Input.Search
      loading={loading}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="请输入身份证号"
      disabled={disabled}
      enterButton="读身份证"
      onSearch={() => {
        setLoading(true);
        fetch(
          'http://127.0.0.1:24010/ZKIDROnline/ScanReadIdCardInfo?OP-DEV=1&CMD-URL=4&REPEAT=1',
        )
          .then(res => {
            setLoading(false);
            return res.text();
          })
          .then(res => {
            if (res) {
              const text = res.replace(/\\/g, '\\\\');
              const json = JSON.parse(text);
              if (json.ret === 0) {
                const {
                  Name,
                  IDNumber,
                  Address,
                  Nation,
                  Sex,
                  IDIssued,
                  Birthday,
                  IssuedData,
                  Base64Photo,
                  ValidDate,
                } = json.Certificate;
                form.setFieldsValue({
                  1: Name,
                  2: IDNumber,
                  5: Address,
                  8: moment(ValidDate),
                  9: IDIssued,
                  10: Sex,
                  18: 'data:image/png;base64,' + Base64Photo,
                  20: moment(Birthday),
                });
                message.success('读取成功！');
              } else if (json.ret === 11) {
                message.error('未检测到身份证！');
              } else {
                message.error('未检测到设备或设备驱动！');
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }}
    />
  );
};
