// assets
import { 
  IconDashboard, 
  IconBrandOpenSource, 
  IconFileAnalytics, 
  IconFileDelta, 
  IconReportAnalytics,
  IconReportSearch,
  IconCpuOff
} from '@tabler/icons';

// constant
const icons = {
  IconDashboard,
  IconBrandOpenSource,
  IconFileAnalytics,
  IconFileDelta,
  IconReportAnalytics,
  IconReportSearch,
  IconCpuOff
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const solutionMenuItems = {
  id: 'userMenuItems',
  title: 'Solutions',
  type: 'group',
  children: [
    {
      id: 'solution1',
      title: 'Solution 1',
      type: 'collapse',
      icon: icons.IconReportSearch,
     
      children: [
        {
          id: 'generateBDDFile',
          title: 'Generate BDD(File)',
          type: 'item',
          url: '/generateBDDFile',
          icon: icons.IconFileAnalytics,
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'solution2',
      title: 'Solution 2',
      type: 'collapse',
      icon: icons.IconReportSearch,
     
      children: [
        {
          id: 'generateBDDJira',
          title: 'Generate BDD(Jira)',
          type: 'item',
          url: '/generateBDDJira',
          icon: icons.IconFileDelta,
          breadcrumbs: false
        },
        {
          id: 'generateTestData',
          title: 'Generate Test Data',
          type: 'item',
          url: '/generateTestData',
          icon: icons.IconBrandOpenSource,
          breadcrumbs: false
        },
        {
          id: 'performanceResultsAnalysis',
          title: 'Performance Results Analysis',
          type: 'item',
          url: '/performanceResultsAnalysis',
          icon: icons.IconReportAnalytics,
          breadcrumbs: false
        },
        {
          id: 'defectPattern',
          title: 'Defect Pattern',
          type: 'item',
          url: '/defectPattern',
          icon: icons.IconCpuOff,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default solutionMenuItems;