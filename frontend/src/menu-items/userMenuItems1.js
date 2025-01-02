// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const userMenuItems1 = {
  id: 'userMenuItems',
  title: 'User Menu Items',
  type: 'group',
  children: [
   
    {
      id: 'firstScreen', // Add FirstScreen menu item
      title: 'Screen1',
      type: 'item',
      url: '/free/first-Screen', // URL for FirstScreen
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'secondScreen', // Add FirstScreen menu item
      title: 'Screen2',
      type: 'item',
      url: 'free/second-Screen', // URL for FirstScreen
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default userMenuItems1;
