/**
 * @module 高拍仪
 */
import { useEffect, useRef } from 'react';
import { ButtonModal } from 'lanlinker';
import { Button, Row, Col, message } from 'antd';

const base64Head = 'data:image/jpeg;base64,';

export default ({ value, onOk, disabled, buttonProps }) => {
  const webSocket = new WebSocket('ws://localhost:1818');

  const imgRef = useRef();
  const cameraRef = useRef();

  webSocket.onmessage = event => {
    onMessage(event);
  };

  window.onbeforeunload = () => {
    webSocket.send('bStopPlay');
    webSocket.send('bStopPlay4');
  };

  webSocket.onerror = e => {
    console.log('websocket-error', e);
  };

  webSocket.onopen = e => {
    // console.log('websocket-open');
  };

  webSocket.onclose = () => {
    webSocket.send('bStopPlay');
    webSocket.send('bStopPlay4');
  };

  const onMessage = event => {
    if (event.data.indexOf('BeginbStartPlay') >= 0) {
    } else if (event.data.indexOf('BeginbStartPlay2') >= 0) {
    } else if (event.data.indexOf('bSetMode') >= 0) {
    } else {
      cameraRef.current &&
        (cameraRef.current.src = value = base64Head + event.data);
    }
  };

  return (
    <ButtonModal
      title="高拍仪上传"
      width={700}
      buttonProps={{
        text: '高拍仪',
        type: 'primary',
        disabled,
        onClick(e) {
          try {
            webSocket.send('bStartPlay');
            webSocket.send('bSetMode(2)');
          } catch (err) {
            message.error('请先启动高拍仪插件！');
          }
        },
        ...buttonProps,
      }}
      onOk={(e, close) => {
        onOk(imgRef.current.src);
        close();
      }}
    >
      <Row gutter={24}>
        <Col flex="400px">
          <h4>高拍仪预览</h4>
          <img
            ref={cameraRef}
            src="高拍仪"
            style={{ width: 400, height: 300 }}
          />
          <Row justify="end">
            <Button
              type="primary"
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
          <img
            ref={imgRef}
            src="图片预览"
            style={{ width: 200, height: 150 }}
          />
          <Row justify="end">
            <Button
              type="primary"
              style={{ marginTop: 12 }}
              onClick={() => {
                if (imgRef.current && cameraRef.current)
                  imgRef.current.src = cameraRef.current.src;
              }}
            >
              下载缩略图
            </Button>
          </Row>
        </Col>
      </Row>
    </ButtonModal>
  );
};
