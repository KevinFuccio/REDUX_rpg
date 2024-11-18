export interface CounterSlice {
  value: number;
}
export type User = {
  name: string;
  age: number;
  money: number;
  gender: string;
  job: string;
  jobYearlySalary:string;
  hireDate:string | null
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
  intervalId:number | null,
  day:number,
  month:number,
  year:number
}
export interface Car{
  id: number,
  vehicle_img: string,
  vehicle_name: string,
  price: string,
  isPurchase: boolean
}