import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HubIcon from '@mui/icons-material/Hub';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/dashboard',
  },
  {
    title: 'Collaboration Network',
    icon: <HubIcon />,
    link: '/collboration-network',
  },
  {
    title: 'Active Collaborations',
    icon: <PeopleIcon />,
    link: '/active-collaborations',
  },
  {
    title: 'Search Projects',
    icon: <SearchIcon />,
    link: '/search-projects',
  },
  {
    title: 'Collaborations Archive',
    icon: <InventoryIcon />,
    link: '/collborations-archive',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
  },
];
