import React, { useState } from "react";
import { cartItemModel } from "../../../Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../Storage/Redux/store";
import { inputHelper } from "../../../Helper";
import { MiniLoader } from "../Common";

function CartPickUpDetails() {
  const [loading, setLoading] = useState(false);
  const shoppingCartFromStore: cartItemModel[] = useSelector(
    // state.shoppingCartStore.cartItems cek nama nya ke tools redux di browser atau ke component Store nya langsung
    // ?? else return empty array
    (state: RootState) => state.shoppingCartStore.cartItems ?? []
  );
  let grandTotal = 0;
  let totalItems = 0;
  const initialUserData = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  shoppingCartFromStore?.map((cartItem: cartItemModel) => {
    totalItems += cartItem.quantity ?? 0;
    grandTotal += (cartItem.menuItem?.price ?? 0) * (cartItem.quantity ?? 0);
    return null;
  });

  const [userInput, setUserInput] = useState(initialUserData);

  /*
  onChange it will invoke 1 method which is handleUserInput, what that will do is it will call the input helper with the user input that is the current state
  inputHandler will then spread the data and based on the name of the element, it will assign the value. So this will only work if you know the name that we have
  right here matches exactly the name property that you can see on 

    <input
        type="email"
        value={userInput.email}
        className="form-control"
        placeholder="email..."
        name="email" <<<<< HERE
        onChange={handleUserInput}
        required
    />

    name="email"        <<< FOR EMAIL
    name="phoneNumber"  <<< AND FOR PHONE NUMBER

    the name that we have like email on this line must match what we have in the initialUserData

    bottom line fungsi inputHelper buet bikin semua yang diinput jadi controlled component daripada dibikin jadi state satu satu
  */

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempData = inputHelper(e, userInput);
    setUserInput(tempData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="border pb-5 pt-3">
      <h1 style={{ fontWeight: "300" }} className="text-center text-success">
        Pickup Details
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="col-10 mx-auto">
        <div className="form-group mt-3">
          Pickup Name
          <input
            type="text"
            value={userInput.name}
            className="form-control"
            placeholder="name..."
            name="name"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group mt-3">
          Pickup Email
          <input
            type="email"
            value={userInput.email}
            className="form-control"
            placeholder="email..."
            name="email"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="form-group mt-3">
          Pickup Phone Number
          <input
            type="number"
            value={userInput.phoneNumber}
            className="form-control"
            placeholder="phone number..."
            name="phoneNumber"
            onChange={handleUserInput}
            required
          />
        </div>
        <div className="form-group mt-3">
          <div className="card p-3" style={{ background: "ghostwhite" }}>
            <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            <h5>No of items : {totalItems}</h5>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-success form-control mt-3"
          disabled={loading}
        >
          {loading ? <MiniLoader /> : "Looks Good? Place Order!"}
        </button>
      </form>
    </div>
  );
}

export default CartPickUpDetails;
