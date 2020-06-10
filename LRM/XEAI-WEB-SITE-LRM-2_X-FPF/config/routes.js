export default [
  {
    path: '/',
    component: '../layouts',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './home' },
      // 业务管理
      { path: '/projectInfo', component: './projectInfo' }, // 工程信息
      { path: '/registerManagement', component: './registerManagement' },
      { path: '/contractManagement', component: './contractManagement' }, // 合同管理
      { path: '/cardManagement', component: './cardManagement' },
      { path: '/dormManagement', component: './dormManagement' },
      { path: '/trainingManagement', component: './trainingManagement' },
      { path: '/checkinManagement', component: './checkinManagement' },
      { path: '/salaryManagement', component: './salaryManagement' }, // 工资管理
      { path: '/evaluationManagement', component: './evaluationManagement' }, // 评价管理
      { path: '/medicalManagement', component: './medicalManagement' }, // 体检管理
      {
        path: '/certificateManagement', // 证书管理
        component: './certificateManagement',
      },
      // 业务查询
      { path: '/commutingRecords', component: './commutingRecords' }, // 通勤流水查询
      // 基础统计
      { path: '/projectStaff', component: './projectStaff' }, // 工程人员统计
      { path: '/cardStatistics', component: './cardStatistics' },
      { path: '/projectAttendance', component: './projectAttendance' }, // 工程考勤统计
      { path: '/postStatistics', component: './postStatistics' },
      { path: '/epidemicSearch', component: './epidemicSearch' },
      // 高级统计
      { path: '/infoQuery', component: './infoQuery' },
      { path: '/attributeStatistics', component: './attributeStatistics' },
      { path: '/registerStatistics', component: './registerStatistics' },
      { path: '/attendanceInfo', component: './attendanceInfo' }, // 考勤信息统计
      { path: '/enterExitStatistics', component: './enterExitStatistics' },
      { path: '/riskStatistics', component: './riskStatistics' },
      { path: '/violationStatistics', component: './violationStatistics' },
      // 监控管理
      { path: '/monitoring', component: './monitoring' },
      // 报表中心
      { path: '/reportCenter', component: './reportCenter' },
      // 业务设置
      { path: '/businessRules', component: './businessRules' },
    ],
  },
];
