export interface CounterSlice {
  value: number;
}
export type User = {
  name: string;
  age: number;
  money: number;
  gender: string;
  job: string;
};
export enum NavSection {
  JOB = "JOB",
  CAR = "CAR",
  HOUSE = "HOUSE",
}
export interface Job {
  id:number,
  job_title: string;
  salary: string;
  required_degree: string;
  hired: boolean;
}
export interface TimeManagement {
  intervalId:number | null
}
