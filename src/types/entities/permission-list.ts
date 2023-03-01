enum PermissionEnum {
  'dashboard_admin',
  'dashboard_user',
  'login_user.store',
  'users.index',
  'users.store',
  'users.update',
  'users.delete',
  'admin.index',
  'admin.store',
  'admin.update',
  'admin.delete',
  'permissions.index',
  'permissions.delete',
  'permissions.store',
  'permissions.update',
  'roles.index',
  'roles.delete',
  'roles.store',
  'roles.update',
  'roles_unassign.store',
  'roles_assign.store',
  'roles.detail',
  'all_url_shortener.index',
  'url_shortener.delete',
  'url_shortener.store',
  'url_shortener.update',
  'announcements.index',
  'announcements.store',
  'pre_event.index',
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
