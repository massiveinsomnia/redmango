import React, { useEffect } from "react";
import { Header, Footer } from "../Components/Layout";
import {
  Home,
  Login,
  MenuItemDetails,
  NotFound,
  Register,
  ShoppingCart,
} from "../Pages";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";

// import { useState, useEffect } from "react";
// import { menuItemModel } from "../Interfaces";

function App() {
  // PINDAH KE COMPONENT MENUITEMLIST (BETTER STRUCTURE)
  // // const [menuItems, setMenuItems] = useState([]);
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  // // jalanin function ini pas pertama kali render
  // // fetch data menu item dari api local
  // useEffect(() => {
  //   fetch("https://localhost:7084/api/MenuItem")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setMenuItems(data.result);
  //     });
  // }, []);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetShoppingCartQuery(
    "8936f433-7537-4bf7-9a60-198568ca8880"
  );

  // fetch cart item setiap ada perubahan di shopping cart
  useEffect(() => {
    if (!isLoading) {
      dispatch(setShoppingCart(data.result?.cartItems));
      // console.log(data.result);
    }
  }, [data]);

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* route pas card image menu item di click, trigger di MenuItemCard component */}
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
