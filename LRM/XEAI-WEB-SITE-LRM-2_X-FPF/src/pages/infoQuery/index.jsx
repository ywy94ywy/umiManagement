/**
 * @module 员工信息查询
 * @todo SearchBar类FORM封装
 * @todo checkableList自定义组件
 * @todo DropdownList任意点击关闭
 * @todo 排序
 */
import React, { useState } from 'react';
import { PageHeaderWrapper, Card } from 'lanlinker';
import {
  Modal,
  Cascader,
  // DatePicker,
  Pagination,
  Row,
  Button,
  Input,
  Form,
  Select,
} from 'antd';
import CheckableList from './components/CheckableList';
import SearchBar from './components/SearchBar';
// import DropdownList from './components/DropdownList';
import profile from './profile.png';
import classNames from 'classnames';
import styles from './style.less';

// const { RangePicker } = DatePicker;

export default () => {
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState(['latest', 'up']);
  const sortString = sort.join('-');

  return (
    <PageHeaderWrapper className={styles.infoQuery}>
      <Card>
        <Row justify="end" style={{ marginBottom: 16 }}>
          <Form layout="inline" initialValues={{ b: '1' }}>
            <Form.Item label="组织名称">
              <Select></Select>
            </Form.Item>
            <Form.Item>
              <Input
                addonBefore={
                  <Form.Item noStyle name="b">
                    <Select style={{ width: 80 }}>
                      <Select.Option value="1">姓名</Select.Option>
                      <Select.Option value="2">身份证号</Select.Option>
                    </Select>
                  </Form.Item>
                }
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary">查询</Button>
            </Form.Item>
            <Form.Item>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </Row>

        <SearchBar label="员工岗位" extensible>
          <CheckableList data={tagsFromServer.slice(0, 50)}></CheckableList>
          <hr />
          <CheckableList data={tagsFromServer.slice(51, 100)}></CheckableList>
        </SearchBar>
        <SearchBar label="籍贯省份">
          <Cascader></Cascader>
        </SearchBar>
        <SearchBar label="民族类型" extensible>
          <CheckableList data={tagsFromServer.slice(100, 150)}></CheckableList>
        </SearchBar>
        <SearchBar label="政治面貌" extensible>
          <CheckableList data={tagsFromServer.slice(150, 200)}></CheckableList>
        </SearchBar>
        {/* <SearchBar label="高级选项">
          <DropdownList
            title={[
              '资格证书',
              '性别',
              '年龄段',
              '进场日期',
              '退场日期',
              '在职状态',
              '职务类型',
              '劳务公司',
            ]}
            content={[
              <SearchBar bordered={false}>
                <CheckableList
                  data={['有证书', '无证书']}
                  single
                ></CheckableList>
              </SearchBar>,
              <SearchBar bordered={false}>
                <CheckableList data={['男', '女']} single></CheckableList>
              </SearchBar>,
              <SearchBar bordered={false}>
                <CheckableList
                  data={['16~30', '31~40', '41~50', '51~55', '55以上']}
                  single
                ></CheckableList>
              </SearchBar>,
              <SearchBar bordered={false}>
                <RangePicker></RangePicker>
              </SearchBar>,
              <SearchBar bordered={false}>
                <RangePicker></RangePicker>
              </SearchBar>,
              <SearchBar bordered={false}>
                <CheckableList data={['在岗', '离岗']} single></CheckableList>
              </SearchBar>,
              <SearchBar bordered={false}>
                <CheckableList
                  data={['管理人员', '队长', '班长', '普通劳务人员']}
                  single
                ></CheckableList>
              </SearchBar>,
              <SearchBar bordered={false}>
                <CheckableList
                  data={['劳务分包单位', '专业分包单位', '劳务甲指分包单位']}
                  single
                ></CheckableList>
              </SearchBar>,
            ]}
          ></DropdownList>
        </SearchBar> */}
      </Card>
      <Card
        title={
          <Row>
            <Row
              className={styles.latest}
              onClick={() => {
                if (sort[0] !== 'latest') {
                  setSort(['latest', 'up']);
                } else {
                  setSort(['latest', sort[1] === 'down' ? 'up' : 'down']);
                }
              }}
            >
              <span>最新排序</span>
              <span className={styles.sort}>
                <div
                  className={classNames(
                    styles.up,
                    sortString === 'latest-up' && styles.active,
                  )}
                ></div>
                <div
                  className={classNames(
                    styles.down,
                    sortString === 'latest-down' && styles.active,
                  )}
                ></div>
              </span>
            </Row>
            <Row
              className={styles.age}
              onClick={() => {
                if (sort[0] !== 'age') {
                  setSort(['age', 'up']);
                } else {
                  setSort(['age', sort[1] === 'down' ? 'up' : 'down']);
                }
              }}
            >
              <span>年龄排序</span>
              <span className={styles.sort}>
                <div
                  className={classNames(
                    styles.up,
                    sortString === 'age-up' && styles.active,
                  )}
                ></div>
                <div
                  className={classNames(
                    styles.down,
                    sortString === 'age-down' && styles.active,
                  )}
                ></div>
              </span>
            </Row>
          </Row>
        }
        marginTop
      >
        {new Array(10).fill(0).map((v, i) => (
          <Personnel key={i} onClick={() => setShow(true)}></Personnel>
        ))}
        <Row justify="end">
          <Pagination></Pagination>
        </Row>
        <Modal
          visible={show}
          title="员工档案"
          footer={null}
          onCancel={() => setShow(false)}
        ></Modal>
      </Card>
    </PageHeaderWrapper>
  );
};

const Personnel = ({ ...props }) => (
  <Card
    bodyStyle={{ padding: 0 }}
    bordered={false}
    hoverable
    {...props}
    style={{ marginBottom: 16 }}
  >
    <table className={styles.card}>
      <tbody>
        <tr>
          <td rowSpan="3" className={styles.profile}>
            <img src={profile}></img>
          </td>
          <td colSpan="2">姓名：杨凯</td>
          <td>岗位：安装起重工</td>
          <td colSpan="2">在职项目：宜兴碧桂园凤凰台花园工程</td>
        </tr>
        <tr>
          <td>性别：男</td>
          <td>民族：汉族</td>
          <td>文化程度：大学</td>
          <td>劳务队伍：张浩强队</td>
          <td>进场日期：2018-12-23</td>
        </tr>
        <tr>
          <td colSpan="2">籍贯：江苏省南通市启东市</td>
          <td>资格证书：无</td>
          <td>劳务班组：谢建建筑安装起重工组</td>
          <td>退场日期：2019-10-23</td>
        </tr>
      </tbody>
    </table>
  </Card>
);

const tagsFromServer = [];
new Array(200)
  .fill(1)
  .forEach((v, i) => tagsFromServer.push('名称为' + (i + 10)));
