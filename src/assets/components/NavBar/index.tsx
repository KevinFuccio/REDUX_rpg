import { NavSection } from "../../interfaces";
import "./index.scss";
const NavBar = ({setNavSelection,navSelection}:{setNavSelection:(value:string)=>void,navSelection:string}) => {
  
const selector = (type:string)=>{
  if(navSelection === ''){
    setNavSelection(type)
  }else{
    setNavSelection('')
  }
}

  return (
    <nav style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div className="navBarContainer">
        <div>
          <button className="standardBtn" onClick={()=>selector(NavSection.JOB)}>
            <i className="fa-solid fa-suitcase"></i>
          </button>
          <span>Job</span>
        </div>
        <div>
          <button className="standardBtn" onClick={()=>selector(NavSection.CAR)}>
          <i className="fa-solid fa-car"></i>
          </button>
          <span>Car</span>
        </div>
        <div>
          <button className="standardBtn" onClick={()=>selector(NavSection.HOUSE)}>
          <i className="fa-solid fa-house"></i>
          </button>
          <span>House</span>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
