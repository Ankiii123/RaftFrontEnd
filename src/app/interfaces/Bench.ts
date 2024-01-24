// src/app/models/bench-candidate.model.ts
import { User } from "./User";

export interface BenchCandidate {
  id: number;
  candidateStatus: string;
  candidateName : string;
  benchCandidateSkills: string; 
  benchPeriod: number;
  benchManager: User;
 
}
