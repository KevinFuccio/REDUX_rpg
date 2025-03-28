import { useCallback, useEffect, useRef } from "react";
import { AppDispatch } from "./state/store";
import { clearingInterval, setDay, settingInterval } from "./state/timeManagement";
import { jobPay } from "./state/user";
import { Car, House, Job } from "./interfaces";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isHouse(obj: any): obj is House {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.id === 'number' &&
      typeof obj.name === 'string' &&
      typeof obj.price_buy === 'string' &&
      typeof obj.price_rent === 'string' &&
      typeof obj.location === 'string' &&
      typeof obj.bedrooms === 'number' &&
      typeof obj.bathrooms === 'number' &&
      typeof obj.is_bought === 'boolean' &&
      typeof obj.is_rented === 'boolean'
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function isCar(obj: any): obj is Car {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.id === 'number' &&
      typeof obj.vehicle_img === 'string' &&
      typeof obj.vehicle_name === 'string' &&
      typeof obj.price === 'string' &&
      typeof obj.isPurchase === 'boolean'
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function isJob(obj: any): obj is Job {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      typeof obj.id === 'number' &&
      typeof obj.job_title === 'string' &&
      typeof obj.salary === 'string' &&
      typeof obj.required_degree === 'string' &&
      typeof obj.hired === 'boolean'
    );
  }