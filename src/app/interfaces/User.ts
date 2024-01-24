import { Account } from "./Account";
import { Role } from "./Role";
export interface User {
    employeeId: number,
    name: string,
    emailId: string,
    role: Role,
    accounts: Array<Account>
}