/**
 * @page 操作手册
 */
import { PageHeaderWrapper, IconFont } from 'lanlinker';
import { Card, Row, Col, Result } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import classNames from 'classnames';
import header from './img/header.png';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import styles from './style.less';

export default () => {
  return (
    <PageHeaderWrapper className={styles.manual}>
      <Card className={styles.card} bodyStyle={{ padding: '0 0 50px' }}>
        <div className={styles.body}>
          <img
            className={styles.headerImg}
            src={header}
            alt="劳务实名制管理平台"
          />
          <h2>员工进场流程</h2>
          <div className={styles.decoration}></div>
          <DownCircleFilled style={{ fontSize: 24 }} />
          <Row>
            <Col span={12} className={styles.left}>
              <h3 className={classNames(styles.leftTitle, styles.dec1)}>
                劳务工人登记信息
              </h3>
            </Col>
            <Col span={12}>
              <img src={img1} alt="" className={styles.rightImg} />
            </Col>
            <Col span={12} className={styles.left}>
              <img src={img2} alt="" className={styles.leftImg} />
            </Col>
            <Col span={12}>
              <h3 className={classNames(styles.rightTitle, styles.dec2)}>
                录入合同信息
              </h3>
            </Col>
            <Col span={12} className={styles.left}>
              <h3 className={classNames(styles.leftTitle, styles.dec3)}>
                发放进出卡片
              </h3>
            </Col>
            <Col span={12}>
              <img src={img3} alt="" className={styles.rightImg} />
            </Col>
            <Col span={12} className={styles.left}>
              <img src={img4} alt="" className={styles.leftImg} />
            </Col>
            <Col span={12}>
              <h3 className={classNames(styles.rightTitle, styles.dec4)}>
                分配床位宿舍
              </h3>
            </Col>
            <Col span={12} className={styles.left}>
              <h3 className={classNames(styles.leftTitle, styles.dec5)}>
                劳务安全培训教育
              </h3>
            </Col>
            <Col span={12}>
              <img src={img5} alt="" className={styles.rightImg} />
            </Col>
            <Col span={12} className={styles.left} style={{ height: 50 }}></Col>
            <Col span={12}></Col>
          </Row>
          <IconFont type="&#xe85d;" style={{ transform: 'rotate(90deg)' }} />
          <Result
            status="success"
            title="入场成功"
            style={{ paddingTop: 10 }}
          />
        </div>
      </Card>
    </PageHeaderWrapper>
  );
};
