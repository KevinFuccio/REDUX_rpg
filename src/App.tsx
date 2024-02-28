import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./assets/state/store";
import { useEffect, useState } from "react";
import { userFetchData } from "./assets/state/user";
import UserCard from "./assets/components/UserCard";
import OptionWindow from "./assets/components/OptionWindow";
import NavBar from "./assets/components/NavBar";
import { NavSection } from "./assets/interfaces";
function App() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [optionsRender, setOptionsRender] = useState<boolean>(false);
  const [navSelection, setNavSelection] = useState<string>('');
  useEffect(() => {
    dispatch(userFetchData());
  }, []);
  const windowSelectior = ()=>{
    switch (navSelection) {
      case NavSection.JOB:
        console.log(navSelection);
        return <OptionWindow data={user} setOptionsRender={setOptionsRender}/>
      case NavSection.HOUSE:
        return <OptionWindow data={user} setOptionsRender={setOptionsRender}/>
    
      default:
        break;
    }
  }
  return (
    <>
      <NavBar setNavSelection={setNavSelection}/>
      <UserCard data={user} setOptionsRender={setOptionsRender} optionsRender={optionsRender} />
      {optionsRender ? <OptionWindow data={user} setOptionsRender={setOptionsRender}/> : <></>}
      {windowSelectior()}
    </>
  );
}

export default App;
