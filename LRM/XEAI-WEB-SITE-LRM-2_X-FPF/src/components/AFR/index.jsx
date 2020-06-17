/**
 * @module 人脸识别
 */
import { useState, useEffect, useRef, forwardRef } from 'react';
import { Button } from 'antd';
const base64Head = 'data:image/jpeg;base64,';

export default forwardRef((_, ref) => {
  const [disabled, setDisabled] = useState(true);
  const cameraRef = useRef();

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:1818');

    const onMessage = event => {
      console.log(event)
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
        case 'BeginbStartPlay2trueEndbStartPlay2':
          break;
        default:
          if (disabled) {
            setDisabled(false);
          }
          cameraRef.current &&
            (cameraRef.current.src = base64Head + event.data);
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
        webSocket.send('bStartPlay2');
        console.log('高拍仪人像模式已启动');
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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        ref={cameraRef}
        src="高拍仪"
        style={{ width: 210, height: 300, marginBottom: 24 }}
      />
      <Button type="primary" disabled={disabled}>
        拍照
      </Button>
    </div>
  );
});
