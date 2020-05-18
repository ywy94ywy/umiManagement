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

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/',
    component: require('../../layouts').default,
    routes: [
      {
        path: '/home',
        component: require('../home').default,
        exact: true,
      },
      {
        path: '/manual',
        component: require('../manual').default,
        exact: true,
      },
      {
        path: '/user',
        component: require('../user').default,
        exact: true,
      },
      {
        path: '/module',
        component: require('../module').default,
        exact: true,
      },
      {
        path: '/allocation',
        component: require('../allocation').default,
        exact: true,
      },
      {
        path: '/systemLicense',
        component: require('../systemLicense').default,
        exact: true,
      },
      {
        path: '/platformLicense',
        component: require('../platformLicense').default,
        exact: true,
      },
      {
        path: '/tenantLicense',
        component: require('../tenantLicense').default,
        exact: true,
      },
      {
        path: '/userLicense',
        component: require('../userLicense').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('H:/WorkSpace/LanLinker/WEB_XPP_BPF/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('H:/WorkSpace/LanLinker/WEB_XPP_BPF/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
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
