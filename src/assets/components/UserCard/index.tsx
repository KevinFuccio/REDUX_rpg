import { User } from "../../interfaces";
import "./style.scss";

const userCard = ({
  data,
  setOptionsRender,
  optionsRender,
}: {
  data: User;
  setOptionsRender: (value: boolean) => void;
  optionsRender: boolean;
}) => {
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
      <h3>Name: {data.name}</h3>
      <h5>Money: {data.money}€</h5>
      <div>
        <i
          style={{ cursor: "pointer" }}
          className="fa-solid fa-gear"
          onClick={() => setOptionsRender(!optionsRender)}
        ></i>
      </div>
    </div>
  );
};
export default userCard;
