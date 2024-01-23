// requirement.model.ts

import { Account } from "./Account";

export interface Requirement {
    requirementId: number ;
    startDate: string;
    endDate: string;
    requiredNo: number;
    job_description: string;
    hiring_manager: string;
    account: Account;

  }
  
