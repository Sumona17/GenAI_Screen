// assets
import { IconBrandChrome, IconHelp, IconReport } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp,IconReport };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'ourGenAIExperience',
      title: 'Our GenAI Experience',
      type: 'item',
      url: '/ourGenAIExperience',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'genAISolutionOverview',
      title: 'GenAI Solution Overview',
      type: 'item',
      url: '/genAISolutionOverview',
      icon: icons.IconReport,
      breadcrumbs: false
      // external: true,
      // target: true
    }
  ]
};

export default other;
