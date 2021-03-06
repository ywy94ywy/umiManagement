import React from 'react';
import Table, { TableProps } from './Table';
import { Form, Input } from 'antd';
import { FormProps } from 'antd/es/form';

export interface EditTableProps<RecordType>
  extends Omit<TableProps<RecordType>, 'columns'> {
  formProps?: FormProps;
  columns?: any[];
  editingKey?: string;
  rowKeyName: string;
}

interface EditableCellProps {
  editing?: boolean;
  dataIndex?: string;
  required?: boolean;
  title?: string;
  rules?: any[];
  inputNode?: React.ReactElement;
}

const EditTable: React.FC<EditTableProps<any>> = ({
  formProps,
  editingKey = '',
  columns = [],
  rowKeyName = 'id',
  dataSource,
  ...props
}) => {
  const isEditing = (record: any) => record[rowKeyName] === editingKey; // 是否正在编辑

  // 为可编辑单元格添加属性
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: any) => ({
        record,
        inputNode: col.inputNode,
        dataIndex: col.dataIndex,
        title: col.title,
        rules: col.rules,
        required: col.required,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form component={false} {...formProps}>
      <Table
        pagination={false}
        components={components}
        columns={mergedColumns}
        rowKey={r => r[rowKeyName]}
        {...props}
      ></Table>
    </Form>
  );
};



// 可编辑单元格
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputNode = <Input />,
  rules,
  required,
  children,
  ...restProps
}) => {
  let nextRules = undefined;
  if (rules) {
    nextRules = rules;
  } else {
    nextRules = required
      ? [{ required: true, message: `请输入${title}` }]
      : undefined;
  }

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item name={dataIndex} style={{ margin: 0 }} rules={nextRules}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const components = {
  body: {
    cell: EditableCell,
  },
};

export default EditTable;
