import { User } from "../../interfaces";

const userCard = ({ data,setOptionsRender }: { data: User,setOptionsRender: (value:boolean)=> void }) => {
  return (
    <div
      style={{
        width: "250px",
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
    >
       <div>
        <i
          style={{ cursor: "pointer", display:"flex", flexDirection:'row-reverse'}}
          className="fa-solid fa-xmark"
          onClick={() => setOptionsRender(false)}
        ></i>
      </div>
      <h3>Name: {data.name}</h3>
      <h5>Age: {data.age}</h5>
      <h5>Money: {data.money}€</h5>
      <h5>Gender: {data.gender}</h5>
      <h5>Current Job: {data.job}</h5>
      
    </div>
  );
};
export default userCard;
