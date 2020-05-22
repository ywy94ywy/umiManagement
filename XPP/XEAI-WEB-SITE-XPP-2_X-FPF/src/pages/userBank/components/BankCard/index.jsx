import React, { useState } from 'react';
import { Modal, SafeInput } from 'lanlinker';
import { Form, Input, message, Select, Checkbox, Row, Col } from 'antd';
import nongye from './imgs/nongye.png';
import nongye_logo from './imgs/nongye_logo.png';
import gongshang from './imgs/gongshang.png';
import gongshang_logo from './imgs/gongshang_logo.png';
import zhongguo from './imgs/zhongguo.png';
import zhongguo_logo from './imgs/zhongguo_logo.png';
import jianshe from './imgs/jianshe.png';
import jianshe_logo from './imgs/jianshe_logo.png';
import zhaoshang from './imgs/zhaoshang.png';
import zhaoshang_logo from './imgs/zhaoshang_logo.png';
import youzheng from './imgs/youzheng.png';
import youzheng_logo from './imgs/youzheng_logo.png';
import jiaotong from './imgs/jiaotong.png';
import jiaotong_logo from './imgs/jiaotong_logo.png';
import other from './imgs/other.png';
import other_logo from './imgs/other_logo.png';
import styles from './style.less';

export default ({ title, type, number, first = false }) => {
  const [del, showDel] = useState(false);
  const [update, showUpdate] = useState(false);
  const item = bankMap[title] || bankMap['其他'];

  return (
    <div className={styles.bankCard}>
      <header style={{ backgroundImage: `url(${item.background})` }}>
        <div className={styles.title}>
          <img className={styles.logo} src={item.logo} alt="logo" />
          <div>
            <div className={styles.name} title={title}>
              {title}
            </div>
            <div className={styles.type}>{type}</div>
          </div>
          {first && <span className={styles.default}>默认</span>}
        </div>
        <div className={styles.number}>{encrypt(number)}</div>
      </header>
      <footer>
        <span
          onClick={() => {
            showDel(true);
          }}
        >
          删除
        </span>
        <span
          onClick={() => {
            showUpdate(true);
          }}
        >
          修改
        </span>
        <Modal
          title="验证安全密码"
          width={730}
          bodyStyle={modalStyle}
          visible={del}
          onOk={() => {
            // 调用删除接口

            // showInfo(false);
            showDel(false);
            message.success('已成功删除银行卡!');
          }}
          onCancel={() => {
            showDel(false);
          }}
        >
          <Form style={formStyle} labelCol={{ span: 5 }}>
            <Form.Item label="安全码">
              <SafeInput></SafeInput>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="修改银行卡帐号"
          width={730}
          bodyStyle={modalStyle}
          visible={update}
          onOk={() => {
            // 调用修改接口;
            // showInfo(false);
            showUpdate(false);
            message.success('已成功修改银行卡!');
          }}
          onCancel={() => {
            showUpdate(false);
          }}
        >
          <Form style={formStyle} labelCol={{ span: 5 }}>
            <Form.Item label="银行卡号">
              <Input></Input>
            </Form.Item>
            <Form.Item label="银行名称">
              <Select></Select>
            </Form.Item>
            <Form.Item label="支行名称">
              <Row gutter={12}>
                <Col span={8}>
                  <Select></Select>
                </Col>
                <Col span={8}>
                  <Select></Select>
                </Col>
                <Col span={8}>
                  <Select></Select>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5 }}>
              <Checkbox>设为默认银行卡账号</Checkbox>
            </Form.Item>
          </Form>
        </Modal>
      </footer>
    </div>
  );
};

// todo
const encrypt = number => {
  return number;
};

const bankMap = {
  中国农业银行: {
    logo: nongye_logo,
    background: nongye,
  },
  中国工商银行: {
    logo: gongshang_logo,
    background: gongshang,
  },
  中国银行: {
    logo: zhongguo_logo,
    background: zhongguo,
  },
  中国建设银行: {
    logo: jianshe_logo,
    background: jianshe,
  },
  招商银行: {
    logo: zhaoshang_logo,
    background: zhaoshang,
  },
  中国邮政储蓄银行: {
    logo: youzheng_logo,
    background: youzheng,
  },
  交通银行: {
    logo: jiaotong_logo,
    background: jiaotong,
  },
  其他: {
    logo: other_logo,
    background: other,
  },
};

const modalStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
};
const formStyle = { width: '70%' };
