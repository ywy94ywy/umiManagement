import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 8003,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: './home' },
        // 业务管理
        { path: '/projectInfo', component: './projectInfo' },
        { path: '/registerManagement', component: './registerManagement' },
        { path: '/contractManagement', component: './contractManagement' },
        { path: '/cardManagement', component: './cardManagement' },
        { path: '/dormManagement', component: './dormManagement' },
        { path: '/trainingManagement', component: './trainingManagement' },
        { path: '/checkinManagement', component: './checkinManagement' },
        { path: '/salaryManagement', component: './salaryManagement' },
        { path: '/evaluationManagement', component: './evaluationManagement' },
        { path: '/healthManagement', component: './healthManagement' },
        {
          path: '/certificateManagement',
          component: './certificateManagement',
        },
        // 业务查询
        { path: '/cardRecords', component: './cardRecords' },
        // 基础统计
        { path: '/staffStatistics', component: './staffStatistics' },
        { path: '/cardStatistics', component: './cardStatistics' },
        { path: '/checkinStatistics', component: './checkinStatistics' },
        { path: '/postStatistics', component: './postStatistics' },
        { path: '/epidemicSearch', component: './epidemicSearch' },
        // 高级统计
        { path: '/infoQuery', component: './infoQuery' },
        { path: '/attributeStatistics', component: './attributeStatistics' },
        { path: '/registerStatistics', component: './registerStatistics' },
        { path: '/attendanceStatistics', component: './attendanceStatistics' },
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
  ],
});
