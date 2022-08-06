import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getOrders } from "../../features/cartSlice";
import Order from "./Order";
import { collection, doc, getDocs, query, where } from "@firebase/firestore";
import db from "../../firebase";
import { useState } from "react";

// const orders = [
//   {
//     id: 14234243,
//     totalPrice: 3000,

//     products: [
//       {
//         name: "farba biala",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba niebieska",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba różowa",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//     ],
//   },
//   {
//     id: 14234243,
//     totalPrice: 3000,

//     products: [
//       {
//         name: "farba biala",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba niebieska",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba różowa",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//     ],
//   },
//   {
//     id: 14234243,
//     totalPrice: 3000,

//     products: [
//       {
//         name: "farba biala",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba niebieska",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//       {
//         name: "farba różowa",
//         capacity: 1,
//         price: 250,
//         amount: 4,
//       },
//     ],
//   },
// ];

const getOrders = async (name) => {
  let itemsArray = [];
  const q = query(collection(db, "orders"), where("name", "==", name));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      item.id = doc.id;
      itemsArray.push(item);
    });
  } catch (err) {
    console.log(err);
  } finally {
    return itemsArray;
  }
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function fetchData() {
      let items = await getOrders(user.name);
      setOrders(items);
    }
    fetchData();
  }, []);

  return (
    <div className="w-1/2 mx-auto mb-12">
      <h2 className="text-center font-medium text-gray-700">Lista zamówień</h2>
      <div>
        {orders &&
          orders.map((order) => {
            return <Order key={order.id} {...order} />;
          })}
      </div>
    </div>
  );
};

export default Orders;
