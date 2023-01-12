enum PermissionEnum {
  "dashboard.index",
  "dashboard.show",
}

export type PermissionList = Array<keyof typeof PermissionEnum>;
