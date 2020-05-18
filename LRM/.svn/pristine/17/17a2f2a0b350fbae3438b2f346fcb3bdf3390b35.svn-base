/**
 * @module 员工属性统计
 * @todo 切换方式？组件封装
 */
import React from 'react';
import { PageHeaderWrapper, Table, ButtonModal } from 'lanlinker';
import { Select, Card, Row, Col, Tabs, Button } from 'antd';
import classNames from 'classnames';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper
      className={styles.attributeStatistics}
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
    >
      <Card>
        <Row gutter={24}>
          <Col span={16}>
            <Tabs
              className={styles.customTabs}
              renderTabBar={(props, DefaultDom) => {
                return (
                  <Row justify="space-between" className={styles.header}>
                    <Col className={styles.left}>
                      <span className={styles.title}>年龄</span>
                      <span
                        className={classNames(styles.subTitle, styles.prefix)}
                      >
                        平均年龄：在职43.8岁，离岗43.7岁
                      </span>
                    </Col>
                    <DefaultDom
                      {...props}
                      className={styles.prefix}
                    ></DefaultDom>
                  </Row>
                );
              }}
            >
              <Tabs.TabPane tab="全部" key="全部">
                <Chart height={400} data={data} scale={cols} forceFit>
                  <Axis
                    name="value"
                    label={{
                      formatter(text) {
                        return text * 100 + '%';
                      },
                    }}
                  />
                  <Tooltip
                    crosshairs={{
                      type: 'y',
                    }}
                  />
                  <Legend></Legend>
                  <Geom
                    type="intervalDodge"
                    position="ageArea*value"
                    color="state"
                    tooltip={[
                      'state*value',
                      (state, value) => {
                        return {
                          name: state,
                          value: value * 100 + '%',
                        };
                      },
                    ]}
                  />
                </Chart>
              </Tabs.TabPane>
              <Tabs.TabPane tab="男性" key="男性">
                <Chart height={400} data={data} scale={cols} forceFit>
                  <Axis
                    name="value"
                    label={{
                      formatter(text) {
                        return text * 100 + '%';
                      },
                    }}
                  />
                  <Tooltip
                    crosshairs={{
                      type: 'y',
                    }}
                  />
                  <Legend></Legend>
                  <Geom
                    type="intervalDodge"
                    position="ageArea*value"
                    color="state"
                    tooltip={[
                      'state*value',
                      (state, value) => {
                        return {
                          name: state,
                          value: value * 100 + '%',
                        };
                      },
                    ]}
                  />
                </Chart>
              </Tabs.TabPane>
              <Tabs.TabPane tab="女性" key="女性">
                <Chart height={400} data={data} scale={cols} forceFit>
                  <Axis
                    name="value"
                    label={{
                      formatter(text) {
                        return text * 100 + '%';
                      },
                    }}
                  />
                  <Tooltip
                    crosshairs={{
                      type: 'y',
                    }}
                  />
                  <Legend></Legend>
                  <Geom
                    type="intervalDodge"
                    position="ageArea*value"
                    color="state"
                    tooltip={[
                      'state*value',
                      (state, value) => {
                        return {
                          name: state,
                          value: value * 100 + '%',
                        };
                      },
                    ]}
                  />
                </Chart>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={8}>
            <Tabs
              className={styles.customTabs}
              renderTabBar={() => {
                return (
                  <Row justify="space-between" className={styles.header}>
                    <Col className={styles.left}>
                      <span className={styles.title}>性别</span>
                    </Col>
                  </Row>
                );
              }}
            >
              <Tabs.TabPane key="null">
                <Chart height={400} data={data2} scale={cols} forceFit>
                  <Axis
                    name="value"
                    label={{
                      formatter(text) {
                        return text * 100 + '%';
                      },
                    }}
                  />
                  <Tooltip
                    crosshairs={{
                      type: 'y',
                    }}
                  />
                  <Legend></Legend>
                  <Geom
                    type="intervalDodge"
                    position="sex*value"
                    color="state"
                    tooltip={[
                      'state*value',
                      (state, value) => {
                        return {
                          name: state,
                          value: value * 100 + '%',
                        };
                      },
                    ]}
                  />
                </Chart>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col span={8}>
            <Tabs
              className={styles.customTabs}
              renderTabBar={(props, DefaultDom) => {
                return (
                  <Row justify="space-between" className={styles.header}>
                    <Col className={styles.left}>
                      <span className={styles.title}>岗位</span>
                    </Col>
                    <Row justify="end">
                      <DefaultDom
                        {...props}
                        className={styles.prefix}
                      ></DefaultDom>
                      <div
                        className={classNames(
                          styles.prefix,
                          styles.buttonWrapper,
                        )}
                      >
                        <ButtonModal
                          title="岗位排行"
                          buttonProps={{
                            text: '更多 >',
                            type: 'link',
                            size: 'small',
                            className: styles.more,
                          }}
                        ></ButtonModal>
                      </div>
                    </Row>
                  </Row>
                );
              }}
            >
              <Tabs.TabPane tab="在职" key="在职">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
              <Tabs.TabPane tab="离岗" key="离岗">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={8}>
            <Tabs
              className={styles.customTabs}
              renderTabBar={(props, DefaultDom) => {
                return (
                  <Row justify="space-between" className={styles.header}>
                    <Col className={styles.left}>
                      <span className={styles.title}>地域</span>
                    </Col>
                    <Row justify="end">
                      <DefaultDom
                        {...props}
                        className={styles.prefix}
                      ></DefaultDom>
                      <div
                        className={classNames(
                          styles.prefix,
                          styles.buttonWrapper,
                        )}
                      >
                        <ButtonModal
                          title="籍贯省份排行"
                          buttonProps={{
                            text: '更多 >',
                            type: 'link',
                            size: 'small',
                            className: styles.more,
                          }}
                        ></ButtonModal>
                      </div>
                    </Row>
                  </Row>
                );
              }}
            >
              <Tabs.TabPane tab="在职" key="在职">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
              <Tabs.TabPane tab="离岗" key="离岗">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
            </Tabs>
          </Col>
          <Col span={8}>
            <Tabs
              className={styles.customTabs}
              renderTabBar={(props, DefaultDom) => {
                return (
                  <Row justify="space-between" className={styles.header}>
                    <Col className={styles.left}>
                      <span className={styles.title}>民族</span>
                    </Col>
                    <Row justify="end">
                      <DefaultDom
                        {...props}
                        className={styles.prefix}
                      ></DefaultDom>
                      <div
                        className={classNames(
                          styles.prefix,
                          styles.buttonWrapper,
                        )}
                      >
                        <ButtonModal
                          title="民族排行"
                          buttonProps={{
                            text: '更多 >',
                            type: 'link',
                            size: 'small',
                            className: styles.more,
                          }}
                        ></ButtonModal>
                      </div>
                    </Row>
                  </Row>
                );
              }}
            >
              <Tabs.TabPane tab="在职" key="在职">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
              <Tabs.TabPane tab="离岗" key="离岗">
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  pagination={false}
                  rowKey={(v, i) => i}
                ></Table>
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
};

