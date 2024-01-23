// requirement.model.ts

import { Account } from "./Account";

export interface Requirement {
    requirementId: number ;
    startDate: string;
    endDate: string;
    requiredNo: number;
    jobDescription: string;
    hiringManager: string;
    account: string;

  }
  
