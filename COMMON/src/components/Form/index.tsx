/**
 * @module Form(antd-Form)
 * @description
 * 1、多列布局、跨列占位
 */
import React from 'react';
import { Form as AntdForm } from 'antd';
import {
  FormProps as AntdFormProps,
  FormItemProps as AntdFormItemProps,
} from 'antd/es/form';

export interface configForm extends AntdFormItemProps {
  colSpan?: number;
  component?: React.ReactNode;
}

export interface FormProps extends AntdFormProps {
  configForm?: configForm[];
  columns?: number;
  gutter?: number;
}

interface IForm extends React.FC<FormProps> {
  useForm: any;
  Item: any;
}

interface ItemWrapperProps {
  columns: number;
  gutter: number;
  colSpan?: number;
  layout?: string;
}

const Form: IForm = ({
  configForm = [],
  columns = 1,
  gutter = 24,
  children,
  layout,
  ...formProps
}) => {
  return (
    <AntdForm layout={layout} {...formProps}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: layout !== 'inline' ? `0 -${gutter / 2}px` : undefined,
        }}
      >
        {configForm.length > 0
          ? // 使用配置型表单
            configForm.map((item, index) => {
              // 判断类型是非空对象
              if (
                Object.prototype.toString.call(item) === '[Object Object]' ||
                Object.keys(item).length === 0
              ) {
                return;
              }

              const { component, colSpan, ...formItemProps } = item;
              return (
                <ItemWrapper
                  layout={layout}
                  columns={columns}
                  colSpan={colSpan}
                  gutter={gutter}
                  key={index}
                >
                  {component ? (
                    <Form.Item {...formItemProps}>{component}</Form.Item>
                  ) : null}
                </ItemWrapper>
              );
            })
          : // 非配置表单也具备表格配置能力
            React.Children.map(children, (child, index) => {
              const props = child && (child as React.ReactElement).props;

              if (props) {
                const { colSpan = 1 } = props;
                return (
                  <ItemWrapper
                    layout={layout}
                    columns={columns}
                    colSpan={colSpan}
                    gutter={gutter}
                    key={index}
                  >
                    {child}
                  </ItemWrapper>
                );
              } else {
                return child;
              }
            })}
      </div>
    </AntdForm>
  );
};

const ItemWrapper: React.FC<ItemWrapperProps> = ({
  layout,
  children,
  gutter,
  columns,
  colSpan = 1,
}) => {
  const span = Math.min(columns, colSpan);

  return (
    <div
      style={
        layout !== 'inline'
          ? {
              width: (100 * span) / columns + '%',
              padding: `0 ${gutter / 2}px`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

Form.Item = AntdForm.Item;

Form.useForm = AntdForm.useForm;

export default Form;
