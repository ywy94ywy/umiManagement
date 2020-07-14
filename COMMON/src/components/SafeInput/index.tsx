/**
 * @module 安全数字输入框
 */
import React, { useRef, useState, forwardRef } from 'react';
import { Input } from 'antd';

export interface SafeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  number?: number;
}

const SafeInput: React.FC<SafeInputProps> = ({
  value,
  onChange,
  number = 6,
  ...props
}) => {
  const inputRef = useRef([]);
  const [valueArr, setValueArr] = useState(new Array(number).fill(''));

  return (
    <Input.Group>
      <InputGenerate
        valueArr={valueArr}
        setValueArr={setValueArr}
        onChange={onChange}
        number={number}
        ref={inputRef}
        {...props}
      />
    </Input.Group>
  );
};

interface InputGenerateProps {
  number?: number;
  valueArr: string[];
  onChange?: any;
  setValueArr: (valueArr: string[]) => void;
}

const InputGenerate = forwardRef<any, InputGenerateProps>(
  ({ number = 6, valueArr, setValueArr, onChange, ...props }, ref: any) => {
    return (
      <>
        {new Array(number).fill('').map((_, i) => (
          <Input
            {...props}
            style={i === number - 1 ? inputLastStyle : inputStyle}
            maxLength={1}
            ref={e => (ref.current[i] = e)}
            key={i}
            value={valueArr[i]}
            onKeyPress={e => {
              const newArr = [...valueArr];
              newArr[i] = e.key;
              setValueArr(newArr);
              onChange && onChange(newArr.join(''));
              i < number - 1 && ref.current[i + 1].focus();
            }}
            onKeyUp={e => {
              if (e.keyCode === 8) {
                const newArr = [...valueArr];
                if (newArr[i] === '' && i > 0) {
                  newArr[i - 1] = '';
                } else {
                  newArr[i] = '';
                }
                setValueArr(newArr);
                onChange && onChange(newArr.join(''));
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
