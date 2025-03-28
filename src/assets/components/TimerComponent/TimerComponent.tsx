import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTime, handleClearInterval, UNEMPLOYED, payChecker } from "../../utils";
import { RootState } from "../../state/store";

const TimeComponent = ()=>{
    const intervalId = useSelector((state: RootState) => state.timeManage.intervalId);
    const user =  useSelector((state: RootState) => state.user)
    const { day, month,year } = useSelector((state: RootState) => state.timeManage)
    const dispatch = useDispatch();
    useEffect(() => {
        startTime(dispatch, intervalId);
        return ()=> handleClearInterval(intervalId,dispatch);
      },[])
      
      useEffect(()=>{
        if(user.job !== UNEMPLOYED){
          payChecker(day,month,dispatch,user.jobYearlySalary,user.hireDate)
        }
      },[day])
    return <p>{`${day}/${month}/${year}`}</p>
}
export default TimeComponent
