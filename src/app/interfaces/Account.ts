import { HierarchyTag } from "./HierarchyTag";
import { User } from "./User";
export interface Account {
    name: string;
    parentId: number;
    hierarchyTag: HierarchyTag;
    userRoles: Set<User>
}