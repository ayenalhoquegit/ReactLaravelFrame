import React, {lazy} from 'react';

const DashboardMiddle = lazy(() => import('./components/DashboardMiddle'));
const Menu = lazy(() => import('./components/Menu'));

const routes = [
  	{path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardMiddle, key :1},
  	{path: '/Menu', exact: true, name: 'Menu', component: Menu, key :2},
  	{path: '/',  name: 'Dashboard', component: DashboardMiddle, key :3}
];

export default routes;