import React, { useState, useEffect } from 'react';
import { Input, Button, Row, Col } from 'antd';

export default ({
  value,
  onChange,
  buttonProps: { className: buttonClassName, text, span: buttonSpan = 10, ...restButton } = {},
  ...props
}) => {
  return (
    <Row gutter={10}>
      <Col span={14}>
        <Input
          value={value}
          onChange={e => {
            try {
              onChange(e.target.value);
            } catch (err) {
              console.log(err, '可能未赋予Form.Item以name');
            }
          }}
          placeholder="请输入验证码"
          {...props}
        ></Input>
      </Col>
      <Col span={buttonSpan}>
        <CountDownButton type="primary" className={buttonClassName} {...restButton}>
          {text || '获取验证码'}
        </CountDownButton>
      </Col>
    </Row>
  );
};

// 倒计时按钮
const CountDownButton = ({ className, children, onClick, ...rest }) => {
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(59);

  useEffect(() => {
    if (counting) {
      const countdown = setTimeout(() => {
        if (time > 0) {
          setTime(s => s - 1);
        } else {
          setTime(59);
          setCounting(false);
        }
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [time, counting]);

  return counting ? (
    <Button className={className} disabled block>
      {time}s
    </Button>
  ) : (
    <Button
      onClick={() => {
        onClick && onClick();
        setCounting(true);
      }}
      className={className}
      block
      {...rest}
    >
      {children}
    </Button>
  );
};
