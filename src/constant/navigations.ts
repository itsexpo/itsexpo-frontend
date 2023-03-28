import { AiOutlineRobot } from 'react-icons/ai';
import { BsJournalMedical, BsSpeaker } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import {
  FiDatabase,
  FiFileText,
  FiLink,
  FiLink2,
  FiList,
  FiSliders,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi';
import { GiPartyPopper } from 'react-icons/gi';
import { MdAlarmAdd, MdOutlineEventAvailable } from 'react-icons/md';
import { TbMicroscope } from 'react-icons/tb';

import { Navigation } from '@/types/navigate';

export const navigations: Navigation[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    exactMatch: true,
    icon: FiFileText,
    permissions: ['dashboard_admin'],
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
  {
    name: 'Manajemen Data',
    href: '#',
    icon: FiDatabase,
    permissions: [
      'admin_jurnalistik.index',
      'admin_jurnalistik.detail',
      'admin_robotik.index',
      'admin_robotik.detail',
    ],
    children: [
      {
        name: 'Jurnalistik',
        href: '/dashboard/admin/data-management/jurnalistik',
        exactMatch: true,
        icon: FiList,
        permissions: ['admin_jurnalistik.index'],
      },
      {
        name: 'KTI',
        href: '/dashboard/admin/data-management/kti',
        exactMatch: true,
        icon: FiList,
        permissions: ['admin_kti.index'],
      },
      {
        name: 'Robotik',
        href: '/dashboard/admin/data-management/robotik',
        exactMatch: true,
        icon: FiList,
        permissions: ['admin_robotik.index'],
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
  },
  {
    name: 'Pre Event',
    href: '#',
    exactMatch: true,
    icon: MdOutlineEventAvailable,
    children: [
      {
        name: 'Journalistic',
        href: '/dashboard/pre-event/jurnalistik',
        exactMatch: true,
        icon: BsJournalMedical,
        permissions: [
          'jurnalistik.index',
          'jurnalistik_join.store',
          'jurnalistik_team.delete',
          'jurnalistik_ketua.store',
          'jurnalistik_member.store',
        ],
      },
      {
        name: 'KTI',
        href: '/dashboard/pre-event/kti',
        exactMatch: true,
        icon: TbMicroscope,
        permissions: ['kti.index', 'kti.store'],
      },
      {
        name: 'Robot In Action',
        href: '/dashboard/pre-event/robotik',
        exactMatch: true,
        icon: AiOutlineRobot,
        permissions: ['robotik.index', 'robotik.store'],
      },
      {
        name: 'Talkshow',
        href: '/dashboard/pre-event/talkshow',
        exactMatch: true,
        icon: BsSpeaker,
      },
    ],
  },
  {
    name: 'Main Event',
    href: '#',
    exactMatch: true,
    icon: MdAlarmAdd,
  },
  {
    name: 'Gebyar ITS Expo',
    href: '#',
    exactMatch: true,
    icon: GiPartyPopper,
  },
  {
    name: 'Info Penting',
    href: '/dashboard/announcement',
    exactMatch: true,
    icon: FaBullhorn,
  },
  //! END USER
];
