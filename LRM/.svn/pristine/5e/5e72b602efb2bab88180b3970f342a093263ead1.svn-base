import { PageHeaderWrapper, SearchTree } from 'lanlinker';
import { Card, Layout, Button, DatePicker, Row, Form } from 'antd';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper className={styles.reportCenter}>
      <Card>
        <Layout>
          <Layout.Sider theme="light" width={250}>
            <Card bodyStyle={{ padding: 12 }}>
              <SearchTree
                height={640}
                treeProps={{
                  treeRawData: treeData,
                  reName: {
                    titleName: 'a',
                    keyName: 'id',
                    iconName: 'c',
                    pIdName: 'pId',
                  },
                }}
              ></SearchTree>
            </Card>
          </Layout.Sider>
          <Layout.Content style={{ marginLeft: 24 }}>
            <Row justify="end" className={styles.btns}>
              <Form.Item label="选择生成日期区间">
                <DatePicker.RangePicker></DatePicker.RangePicker>
              </Form.Item>
              <Button type="primary">查询</Button>
              <Button type="primary">生成excel</Button>
              <Button>打印</Button>
            </Row>
            <div className={styles.title}>
              <span>报表预览</span>
            </div>
            <div className={styles.preview}>图片占位</div>
          </Layout.Content>
        </Layout>
      </Card>
    </PageHeaderWrapper>
  );
};

const treeData = [
  {
    id: 1,
    a: '名字1',
    b: '键1',
    c: '图标',
    pId: 0,
  },
  {
    id: 2,
    a: '名字2',
    b: '键2',
    c: '图标',
    pId: 0,
  },
  {
    id: 3,
    a: '名字3333333333333333333333333333333333333333333333',
    b: '键3',
    c: '图标',
    pId: 1,
  },
  {
    id: 7,
    a: '名字4',
    b: '键7',
    c: '图标',
    pId: 1,
  },
  {
    id: 8,
    a: '名字',
    b: '键8',
    c: '图标',
    pId: 1,
  },
  {
    id: 5,
    a: '名字',
    b: '键5',
    c: '图标',
    pId: 2,
  },
  {
    id: 4,
    a: '名字',
    b: '键4',
    c: '图标',
    pId: 3,
  },
  {
    id: 6,
    a: '名字',
    b: '键6',
    c: '图标',
    pId: 3,
  },
  {
    id: 9,
    a: '名字9',
    b: '键9',
    c: '图标',
    pId: 7,
  },
];
