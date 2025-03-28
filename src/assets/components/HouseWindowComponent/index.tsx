import { AppDispatch, RootState } from "../../state/store";
import { useSelector } from "react-redux";
import BlurWindowComponent from "../BlurWindowComponent";

const HouseWindowComponent = ({ navSelection, setNavSelection, dispatch }: { navSelection: string; setNavSelection: (value: string) => void; dispatch: AppDispatch }) => {
  const houseList = useSelector((state: RootState) => state.houseList)
  return (
    <BlurWindowComponent el={houseList} setNavSelection={setNavSelection} navSelection={navSelection} dispatch={dispatch}/>
  )
}
export default HouseWindowComponent;