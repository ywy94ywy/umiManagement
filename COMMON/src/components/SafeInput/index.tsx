/**
 * @module 安全数字输入框
 * @todo 依赖于antd-Form
 */
import React, { useRef, forwardRef } from 'react';
import { Input } from 'antd';

export interface SafeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  number?: number;
}

const SafeInput: React.FC<SafeInputProps> = ({
  value = '',
  onChange,
  number = 6,
  ...props
}) => {
  const inputRef = useRef([]);
  const valueRef = useRef<string[]>(new Array(number).fill(''));

  return (
    <Input.Group>
      <InputGenerate
        value={value}
        onChange={onChange}
        number={number}
        ref={inputRef}
        valueRef={valueRef}
        {...props}
      />
    </Input.Group>
  );
};

interface InputGenerateProps extends SafeInputProps {
  valueRef: React.RefObject<string[]>;
}

const InputGenerate = forwardRef<any, InputGenerateProps>(
  ({ value = '', onChange, number = 6, valueRef, ...props }, ref: any) => {
    const onTrigger = () => {
      if (valueRef.current) {
        onChange && onChange(valueRef.current.join(''));
      }
    };

    return (
      <>
        {new Array(number).fill('').map((_, i) => (
          <Input
            {...props}
            style={i === number - 1 ? inputLastStyle : inputStyle}
            maxLength={1}
            ref={e => (ref.current[i] = e)}
            key={i}
            value={valueRef.current?.[i] || ''}
            onKeyPress={e => {
              valueRef.current && (valueRef.current[i] = e.key);
              onTrigger();
              i < number - 1 && ref.current[i + 1].focus();
            }}
            onKeyUp={e => {
              if (e.keyCode === 8) {
                if (valueRef.current) {
                  valueRef.current[i] === '' && i > 0
                    ? (valueRef.current[i - 1] = '')
                    : (valueRef.current[i] = '');
                }
                onTrigger();
                i > 0 && ref.current[i - 1].focus();
              }
            }}
          />
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
