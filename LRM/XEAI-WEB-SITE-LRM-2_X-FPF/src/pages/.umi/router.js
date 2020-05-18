import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts" */ '../../layouts'),
        })
      : require('../../layouts').default,
    routes: [
      {
        path: '/home',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__home" */ '../home'),
            })
          : require('../home').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/registerManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__registerManagement" */ '../registerManagement'),
            })
          : require('../registerManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/contractManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__contractManagement" */ '../contractManagement'),
            })
          : require('../contractManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/cardManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__cardManagement" */ '../cardManagement'),
            })
          : require('../cardManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/dormManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__dormManagement" */ '../dormManagement'),
            })
          : require('../dormManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/trainingManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__trainingManagement" */ '../trainingManagement'),
            })
          : require('../trainingManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/checkinManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__checkinManagement" */ '../checkinManagement'),
            })
          : require('../checkinManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/salaryManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__salaryManagement" */ '../salaryManagement'),
            })
          : require('../salaryManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/evaluationManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__evaluationManagement" */ '../evaluationManagement'),
            })
          : require('../evaluationManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/healthManagement',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__healthManagement" */ '../healthManagement'),
            })
          : require('../healthManagement').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/staffStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__staffStatistics" */ '../staffStatistics'),
            })
          : require('../staffStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/cardStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__cardStatistics" */ '../cardStatistics'),
            })
          : require('../cardStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/checkinStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__checkinStatistics" */ '../checkinStatistics'),
            })
          : require('../checkinStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/postStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__postStatistics" */ '../postStatistics'),
            })
          : require('../postStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/attendanceStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__attendanceStatistics" */ '../attendanceStatistics'),
            })
          : require('../attendanceStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/enterExitStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__enterExitStatistics" */ '../enterExitStatistics'),
            })
          : require('../enterExitStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/riskStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__riskStatistics" */ '../riskStatistics'),
            })
          : require('../riskStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        path: '/violationStatistics',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__violationStatistics" */ '../violationStatistics'),
            })
          : require('../violationStatistics').default,
        exact: true,
        _title: 'final',
        _title_default: 'final',
      },
      {
        component: () =>
          React.createElement(
            require('D:/DesYang/Workstation/projects/LanLinker/WEB_LRM_FPF/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'final',
        _title_default: 'final',
      },
    ],
    _title: 'final',
    _title_default: 'final',
  },
  {
    component: () =>
      React.createElement(
        require('D:/DesYang/Workstation/projects/LanLinker/WEB_LRM_FPF/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'final',
    _title_default: 'final',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
