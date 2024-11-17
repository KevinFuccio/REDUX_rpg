import "./style.scss";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import React from "react";

const UserCard = ({
  setOptionsRender,
  setNavSelection,
  optionRender
}: {
  setOptionsRender: (value: boolean) => void;
  setNavSelection: (value: string) => void;
  optionRender:boolean
}) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "12px",
        backgroundColor: "lightblue",
        position: "absolute",
        top: "0px",
        left: "0px",
      }}
      className="userCard"
    >
      <h3>Name: {user.name}</h3>
      <h5>Money: {user.money}€</h5>
      <div>
        <i
          style={{ cursor: "pointer" }}
          className="fa-solid fa-gear"
          onClick={() => {setOptionsRender(!optionRender),setNavSelection('')}}
        ></i>
      </div>
    </div>
  );
};
export default UserCard;
