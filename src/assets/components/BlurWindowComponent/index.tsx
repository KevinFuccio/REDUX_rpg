import { isHouse, useCardRemoverWhenUnfocusedString } from "../../utils";
import { Option } from "../../interfaces";
import { AppDispatch } from "../../state/store";


const BlurWindowComponent = ({ el, setNavSelection, navSelection, dispatch }: { el: Option[], setNavSelection: (value: string) => void, navSelection: string,dispatch:AppDispatch }) => {
    const { cardRef } = useCardRemoverWhenUnfocusedString(setNavSelection, navSelection);
    const handleBtn = (e: Option) => {
        if(isHouse(e)){
            if (e.is_bought) {
                return (
                    <button className="quitBtn" onClick={() => {}}>
                        <i style={{cursor: "pointer"}} className="fa-solid fa-xmark"></i>
                    </button>
                )
            } else {
                return (
                    <button onClick={() => {}}> buy House </button>
                )
            }
        }

    }
    const tableHandler = (e: Option, i: number) => {
        if (isHouse(e)) {
            return(
             <table className="jobRow" key={i}>
                {i === 0 ? (
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price to Buy</th>
                        <th scope="col">Rent Price</th>
                        <th style={{border:"none"}}></th>
                    </tr>
                </thead>
                ):""}
                <tbody>
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.price_buy}</td>
                        <td>{e.price_rent}</td>
                        <td>
                            {handleBtn(e)}
                        </td>
                    </tr>
                </tbody>
            </table>
            )
        }
    }

        return (
            <div className="blurWindowContainer">
                <div
                    style={{
                        width: "560px",
                        height: `${el.length * 60}px`,
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
                        {el.map((e, i) => (
                            tableHandler(e, i)
                        ))}
                    </div>
                </div>
            </div>
        )
    }

export default BlurWindowComponent;