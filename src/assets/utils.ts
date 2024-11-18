import { useCallback, useEffect, useRef } from "react";
import { AppDispatch } from "./state/store";
import { clearingInterval, setDay, settingInterval } from "./state/timeManagement";
import { jobPay } from "./state/user";
export const UNEMPLOYED = 'Unemployed';
export const monthsWith31Days = [1,3,5,7,8,10,12]
export const monthsWith30Days = [4,6,9,11]

export const startTime = (dispatch:AppDispatch,intervalId:number | null) => {
    handleClearInterval(intervalId,dispatch)
    const newIntervalId = setInterval(() => {
      dispatch(setDay());
    }, 200);
    dispatch(settingInterval(newIntervalId));
  };
export const handleClearInterval = (intervalId:number|null,dispatch:AppDispatch) => {
    if (intervalId != null) {
      clearInterval(intervalId);
      dispatch(clearingInterval())
    }
  };


  //TODO: refactor cardRemover so it will accept multiple setters 
export const useCardRemoverWhenUnfocusedBoolean = (setter: (value: boolean) => void) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleFocusChange = useCallback((event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            setter(false);
        } else {
            setter(true);   
        }
    }, [setter]);

    useEffect(() => {
        document.addEventListener('mousedown', handleFocusChange);
        return () => {
            document.removeEventListener('mousedown', handleFocusChange);
        };
    }, [handleFocusChange]);

    return { cardRef };
};

  export const useCardRemoverWhenUnfocusedString = (setter: (value: string) => void, string: string) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const handleFocusChange = useCallback((event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
            setter('');
        } else {
            setter(string);
        }
    }, [setter, string]);

    useEffect(() => {
        document.addEventListener('mousedown', handleFocusChange);
        return () => {
            document.removeEventListener('mousedown', handleFocusChange);
        };
    }, [handleFocusChange]);

    return { cardRef };
};
export const payChecker = (day:number,month:number,dispatch:AppDispatch,salary:string, hireDate:string |null)=>{
    if(hireDate === null){
        return
    }
    if(day === Number(hireDate)){
        dispatch(jobPay(salary))
    }
    if(monthsWith30Days.includes(month)&&(day === 30 && Number(hireDate) === 31)){
            dispatch(jobPay(salary))
    }
    if(month === 2 &&(day === 28 && Number(hireDate) === 31)){
        dispatch(jobPay(salary))
    }
}
export const priceStringConverter = (price:string)=>{
    return Number(price.replace(/[$,]/g, ''));
}
  