import { useEffect, useRef } from "react";
import { AppDispatch } from "./state/store";
import { clearingInterval, settingInterval } from "./state/timeManagement";
import { jobPay } from "./state/user";

export const handleMonthlyPay = (salary: string,dispatch:AppDispatch,intervalId:number | null) => {
    if (intervalId != null) {
      clearInterval(intervalId);
        dispatch(clearingInterval())
    }
    const newIntervalId = setInterval(() => {
      dispatch(jobPay(salary));
    }, 1000);
    dispatch(settingInterval(newIntervalId));
  };
export const handleClearInterval = (intervalId:number|null,dispatch:AppDispatch) => {
    if (intervalId != null) {
      clearInterval(intervalId);
      dispatch(clearingInterval())
    }
  };


  //TODO: refactor cardRemover so it will accept multiple setters 
  export const useCardRemoverWhenUnfocusedBoolean = (setter:(value:boolean)=>void) => {

    const cardRef = useRef<HTMLDivElement>(null);

    const handleFocusChange = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setter(false);
      } else {
        setter(true);
      }
    };
    useEffect(() => {
      document.addEventListener('mousedown', handleFocusChange);
      return () => {
        document.removeEventListener('mousedown', handleFocusChange);
      };
    }, [setter]);
  
    return { cardRef };
  }
  export const useCardRemoverWhenUnfocusedString = (setter:(value:string)=>void,string:string) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleFocusChange = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setter('');
      } else {
        setter(string);
      }
    };
    useEffect(() => {
      document.addEventListener('mousedown', handleFocusChange);
      return () => {
        document.removeEventListener('mousedown', handleFocusChange);
      };
    }, [setter]);
  
    return { cardRef };
  }
  