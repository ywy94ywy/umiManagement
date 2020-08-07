/**
 * @module 首页
 * @todo 图片更换
 */
import { Card } from 'antd';
import { PageHeaderWrapper } from 'lanlinker';
import ManualTitle from '@/components/ManualTitle';
import ListWrapper from './components/ListWrapper';
import styles from './style.less';
import pic1 from './imgs/1.png';
import pic2 from './imgs/2.png';
import pic3 from './imgs/3.png';
import pic4 from './imgs/4.png';
import pic5 from './imgs/5.png';
import pic6 from './imgs/6.png';
import guide1 from './imgs/guide1.png';
import guide2 from './imgs/guide2.png';
import guide3 from './imgs/guide3.png';

export default () => {
  return (
    <PageHeaderWrapper>
      <Card className={styles.homepage}>
        <ManualTitle title="我们的服务" subtitle="30秒了解子系统功能"></ManualTitle>
        <div className={styles.servers}>
          <ListWrapper data={data} />
        </div>
        <ManualTitle title="新手指南" subtitle="帮助您快速了解操作过程"></ManualTitle>
        <div className={styles.intros}>
          <img src={guide1} alt="指南01" />
          <img src={guide2} alt="指南02" />
          <img src={guide3} alt="指南03" />
        </div>
      </Card>
    </PageHeaderWrapper>
  );
};

const data = [
  {
    title: '通行证管理系统',
    pic: pic1,
    content:
      '跨子系统（域）帐号身份信息及权限管理系统。通行证后台可对用户帐号进行身份信息管理、密码管理、权限设置等操作。',
  },
  {
    title: '知识库管理系统',
    pic: pic2,
    content:
      '建筑项目技术文档管理及分享平台。公开和私密文档资料（文字资料及多媒体文件）可以在知识库系统中被查询、浏览、分享及下载、直属单位的上级公司可查询下属单位的项目文档并作数据分析。',
  },
  {
    title: '劳务实名制管理系统',
    pic: pic3,
    content:
      '建筑工人在建筑工地的劳务及作业管理系统。包含劳务工人、班组、劳务队的档案管理，工地现场出入场考勤、统计、工种、工资结算等管理，扬尘、噪音、塔吊、视频监控等监控与预警管理，直属单位的上级公司可监控下属单位的项目资料。',
  },
  {
    title: '工作协同管理系统',
    pic: pic4,
    content:
      '建筑工人在工地的作业安排及劳务计量系统。包含劳务作业计划、工作分配、作业资料查询、作业计量确认和验收。',
  },
  {
    title: '项目综合管理系统',
    pic: pic5,
    content:
      '让项目的管理者在有限的资源约束下，对项目和项目集涉及的全部工作进行有效地管理。它从项目的投资决策开始到项目结束的全过程进行计划、组织、指挥、协调、控制和评价，以实现项目的目标，避免现有综合项目管理方法重复输入数据带来的弊端，一体化的项目管理运作，全方位宏观监管项目各项指标，提高了项目完成的工作效率，增加了企业效益。',
  },
  {
    title: '监控管理系统',
    pic: pic6,
    content:
      '针对建筑项目施工现场，监控应用场景多、覆盖范围广，监控点多且比较分散的特点，技术视频管理监控系统为建筑项目建设一套综合视频监控系统，覆盖施工作业、材料堆场、机械设备、办公区、等重点区域，集成塔吊操作室、塔吊吊钩、升降机机舱、深基坑、高支模、大体积混凝土、巡检巡查、公共安防、材料堆场等一系列视频监控体系，实现对建筑项目的全方位可视化管理和防控。',
  },
];
