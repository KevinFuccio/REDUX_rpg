import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./assets/state/store";
import { useEffect, useState } from "react";
import { userFetchData } from "./assets/state/user";
import UserCard from "./assets/components/UserCard";
import OptionWindow from "./assets/components/OptionWindow";
import NavBar from "./assets/components/NavBar";
import { NavSection } from "./assets/interfaces";
import JobWindow from "./assets/components/JobWindowComponent";
import React from "react";
import { handleClearInterval, payChecker, startTime, UNEMPLOYED } from "./assets/utils";
import CarWindowComponent from "./assets/components/CarWindowComponent";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [optionsRender, setOptionsRender] = useState<boolean>(false);
  const [navSelection, setNavSelection] = useState<string>("");
  const intervalId = useSelector((state: RootState) => state.timeManage.intervalId);
  const { day, month, year } = useSelector((state: RootState) => state.timeManage)
  const user =  useSelector((state: RootState) => state.user)
  
  useEffect(() => {
    dispatch(userFetchData());
  }, []);

  useEffect(() => {
    startTime(dispatch, intervalId);
    return ()=> handleClearInterval(intervalId,dispatch);
  },[])
  useEffect(()=>{
    if(user.job !== UNEMPLOYED){
      payChecker(day,month,dispatch,user.jobYearlySalary,user.hireDate)
    }
  },[day])
  useEffect(() => {
    if (navSelection != "") {
      setOptionsRender(false);
    }
  }, [navSelection]);

  const windowSelector = () => {
    switch (navSelection) {
      case NavSection.JOB:
        return (
          <JobWindow
            setNavSelection={setNavSelection}
            navSelection={navSelection}
          />
        );
      case NavSection.HOUSE:
        return;
      case NavSection.CAR:
        return(
          <CarWindowComponent setNavSelection={setNavSelection} navSelection={navSelection}/>
        )
      default:
        break;
    }
  };
  return (
    <>
      <NavBar setNavSelection={setNavSelection} navSelection={navSelection} />
      <UserCard
        setOptionsRender={setOptionsRender}
        setNavSelection={setNavSelection}
        optionRender={optionsRender}
      />
      <p>{`${day}/${month}/${year}`}</p>
      {optionsRender ? (
        <OptionWindow setOptionsRender={setOptionsRender} />
      ) : (
        ""
      )}
      {windowSelector()}
    </>
  );
}

export default App
