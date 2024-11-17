import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useCardRemoverWhenUnfocusedBoolean } from "../../utils";
import "./style.scss"
import React from "react";

const OptionWindow = ({
  setOptionsRender,
}: {
  setOptionsRender: (value: boolean) => void;
}) => {
  const user = useSelector((state: RootState) => state.user);
  const { cardRef } = useCardRemoverWhenUnfocusedBoolean(setOptionsRender);
  return (
    <div className="blurWindowContainer">
      <div
        style={{
          height: "250px",
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
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <i
            style={{ cursor: "pointer" }}
            className="fa-solid fa-xmark"
            onClick={() => setOptionsRender(false)}
          ></i>
        </div>
        <h3>Name: {user.name}</h3>
        <h5>Age: {user.age}</h5>
        <h5>Money: {user.money}€</h5>
        <h5>Gender: {user.gender}</h5>
        <h5>Current Job: {user.job}</h5>
      </div>
    </div>
  );
};
export default OptionWindow;
