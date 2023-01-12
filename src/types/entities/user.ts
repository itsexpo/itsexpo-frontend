import { PermissionList } from "@/types/entities/permission-list";
import { Level } from "@/types/entities/role";

export type User = {
  username: string;
  name: string;
  token: string;
  permissions: PermissionList;
};

export type LoginRespond = {
  name: string;
  username: string;
  permissions: {
    name: string;
    level: Level["id"];
    features: {
      name: string;
      routes: PermissionList;
    }[];
  }[];
};
