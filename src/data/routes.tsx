import { Icon } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { PiUsersThreeBold } from 'react-icons/pi';
import { BiHomeAlt } from 'react-icons/bi';
import { LuCalendarClock, LuPackage2 } from 'react-icons/lu';

// Admin Imports
// import MainDashboard from './pages/admin/default';
// import NFTMarketplace from './pages/admin/nft-marketplace';
// import Profile from './pages/admin/profile';
// import DataTables from './pages/admin/data-tables';
// import RTL from './pages/rtl/rtl-default';

// Auth Imports
// import SignInCentered from './pages/auth/sign-in';
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={BiHomeAlt} width="22px" height="22px" color="inherit" />,
  },
  {
    name: 'Subscriptions',
    layout: '/admin',
    path: '/subscriptions',
    icon: (
      <Icon
        as={LuCalendarClock}
        width="22px"
        height="22px"
        color="inherit"
      />
    ),
    // secondary: true,
  },
  {
    name: 'Leads',
    layout: '/admin',
    path: '/leads',
    icon: (
      <Icon
        as={PiUsersThreeBold}
        width="22px"
        height="22px"
        color="inherit"
      />
    ),
    // secondary: true,
  },
  {
    name: 'Packages',
    layout: '/admin',
    path: '/packages',
    icon: (
      <Icon
        as={LuPackage2}
        width="22px"
        height="22px"
        color="inherit"
      />
    ),
    // secondary: true,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: '/data-tables',
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  // },
];

export default routes;
