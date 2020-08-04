import { Divider, Row, Space, Button } from 'antd';

export default ({ children, disabled, setDisabled, onSave, onCancel }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: 500,
      paddingTop: 24,
    }}
  >
    {children}
    <div style={{ marginTop: 'auto' }}>
      <Divider />
      <Row justify="end">
        <Space>
          {disabled ? (
            <Button type="primary" onClick={() => setDisabled(false)}>
              修改
            </Button>
          ) : (
            <>
              <Button
                type="primary"
                onClick={e => {
                  onSave && onSave(e);
                }}
              >
                保存
              </Button>
              <Button
                onClick={e => {
                  onCancel && onCancel(e);
                }}
              >
                取消
              </Button>
            </>
          )}
        </Space>
      </Row>
    </div>
  </div>
);
