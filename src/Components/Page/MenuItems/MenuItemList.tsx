import React from "react";
import { useState, useEffect } from "react";
import { menuItemModel } from "../../../Interfaces";
import MenuItemCard from "./MenuItemCard";
import { useGetMenuItemsQuery } from "../../../Apis/menuItemApi";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../Storage/Redux/menuItemSlice";
import { MainLoader } from "../Common";

function MenuItemList() {
  // const [menuItems, setMenuItems] = useState([]);
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
  // di remark ganti cara nya ke yang pakai RTK Query

  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);

  // jalanin function ini pas pertama kali render
  // fetch data menu item dari api local
  useEffect(() => {
    // di remark ganti cara nya ke yang pakai RTK Query
    // fetch("https://localhost:7084/api/MenuItem")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setMenuItems(data.result);
    //   });

    if (!isLoading) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  // harus ditambahin kalau nggak app bakal error karena dibawah pas return
  // dia cek data.result itu masih kosong karena proses populate data belum selesai
  if (isLoading) {
    //return <div>Loading data ...</div>;
    return <MainLoader />;
  }

  return (
    <div className="container row mb-5">
      {/* di remark ganti cara nya ke yang pakai RTK Query */}
      {/* {menuItems.length > 0 &&
        menuItems.map((menuItems, index) => (
          <MenuItemCard menuItem={menuItems} key={index} />
        ))} */}

      {data.result.length > 0 &&
        // set tipe data
        data.result.map((menuItem: menuItemModel, index: number) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;
