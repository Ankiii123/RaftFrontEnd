import { HierarchyTag } from "./HierarchyTag";
import { User } from "./User";
export interface Account {
    id:number;
    name: string;
    parentId: number;
    hierarchyTag: HierarchyTag;
    userRoles: Set<User>
}