const columns = [
  {
    title: '排名',
    keyIndex: 'number',
    width: 65,
    align: 'center',
    render(t, r, i) {
      let j = i + 1;
      if (j < 10) {
        j = '0' + j;
      } else {
        j = '' + j;
      }

      switch (j) {
        case '01':
          return <div className={styles.first}>01</div>;
        case '02':
          return <div className={styles.second}>02</div>;
        case '03':
          return <div className={styles.third}>03</div>;
        default:
          return j;
      }
    },
  },
  {
    title: '岗位',
    dataIndex: 'b',
  },
  {
    title: '在职人数',
    dataIndex: 'c',
  },
  {
    title: '占比',
    dataIndex: 'd',
  },
];

const data2 = [
  { state: '在职占比', sex: '男性', value: 0.1 },
  { state: '在职占比', sex: '女性', value: 0.9 },
  { state: '离岗占比', sex: '男性', value: 0.37 },
  { state: '离岗占比', sex: '女性', value: 0.63 },
];

const data = [
  {
    state: '在职占比',
    ageArea: '16~30岁',
    value: 0.62,
  },
  {
    state: '离岗占比',
    ageArea: '16~30岁',
    value: 0.38,
  },
  { state: '在职占比', ageArea: '31~40岁', value: 0.5 },
  { state: '离岗占比', ageArea: '31~40岁', value: 0.5 },
  { state: '在职占比', ageArea: '41~50岁', value: 0.3 },
  { state: '离岗占比', ageArea: '41~50岁', value: 0.7 },
  { state: '在职占比', ageArea: '51~55岁', value: 0.9 },
  { state: '离岗占比', ageArea: '51~55岁', value: 0.1 },
  { state: '在职占比', ageArea: '55岁及以上', value: 0.48 },
  { state: '离岗占比', ageArea: '55岁及以上', value: 0.52 },
  { state: '在职占比', ageArea: '其他' },
  { state: '离岗占比', ageArea: '其他' },
];
const cols = {
  sales: {
    tickInterval: 20,
  },
};

const dataSource = new Array(10).fill(0).map(v => ({
  b: '收到货发',
  c: '23',
  d: '50%',
}));
