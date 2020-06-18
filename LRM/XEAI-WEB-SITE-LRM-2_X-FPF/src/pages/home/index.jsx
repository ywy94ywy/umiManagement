/**
 * @page 首页
 */
import { useState, useRef } from 'react';
import { Avatar, Col, Row, Typography, Statistic, Button, Card } from 'antd';
import { PageHeaderWrapper, ButtonModal } from 'lanlinker';
import General from './components/General';
import { Project, Training, Salary, Attendance } from './components/Statistics';
import { Shortcuts, CheckableShortcuts } from './components/Shortcuts';
import Distribution from './components/Distribution';
import styles from './style.less';

const { Text } = Typography;

const STATISTICS_TITLE = [
  '项目人员统计',
  '培训人员统计',
  '工资发放统计',
  '最近7天出勤统计',
];
const STATISTICS_LIST = STATISTICS_TITLE.map(v => ({ key: v, tab: v }));

export default () => {
  const [statistic, setStatistic] = useState(STATISTICS_TITLE[0]); // 统计标签页
  const [shortcutList, setShortcutList] = useState(shortcuts); // 快捷桌面
  const checks = useRef(null); // 快捷桌面checkbox

  return (
    <PageHeaderWrapper
      title={false}
      content={
        <PageHeaderContent
          user="贾亚军"
          post="劳务管理员"
          profile="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
        />
      }
      extraContent={
        <ExtraContent title="工程项目" content="吾悦广场1~7号楼住宅楼项目" />
      }
      className={styles.homepage}
    >
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card
            title="工程人员概况"
            style={{ height: 280 }}
            extra={<Button type="link">查看更多</Button>}
          >
            <General list={people}></General>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="快捷桌面"
            style={{ height: 280 }}
            extra={
              <ButtonModal
                buttonProps={{
                  text: '添加',
                  type: 'primary',
                }}
                title="选择快捷桌面应用"
                width={550}
                onOk={(e, close) => {
                  setShortcutList(checks.current);
                  close();
                }}
              >
                <CheckableShortcuts
                  list={shortcutList}
                  ref={checks}
                ></CheckableShortcuts>
              </ButtonModal>
            }
          >
            <Shortcuts
              list={shortcutList.filter(v => v.check)}
              key={shortcutList}
            ></Shortcuts>
          </Card>
        </Col>
        <Col span={16}>
          <Card
            tabList={STATISTICS_LIST}
            activeTabKey={statistic}
            onTabChange={key => setStatistic(key)}
            style={{ height: 550 }}
          >
            <Switcher current={statistic}></Switcher>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="现场工人岗位分布"
            extra={<Button type="link">查看更多</Button>}
            className={styles.switchWorkers}
            style={{ height: 550 }}
          >
            <Distribution
              managersData={managersData}
              laborsData={laborsData}
            ></Distribution>
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

const PageHeaderContent = ({ user, post, profile }) => {
  return (
    <section className={styles.pageHeaderContent}>
      <Avatar size="large" src={profile} className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          你好，
          {user}
        </div>
        <Text type="secondary">{post}</Text>
      </div>
    </section>
  );
};

const ExtraContent = ({ title, content }) => {
  return (
    <section className={styles.extraContent}>
      <Statistic title={title} value={content} />
    </section>
  );
};

const Switcher = ({ current }) => {
  switch (current) {
    case STATISTICS_TITLE[0]:
      return <Project />;
    case STATISTICS_TITLE[1]:
      return <Training />;
    case STATISTICS_TITLE[2]:
      return <Salary />;
    case STATISTICS_TITLE[3]:
      return <Attendance data={data}></Attendance>;
    default:
      return null;
  }
};

const data = [
  {
    day: '7-1',
    value: 38,
  },
  {
    day: '7-2',
    value: 52,
  },
  {
    day: '7-3',
    value: 61,
  },
  {
    day: '7-4',
    value: 145,
  },
  {
    day: '7-5',
    value: 48,
  },
  {
    day: '7-6',
    value: 38,
  },
  {
    day: '7-7',
    value: 38,
  },
];

const managersData = {
  total: {
    a: 200,
    b: 180,
    c: 164,
    d: 300,
    e: 270,
    f: 150,
    g: 380,
    h: 190,
  },
  current: {
    a: 180,
    b: 144,
    c: 123,
    d: 150,
    e: 120,
    f: 60,
    g: 110,
    h: 70,
  },
};

const laborsData = {
  total: {
    a: 300,
    b: 280,
    c: 564,
    d: 300,
    e: 270,
    f: 150,
    g: 380,
    h: 190,
  },
  current: {
    a: 280,
    b: 244,
    c: 323,
    d: 150,
    e: 120,
    f: 60,
    g: 110,
    h: 70,
  },
};

const shortcuts = [
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: true,
  },
  {
    title: '项目刷卡统计',
    icon: '&#xe792;',
    check: true,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: true,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
  {
    title: '人员管理',
    icon: '&#xe792;',
    check: false,
  },
];

const people = [
  {
    title: '在册人员',
    number: 6678,
  },
  {
    title: '在职人员',
    number: 5859,
  },
  {
    title: '入场人数',
    number: 423,
  },
  {
    title: '在场人员',
    number: 188,
  },
];
