import { useState, useRef } from 'react';
import { Modal } from 'lanlinker';
import { Upload, Space, Button } from 'antd';
import HighScanner from '@/components/HighScanner';
import { dataURLtoFile } from '@/utils';
import styles from './style.less';

export default ({ disabled }) => {
  const imgRef = useRef();
  const [previewModal, setPreviewModal] = useState({
    visible: false,
    src: '',
  });
  const [uploadModal, setUploadModal] = useState(false);
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        fileList={fileList}
        disabled={disabled}
        className={styles.uploadWrapper}
        onChange={({ fileList: newFileList }) => {
          console.log(newFileList);
          setFileList(newFileList);
        }}
        onPreview={e => {
          setPreviewModal({
            visible: true,
            src: e.url || e.thumbUrl,
          });
        }}
      >
        <Space>
          <Button size="small" disabled={disabled}>
            本地上传
          </Button>
          <Button
            size="small"
            disabled={disabled}
            onClick={e => {
              e.stopPropagation();
              setUploadModal(true);
            }}
          >
            高拍仪上传
          </Button>
        </Space>
      </Upload>
      <Modal
        title="附件预览"
        width={800}
        visible={previewModal.visible}
        onCancel={() => setPreviewModal({ ...previewModal, visible: false })}
        footer={null}
      >
        <img
          src={previewModal.src}
          alt="附件"
          style={{
            width: 600,
            maxHeight: 800,
            margin: '0 auto',
            display: 'block',
          }}
        />
      </Modal>
      <Modal
        title="高拍仪上传"
        width={700}
        visible={uploadModal}
        onOk={() => {
          const time = new Date().getTime();
          const file = dataURLtoFile(imgRef.current.src, time + '.jpeg');
          file.thumbUrl = imgRef.current.src;
          file.uid = time;

          setFileList([...fileList, file]);
          setUploadModal(false);
        }}
        onCancel={() => setUploadModal(false)}
      >
        <HighScanner ref={imgRef} />
      </Modal>
    </>
  );
};
