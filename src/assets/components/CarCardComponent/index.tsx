import React from "react";
import "./style.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { Car } from "../../interfaces";
import { buyCar, sellCar } from "../../state/carList";
import { removeMoney } from "../../state/user";
import { priceStringConverter } from "../../utils";

const CarCardComponent = () => {
  const carList = useSelector((state: RootState) => state.carList);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const canUserBuyCar = (car: Car) => {
    const carPrice = priceStringConverter(car.price);
    if (user.money >= carPrice) {
      dispatch(buyCar(car.id));
      dispatch(removeMoney(carPrice));
    } else {
      alert("you don't have enough money");
    }
  };
  const purchaseBtn = (car: Car) => {
    if (car.isPurchase) {
      return (
        <button
          className="sellBtn"
          onClick={() => {
            dispatch(sellCar(car.id));
          }}
        >
          <i
            style={{
              cursor: "pointer",
            }}
            className="fa-solid fa-xmark"
          ></i>
        </button>
      );
    } else {
      return (
        <button className="buybtn"
          onClick={() => {
            canUserBuyCar(car);
          }}
        >
          Buy car
        </button>
      );
    }
  };
  return (

    <div className="car-card-container">
      {carList.map((e: Car, i) => (
        <div className="car-card" key={i}>
          <div className="car-card-img">
            <img src={e.vehicle_img} alt="" />
          </div>
          <div className="car-card-info">
            <p>{e.vehicle_name}</p>
            <p>{e.price}</p>
          </div>
          <div className="car-card-btn">
            <span>{purchaseBtn(e)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CarCardComponent;
