import { Account } from "./Account";
import { Role } from "./Role";
export interface User {
    id: number,
    employeeId: number,
    email: string,
    role: Role,
    accounts: Set<Account>
}