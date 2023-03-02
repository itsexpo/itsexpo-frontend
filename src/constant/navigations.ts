import { FaBullhorn } from 'react-icons/fa';
import {
  FiFileText,
  FiLink,
  FiLink2,
  FiList,
  FiSliders,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    exactMatch: true,
    icon: FiFileText,
    permissions: ['dashboard_admin'],
  },
  {
    name: 'Dashboard',
    href: '/dashboard/my',
    exactMatch: true,
    icon: FiFileText,
    permissions: ['dashboard_user'],
  },
  //! ADMIN
  {
    name: 'Manajemen User',
    href: '#',
    icon: FiUsers,
    children: [
      {
        name: 'User',
        href: '/dashboard/admin/user',
        icon: FiUsers,
        permissions: ['users.index'],
      },
      {
        name: 'Permissions',
        href: '/dashboard/admin/permission',
        icon: FiSliders,
        permissions: [
          'permissions.index',
          'permissions.store',
          'permissions.update',
          'permissions.delete',
        ],
      },
      {
        name: 'Roles',
        href: '/dashboard/admin/role',
        icon: FiUserPlus,
        permissions: [
          'roles.index',
          'roles.store',
          'roles.update',
          'roles.delete',
        ],
      },
    ],
  },
  {
    name: 'Manajemen URL',
    href: '#',
    icon: FiLink,
    permissions: [
      'all_url_shortener.index',
      'url_shortener.delete',
      'url_shortener.delete',
    ],
    children: [
      {
        name: 'List URL',
        href: '/dashboard/admin/url-shortener',
        exactMatch: true,
        icon: FiList,
        permissions: [
          'all_url_shortener.index',
          'url_shortener.delete',
          'url_shortener.delete',
        ],
      },
      {
        name: 'Buat URL Baru',
        href: '/dashboard/admin/url-shortener/create',
        icon: FiLink2,
        permissions: ['url_shortener.store'],
      },
    ],
  },
  {
    name: 'Manajemen Pengumuman',
    href: '#',
    icon: FaBullhorn,
    permissions: ['announcements.index', 'announcements.store'],
    children: [
      {
        name: 'List Pengumuman',
        href: '/dashboard/admin/announcement',
        exactMatch: true,
        icon: FiList,
        permissions: ['announcements.index'],
      },
    ],
  },
  //! END ADMIN

  //! USER
  {
    name: 'Dashboard',
    href: '/dashboard/my',
    exactMatch: true,
    icon: FiFileText,
    permissions: ['dashboard_admin'],
  },
  {
    name: 'Pre Event',
    href: '#',
    exactMatch: true,
    icon: FiFileText,
    // permissions: ['pre_event.index'],
    children: [
      {
        name: 'Jurnalistik',
        href: '/dashboard/pre-event/jurnalistik',
        exactMatch: true,
        icon: FiFileText,
        // permissions: ['pre_event.index'],
      },
    ],
  },
  {
    name: 'Info Penting',
    href: '/dashboard/announcement',
    exactMatch: true,
    icon: FaBullhorn,
  },
  //! END USER
];
