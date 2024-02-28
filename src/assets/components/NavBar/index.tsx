import { NavSection } from "../../interfaces";
import "./index.scss";
const NavBar = ({setNavSelection}:{setNavSelection:(value:string)=>void}) => {
  return (
    <nav style={{ display: "flex", flexDirection: "row-reverse" }}>
      <div className="navBarContainer">
        <div>
          <button className="standardBtn" onClick={()=>setNavSelection(NavSection.JOB)}>
            <i className="fa-solid fa-suitcase"></i>
          </button>
          <span>Job</span>
        </div>
        <div>
          <button className="standardBtn" onClick={()=>setNavSelection(NavSection.CAR)}>
          <i className="fa-solid fa-car"></i>
          </button>
          <span>Car</span>
        </div>
        <div>
          <button className="standardBtn" onClick={()=>setNavSelection(NavSection.HOUSE)}>
          <i className="fa-solid fa-house"></i>
          </button>
          <span>House</span>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
