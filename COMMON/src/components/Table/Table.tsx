import React from 'react';
import { Table as AntdTable, Row } from 'antd';
import { TableProps as AntdTableProps } from 'antd/es/table';
import styles from './style.less';

export interface TableProps<RecordType> extends AntdTableProps<RecordType> {
  actions?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  alert?: React.ReactNode;
}

const Table: React.FC<TableProps<any>> = ({ actions, alert, ...props }) => {
  return (
    <>
      {actions && (
        <Row
          justify="space-between"
          style={{ marginBottom: 12 }}
          className={styles.tableActions}
        >
          <div className={styles.left}>{actions.left}</div>
          <div className={styles.right}>{actions.right}</div>
        </Row>
      )}
      {alert && <div style={{ marginBottom: 12 }}>{alert}</div>}
      <AntdTable bordered {...props} />
    </>
  );
};
export default Table;
