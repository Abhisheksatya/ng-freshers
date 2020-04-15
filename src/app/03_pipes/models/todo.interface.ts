
export enum Severity {
  CRITICAL = 1,
  MAJOR = 2,
  MINOR = 3
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  severity: Severity;
  targetDate: Date;
  amountPenalizedIfNotCompleted: number;
}
