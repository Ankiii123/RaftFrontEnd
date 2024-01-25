// src/app/models/bench-candidate.model.ts
import { User } from "./User";

export interface BenchCandidate {
  id: number;
  candidateStatus: string;
  candidateName : string;
  benchCandidateSkills: string; 
  startDate:string,
  endDate:string,
  benchManager: User;
 
}
