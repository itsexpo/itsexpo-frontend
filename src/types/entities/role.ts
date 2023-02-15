import { Permission } from '@/types/entities/permission';

export type Role = {
  id: number;
  name: string;
  permissions: Permission[];
  level: Level;
};

export type RoleDetail = {
  permission: {
    id: string;
    routes: string;
  }[];
};

export type Level =
  | {
      id: '1';
      name: 'USER';
    }
  | {
      id: '2';
      name: 'ADMIN';
    }
  | {
      id: '3';
      name: 'KADIV';
    };

export type RoleColumn = {
  id: string;
  role: string;
};
export interface RoleResponse {
  id: string;
  role: string;
  name: string;
}

export type AssignRolePermission = {
  id: string[];
  role_permission: DetailRolePermission[];
};

export type DetailRolePermission = {
  role_id: string;
  permission_id: string;
};
