import React from 'react';
import { Input, Form } from 'antd';

const FormTextItem = ({
  label = '',
  name = '',
  width = 0,
  editable = false,
  textArea = false,
  noStyle = false,
  ...props
}) => {
  return (
    <Form.Item label={label} name={name} noStyle={noStyle}>
      {editable ? (
        textArea ? (
          <Input.TextArea
            style={{ width: width ? width : '', resize: 'none' }}
            {...props}
          ></Input.TextArea>
        ) : (
          <Input style={width ? { width } : {}} {...props}></Input>
        )
      ) : (
        <Text textArea={textArea} width={width}></Text>
      )}
    </Form.Item>
  );
};

const Text = ({ textArea, width, value }) => {
  return (
    <div
      style={{
        height: textArea ? 58 : 32,
        lineHeight: '32px',
        padding: '0 12px',
        width: width ? width : 'auto',
      }}
    >
      {value}
    </div>
  );
};
export default FormTextItem;
