import React, { useRef } from 'react';
import { Button } from 'antd';

const base64Head = 'data:image/jpeg;base64,';

export interface SafeInputProps {
  value?: string;
  onChange?: (value: Array<string>) => void;
}

const HighSpeedScanner: React.FC<SafeInputProps> = ({
  value = '',
  onChange,
}) => {
  const webSocket = new WebSocket('ws://localhost:1818');

  const imgRef = useRef<HTMLImageElement>(null);
  const cameraRef = useRef<HTMLImageElement>(null);

  webSocket.onmessage = event => {
    onMessage(event);
  };

  window.onbeforeunload = () => {
    webSocket.send('bStopPlay');
    webSocket.send('bStopPlay4');
  };

  webSocket.onerror = e => {
    console.log('websocket-error');
  };

  webSocket.onopen = e => {
    // console.log('websocket-open');
  };

  webSocket.onclose = () => {
    webSocket.send('bStopPlay');
    webSocket.send('bStopPlay4');
  };

  const onMessage = (event: WebSocketMessageEvent) => {
    if (event.data.indexOf('BeginbStartPlay') >= 0) {
    } else if (event.data.indexOf('BeginbStartPlay2') >= 0) {
    } else if (event.data.indexOf('bSetMode') >= 0) {
    } else {
      cameraRef.current &&
        (cameraRef.current.src = value = base64Head + event.data);
    }
  };

  return (
    <div>
      <p>
        <img ref={cameraRef} src="" style={{ width: 400, height: 300 }} />
        <img ref={imgRef} src="" style={{ width: 200, height: 150 }} />
      </p>

      <Button
        onClick={() => {
          webSocket.send('bStartPlay');
          webSocket.send('bSetMode(2)');
        }}
      >
        证件
      </Button>
      <Button
        onClick={() => {
          webSocket.send('bStartPlay2');
        }}
      >
        人像
      </Button>
      <Button
        onClick={() => {
          webSocket.send('bStopPlay');
        }}
      >
        关闭
      </Button>
      <Button
        onClick={() => {
          if (imgRef.current && cameraRef.current)
            imgRef.current.src = cameraRef.current.src;
        }}
      >
        获取图片
      </Button>
    </div>
  );
};

export default HighSpeedScanner;
