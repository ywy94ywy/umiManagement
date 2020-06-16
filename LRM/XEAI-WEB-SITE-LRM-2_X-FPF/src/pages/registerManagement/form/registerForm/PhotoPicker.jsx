/**
 * @module 照片采集
 */
import { useState } from 'react';
import { ButtonModal } from 'lanlinker';
import { Button, Row, Upload } from 'antd';
import HighScanner from '@/components/HighScanner';

export default ({ value, onChange, disabled }) => {
  const [img, setImg] = useState(null);

  return (
    <>
      <div
        style={{
          width: 220,
          height: 140,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px dashed rgba(0,0,0,0.15)',
          background: 'rgba(0,0,0,0.02)',
          color: 'rgba(0,0,0,0.2)',
        }}
      >
        {img ? (
          <img src={value || img} width={220} height={140} />
        ) : (
          '身份证图片'
        )}
      </div>
      <Row justify="space-around" style={{ width: 220, marginTop: 12 }}>
        <HighScanner
          disabled={disabled}
          onOk={img => {
            setImg(img);
            onChange(img);
          }}
        />
        <ButtonModal
          title="本地上传"
          buttonProps={{
            text: '本地上传',
            type: 'primary',
            disabled,
          }}
        >
          <Upload
            showUploadList={false}
            onChange={info => {
              if (info.file.status === 'done') {
                const reader = new FileReader();
                reader.addEventListener('load', () => setImg(reader.result));
                reader.readAsDataURL(info.file.originFileObj);
              }
            }}
          >
            <Button type="primary">选择本地文件</Button>
          </Upload>
        </ButtonModal>
      </Row>
    </>
  );
};
