/**
 * @module 高拍仪
 */
import { useState, useRef, useEffect, forwardRef } from 'react';
import { Button, Row, Col, message } from 'antd';
import { downloadFile } from '@/utils';

const base64Head = 'data:image/jpeg;base64,';

export default forwardRef(({ value }, imgRef) => {
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
