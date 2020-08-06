/**
 * @module 用户头像更换
 */
import { useState, forwardRef } from 'react';
import { Avatar, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { blobToDataURL } from '@/utils';
import ImgCrop from 'antd-img-crop';
import styles from './style.less';
import 'antd/es/slider/style';

export default forwardRef(
  (
    {
      source = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      disabled = false,
      onOk,
      onChange,
    },
    _,
  ) => {
    const [profileBase64, setProfileBase64] = useState(source);

    return (
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <Avatar src={profileBase64} size={150} />
          <ImgCrop modalTitle="更换头像" shape="round" rotate>
            <Upload
              accept=".png,.jpg,.bmp,.jpeg,.gif"
              showUploadList={false}
              beforeUpload={file => {
                const callback = () =>
                  blobToDataURL(file, b => {
                    setProfileBase64(b);
                    onChange && onChange(b);
                  });
                if (onOk) {
                  onOk(callback);
                } else {
                  callback();
                }
                return file;
              }}
            >
              <Button className={styles.uploadBtn} disabled={disabled}>
                <UploadOutlined />
                更换头像
              </Button>
            </Upload>
          </ImgCrop>
        </div>
      </div>
    );
  },
);
