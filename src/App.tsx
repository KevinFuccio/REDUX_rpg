import "./App.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./assets/state/store";
import { useEffect, useState } from "react";
import { jobPay, userFetchData } from "./assets/state/user";
import UserCard from "./assets/components/UserCard";
import OptionWindow from "./assets/components/OptionWindow";
import NavBar from "./assets/components/NavBar";
import { NavSection } from "./assets/interfaces";
import JobWindow from "./assets/components/JobWindowComponent";
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [optionsRender, setOptionsRender] = useState<boolean>(false);
  const [navSelection, setNavSelection] = useState<string>("");
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleMonthlyPay = (salary: string) => {
    if (intervalId != null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    const newIntervalId = setInterval(() => {
      dispatch(jobPay(salary));
    }, 1000);
    setIntervalId(newIntervalId);
  };
  const handleClearInterval = () => {
    if (intervalId != null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    dispatch(userFetchData());
  }, []);

  useEffect(() => {
    if (navSelection != "") {
      setOptionsRender(false);
    }
  }, [navSelection]);

  const windowSelectior = () => {
    switch (navSelection) {
      case NavSection.JOB:
        return (
          <JobWindow
            setNavSelection={setNavSelection}
            handleMonthlyPay={handleMonthlyPay}
            handleClearInterval={handleClearInterval}
          />
        );
      case NavSection.HOUSE:
        return;

      default:
        break;
    }
  };
  return (
    <>
      <NavBar setNavSelection={setNavSelection} />
      <UserCard
        setOptionsRender={setOptionsRender}
        setNavSelection={setNavSelection}
      />
      {optionsRender ? (
        <OptionWindow setOptionsRender={setOptionsRender} />
      ) : (
        <></>
      )}
      {windowSelectior()}
    </>
  );
}

export default App;
