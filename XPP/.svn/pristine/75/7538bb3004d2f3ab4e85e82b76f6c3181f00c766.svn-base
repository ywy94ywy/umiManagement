import { useState, useMemo } from 'react';
import { Form } from 'lanlinker';
import { Row, Button } from 'antd';
import styles from './style.less';

// 为表单添加修改功能
export default ({ template, type = 'person', saveData, ...props }) => {
  const [disabled, setDisabled] = useState(true);
  const configForm = useMemo(() => template({ disabled, type }), [disabled, template]);

  return (
    <div className={styles.formWrapper}>
      <Form configForm={configForm} className={styles.formStyle} gutter={70} {...props}></Form>
      <Row justify="end" className={styles.footer}>
        {disabled ? (
          <Button
            type="primary"
            onClick={() => {
              setDisabled(false);
            }}
          >
            修改
          </Button>
        ) : (
          <>
            <Button
              type="primary"
              onClick={() => {
                try {
                  saveData && saveData();
                  setDisabled(true);
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              保存
            </Button>
            <Button
              onClick={() => {
                setDisabled(true);
              }}
              style={{ marginLeft: 10 }}
            >
              取消
            </Button>
          </>
        )}
      </Row>
    </div>
  );
};
