import "./style.scss";
import { useCardRemoverWhenUnfocusedString,} from "../../utils";
import React from "react";
import CarCardComponent from "../CarCardComponent";


const CarWindowComponent = ({setNavSelection,navSelection,}:
  {setNavSelection: (value: string) => void; navSelection: string;}) => {
    const { cardRef } = useCardRemoverWhenUnfocusedString(setNavSelection,navSelection);
    return (
      <div className="blurWindowContainer">
        <div
          style={{
            width: "560px",
            border: "1px solid black",
            padding: "12px",
            backgroundColor: "lightblue",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          ref={cardRef}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse", paddingBottom: "12px" }}>
            <i
              style={{
                cursor: "pointer",
              }}
              className="fa-solid fa-xmark"
              onClick={() => setNavSelection("")}
            ></i>
          </div>
          <div>
            <CarCardComponent/>
          </div>
        </div>
      </div>
    );
};
export default CarWindowComponent;
