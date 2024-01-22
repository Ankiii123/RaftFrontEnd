// src/app/models/bench-candidate.model.ts
import { User } from "./User";



export interface BenchCandidate {
  candidateName : string;
  id: number;
  status: string;
  skill: string; 
  benchPeriod: number;
  user: User;
 
}
