import { useState, useRef, useEffect, forwardRef } from 'react';
import { Modal } from 'lanlinker';
import { Upload, Space, Button, Row, Col, message } from 'antd';
import HighScanner from '@/components/HighScanner';
import styles from './style.less';

export default ({ disabled }) => {
  const imgRef = useRef();
  const [previewModal, setPreviewModal] = useState({
    visible: false,
    src: '',
  });
  const [uploadModal, setUploadModal] = useState(true);
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
        <High ref={imgRef} />
      </Modal>
    </>
  );
};

// import { useState, useRef, useEffect } from 'react';
// import { Button, Row, Col, message } from 'antd';

const base64Head = 'data:image/jpeg;base64,';

const High = forwardRef(({ value }, imgRef) => {
  const [disabled, setDisabled] = useState(true);
  const cameraRef = useRef();

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:1818');

    const onMessage = event => {
      switch (event.data) {
        case 'BeginbStartPlay':
          break;
        case 'BeginbStartPlay2':
          break;
        case 'bSetMode':
          break;
        case 'BeginbStartPlaytrueEndbStartPlay':
          break;
        case 'BeginbSetModeTRUEEndbSetMode':
          break;
        default:
          if (disabled) {
            setDisabled(false);
          }
          cameraRef.current &&
            (cameraRef.current.src = value = base64Head + event.data);
          break;
      }
    };

    webSocket.onmessage = onMessage;

    // window.onbeforeunload = onStop;

    webSocket.onerror = e => {
      console.log('高拍仪错误', webSocket, e);
      if (webSocket.readyState === 3) {
        message.error('未检测到高拍仪插件！');
      }
    };

    webSocket.onopen = e => {
      if (webSocket.readyState === 1 && disabled) {
        webSocket.send('bStartPlay');
        webSocket.send('bSetMode(2)');
        console.log('高拍仪已启动');
      }
    };

    return () => {
      try {
        webSocket.close();
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return (
    <Row gutter={24}>
      <Col flex="400px">
        <h4>高拍仪预览</h4>
        <img ref={cameraRef} src="高拍仪" style={{ width: 400, height: 300 }} />
        <Row justify="end">
          <Button
            type="primary"
            disabled={disabled}
            style={{ marginTop: 12 }}
            onClick={() => {
              if (imgRef.current && cameraRef.current)
                imgRef.current.src = cameraRef.current.src;
            }}
          >
            拍照
          </Button>
        </Row>
      </Col>
      <Col flex="200px">
        <h4>照片缩略图</h4>
        <img ref={imgRef} src="图片预览" style={{ width: 200, height: 150 }} />
        <Row justify="end">
          <Button
            type="primary"
            disabled={disabled}
            style={{ marginTop: 12 }}
            onClick={() => {
              if (imgRef.current.src.startsWith(base64Head)) {
                downloadFile(imgRef.current.src, '照片缩略图');
              } else {
                message.error('请先拍照！');
              }
            }}
          >
            下载缩略图
          </Button>
        </Row>
      </Col>
    </Row>
  );
});

// base64图片下载
function downloadFile(content, fileName) {
  const aLink = document.createElement('a');
  const blob = base64ToBlob(content);
  console.log(blob);
  const evt = document.createEvent('HTMLEvents');
  evt.initEvent('click', true, true);
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}

const base64ToBlob = code => {
  const parts = code.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], {
    type: contentType,
  });
};

const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
