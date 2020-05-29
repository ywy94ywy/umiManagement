/**
 * @module 安全数字输入框
 * @todo 完整性验证、数字格式
 * @todo 依赖于antd-Form
 */
import React, { useRef, forwardRef } from 'react';
import { Input } from 'antd';

export interface SafeInputProps {
  value?: Array<string>;
  onChange?: (value: Array<string>) => void;
  number?: number;
}

const SafeInput: React.FC<SafeInputProps> = ({ value = [], onChange, number = 6 }) => {
  const inputRef = useRef([]);

  return (
    <Input.Group>
      <InputGenerate
        value={value}
        onChange={onChange}
        number={number}
        ref={inputRef}
      ></InputGenerate>
    </Input.Group>
  );
};

interface InputGenerateProps extends SafeInputProps {}

const InputGenerate = forwardRef<any, InputGenerateProps>(
  ({ value = [], onChange, number = 6 }, ref: any) => {
    return (
      <>
        {new Array(number).fill('').map((_, i) => (
          <Input
            style={i === number - 1 ? inputLastStyle : inputStyle}
            maxLength={1}
            ref={e => {
              ref.current[i] = e;
            }}
            key={i}
            value={value[i]}
            onKeyPress={e => {
              value[i] = e.key;
              onChange && onChange([...value]);
              i < number - 1 && ref.current[i + 1].focus();
            }}
            onKeyUp={e => {
              if (e.keyCode === 8) {
                value[i] = '';
                onChange && onChange([...value]);
                i > 0 && ref.current[i - 1].focus();
              }
            }}
          ></Input>
        ))}
      </>
    );
  },
);

const inputStyle = {
  width: '32px',
  marginRight: '10px',
};
const inputLastStyle = {
  width: '32px',
};

export default SafeInput;
