/**
 * @module 照片采集
 */
import { useState, useRef } from 'react';
import { ButtonModal, Modal } from 'lanlinker';
import { Button, Row, Upload, message } from 'antd';
import HighScanner from '@/components/HighScanner';

export default ({ value, onChange, disabled }) => {
  const [uploadModal, setUploadModal] = useState(false);
  const imgRef = useRef();
  const isImg = imgRef.current?.src.includes('base64');

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
        {isImg ? (
          <img src={value || imgRef.current.src} width={220} height={140} />
        ) : (
          '身份证图片'
        )}
      </div>
      <Row justify="space-around" style={{ width: 220, marginTop: 12 }}>
        <Button
          disabled={disabled}
          type="primary"
          onClick={e => {
            setUploadModal(true);
          }}
        >
          高拍仪上传
        </Button>
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
                reader.addEventListener('load', () => {
                  imgRef.current.src = reader.result;
                });
                reader.readAsDataURL(info.file.originFileObj);
              }
            }}
          >
            <Button type="primary">选择本地文件</Button>
          </Upload>
        </ButtonModal>
        <Modal
          title="高拍仪上传"
          width={700}
          visible={uploadModal}
          onOk={() => {
            if (isImg) {
              onChange(imgRef.current.src);
              setUploadModal(false);
            } else {
              message.error('拍照未完成！');
            }
          }}
          onCancel={() => setUploadModal(false)}
        >
          <HighScanner ref={imgRef} />
        </Modal>
      </Row>
    </>
  );
};
