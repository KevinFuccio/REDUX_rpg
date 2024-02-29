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