import { appConfig } from './app-routes-config.const';

export const SITE_ADMIN_NAVIGATION = [
  {
    name: 'Analytic',
    routeLink: [appConfig.routes.analytic.index],
    iconURL: 'https://img.icons8.com/material-outlined/96/null/dashboard-layout.png',
  },
  {
    name: 'User Management',
    routeLink: [appConfig.routes.userManagement.index],
    iconURL: 'https://img.icons8.com/ios-glyphs/90/null/commercial-development-management.png',
  },
  {
    name: 'Brand Management',
    routeLink: [appConfig.routes.brandManagement.index],
    iconURL: '/assets/svg-icons/template-icon.svg',
  },
  {
    name: 'Billing Management',
    routeLink: [appConfig.routes.billingManagement.index],
    iconURL: '/assets/svg-icons/bill-icon.svg',
  },
  // {
  //   name: 'Customer Support',
  //   routeLink: [appConfig.routes.customerSupport.index],
  //   iconURL: '/assets/svg-icons/speech-bubble-icon.svg',
  // },
  {
    name: 'Content Management',
    routeLink: [appConfig.routes.contentManagement.index],
    iconURL: '/assets/svg-icons/description-icon.svg'
  },
  {
    name: 'Reported Content',
    routeLink: [appConfig.routes.reportedContent.index],
    iconURL: '/assets/svg-icons/report-icon.svg',
  },
];
