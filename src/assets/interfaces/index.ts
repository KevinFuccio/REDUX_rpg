export interface CounterSlice {
    value:number
}
export type User = {
    name:string,
    age:number,
    money:number,
    gender:string,
    job:string
}
export enum NavSection{
    JOB = 'JOB',
    CAR = 'CAR',
    HOUSE = 'HOUSE'
}