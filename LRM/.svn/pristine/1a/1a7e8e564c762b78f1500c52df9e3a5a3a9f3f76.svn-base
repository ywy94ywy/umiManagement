/**
 * @module 风险因素统计
 */
import React from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import { Row, Select } from 'antd';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper
      className={styles.riskStatistics}
      extra={
        <>
          <span>组织名称：</span>
          <Select></Select>
        </>
      }
    >
      <Card title="用工异常">
        <header>
          图标示例：<span>icon&nbsp;合格</span>&nbsp;&nbsp;
          <span>icon&nbsp;不合格</span>
        </header>
        <Row justify="space-around">
          <section className={styles.card}>
            <aside>出勤率预警</aside>
            <article>
              <Bar title="连续缺勤大于3天的人数" value="10" />
            </article>
          </section>
          <section className={styles.card}>
            <aside>出勤率指标预警</aside>
            <article>
              <Bar title="当月队伍出勤率小于90%的队伍数" value="10" />
              <Bar title="当月班组出勤率大于90%的班组数" value="10" />
              <Bar title="当月员工出勤率大于90%人数" value="10" />
            </article>
          </section>
        </Row>
        <Row justify="space-around">
          <section className={styles.card}>
            <aside>过时未出场预警</aside>
            <article>
              <Bar title="过时未刷卡出场的人数" value="10" />
            </article>
          </section>
          <section className={styles.card}>
            <aside>状态指标预警</aside>
            <article>
              <Bar title="长期未刷卡人数" value="10" />
              <Bar title="长期未安全教育人数" value="10" />
            </article>
          </section>
        </Row>
        <Row justify="space-around">
          <section className={styles.card}>
            <aside>资格证书预警</aside>
            <article>
              <Bar title="在岗特殊岗位未持证人数" value="10" />
              <Bar title="在岗资格证书到期人数" value="10" />
            </article>
          </section>
          <section className={styles.card}>
            <aside>体检预警</aside>
            <article>
              <Bar title="在岗体检不合格人数" value="10" />
              <Bar title="在岗体检资料未登记人数" value="10" />
            </article>
          </section>
        </Row>
      </Card>
      <Card title="用工异常" marginTop>
        <header>
          图标示例：<span>icon&nbsp;合格</span>
          <span>icon&nbsp;不合格</span>
        </header>
        <Row justify="space-around">
          <section className={styles.card}>
            <aside>身份证过期预警</aside>
            <article>
              <Bar title="登记拦截身份证过期人数" value="10" />
            </article>
          </section>
          <section className={styles.card}>
            <aside>超龄预警</aside>
            <article>
              <Bar title="登记拦截超龄人数" value="10" />
            </article>
          </section>
        </Row>
      </Card>
    </PageHeaderWrapper>
  );
};

const Bar = ({ icon, title, value }) => {
  return (
    <Row justify="space-between">
      <span>icon&nbsp;{title}</span>&nbsp;&nbsp;
      <span>{value}</span>
    </Row>
  );
};
