import { Permission } from "@/types/entities/permission";

export type Role = {
  id: number;
  name: string;
  permissions: Permission[];
  // ? Used in Kelola Role
  level: Level;
};

export type RoleDetail = {
  id: number;
  name: string;
  level: string;
  permissions: {
    name: string;
    level: Level["id"];
    features: { name: string; routes: number[] }[];
  }[];
};

export type Level =
  | {
      id: "ADMIN";
      name: "Admin Pusat";
    }
  | {
      id: "DIVISI";
      name: "DIVISI";
    }
  | {
      id: "USER";
      name: "User";
    };
