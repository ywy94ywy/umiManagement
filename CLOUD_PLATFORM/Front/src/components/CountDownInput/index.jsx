/**
 * @module 短信验证
 */
import { useState, useEffect, forwardRef } from 'react';
import { Input, Button, Row, Col } from 'antd';

export default forwardRef(
  (
    {
      value,
      onChange,
      loading,
      buttonProps: {
        className: buttonClassName,
        text,
        span: buttonSpan = 10,
        ...restButton
      } = {},
      maxLength = 6,
      ...props
    },
    ref,
  ) => {
    return (
      <Row gutter={10}>
        <Col span={14}>
          <Input
            ref={ref}
            value={value}
            maxLength={maxLength}
            onChange={onChange}
            placeholder="请输入验证码"
            {...props}
          />
        </Col>
        <Col span={buttonSpan}>
          <CountDownButton
            type="primary"
            className={buttonClassName}
            loading={loading}
            {...restButton}
          >
            {text || '获取验证码'}
          </CountDownButton>
        </Col>
      </Row>
    );
  },
);

// 倒计时按钮
const CountDownButton = ({
  className,
  children,
  onClick,
  loading,
  ...rest
}) => {
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
      onClick={e => {
        onClick && onClick(e, () => setCounting(true));
      }}
      loading={loading}
      className={className}
      block
      {...rest}
    >
      {children}
    </Button>
  );
};
