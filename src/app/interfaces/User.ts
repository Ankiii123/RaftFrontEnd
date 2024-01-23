import { Account } from "./Account";
import { Role } from "./Role";
export interface User {
    employeeId: number,
    emailId: string,
    role: Role,
    accounts: Set<Account>
}