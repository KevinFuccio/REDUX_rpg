import { createContext } from "react";
import { Job } from "../interfaces";
export type jobListContext ={
    jobList:Job[],
    day:number
}

export const jobListContext = createContext<jobListContext>({
    jobList:[],
    day:0
});