export default {
  devServer: {
    port: 8002,
  },
  routes: [
    {
      path: '/',
      component: '../layouts',
      routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: './home' },
        { path: '/manual', component: './manual' },
        { path: '/authUser', component: './authUser' },
        { path: '/authModule', component: './authModule' },
        { path: '/authAllocation', component: './authAllocation' },
        { path: '/systemLicense', component: './systemLicense' },
        { path: '/platformPlatform', component: './platformPlatform' },
        { path: '/platformTenant', component: './platformTenant' },
        { path: '/platformUser', component: './platformUser' },
        { path: '/tanantTanant', component: './tanantTanant' },
        { path: '/tanantUser', component: './tanantUser' },
      ],
    },
  ],
};
