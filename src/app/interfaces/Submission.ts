// submission.model.ts

import { SubmissionStatus } from "./SubmissionStatus";

export interface Submission {
  submissionId?: number;
  submissionDate?: string;
  feedback?: string;
  submissionStatus?: SubmissionStatus;
  requirement?: Requirement;
  benchCandidate?: BenchCandidate;
}

export interface Requirement {
  requirementId?: number;
  startDate?: string;
  endDate?: string;
  requiredNo?: number;
  job_description?: string;
  hiring_manager?: string;
  account?: { id: number };
}

export interface BenchCandidate {
  // Define properties for BenchCandidate if needed
}
