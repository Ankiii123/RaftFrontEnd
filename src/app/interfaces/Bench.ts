// src/app/models/bench-candidate.model.ts

import { Skill } from "./Skill";

export interface BenchCandidate {
  name : string;
  id: number;
  status: string; // Change to CandidateStatus enum if using it on the frontend
  skill: Set<Skill>; // Array of skills
  benchPeriod: number;
  benchManagerID: number;
  skillAsString : string;
}
