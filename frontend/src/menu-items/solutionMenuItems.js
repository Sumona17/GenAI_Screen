// assets
import { IconDashboard,  IconBrandOpenSource, IconFileAnalytics, IconFileDelta, IconReportAnalytics, } from '@tabler/icons';

// constant
const icons = { IconDashboard,  IconBrandOpenSource, IconFileAnalytics, IconFileDelta, IconReportAnalytics};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const solutionMenuItems = {
  id: 'userMenuItems',
  title: 'Solutions',
  type: 'group',
  children: [
   
    {
      id: 'generateBDDFile', // Add FirstScreen menu item
      title: 'Generate BDD(File)',
      type: 'item',
      url: '/generateBDDFile', // URL for FirstScreen
      icon: icons.IconFileAnalytics,
      breadcrumbs: false
    },
    {
      id: 'generateBDDJira', // Add FirstScreen menu item
      title: 'Generate BDD(Jira)',
      type: 'item',
      url: '/generateBDDJira', // URL for FirstScreen
      icon: icons.IconFileDelta,
      breadcrumbs: false
    },
    {
      id: 'generateTestData', // Add FirstScreen menu item
      title: 'Generate Test Data',
      type: 'item',
      url: '/generateTestData', // URL for FirstScreen
      icon: icons. IconBrandOpenSource,
      breadcrumbs: false
    },
    {
      id: 'performanceResultsAnalysis', // Add FirstScreen menu item
      title: 'Performance Results Analysis',
      type: 'item',
      url: '/performanceResultsAnalysis', // URL for FirstScreen
      icon: icons.IconReportAnalytics,
      breadcrumbs: false
    },
    {
      id: 'defectPattern', // Add FirstScreen menu item
      title: 'Defect Pattern',
      type: 'item',
      url: '/defectPattern', // URL for FirstScreen
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
  ]
};

export default solutionMenuItems;
