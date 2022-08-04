import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/cartSlice";
import Order from "./Order";

const orders = [
  {
    id: 14234243,
    totalPrice: 3000,

    products: [
      {
        name: "farba biala",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba niebieska",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba różowa",
        capacity: 1,
        price: 250,
        amount: 4,
      },
    ],
  },
  {
    id: 14234243,
    totalPrice: 3000,

    products: [
      {
        name: "farba biala",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba niebieska",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba różowa",
        capacity: 1,
        price: 250,
        amount: 4,
      },
    ],
  },
  {
    id: 14234243,
    totalPrice: 3000,

    products: [
      {
        name: "farba biala",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba niebieska",
        capacity: 1,
        price: 250,
        amount: 4,
      },
      {
        name: "farba różowa",
        capacity: 1,
        price: 250,
        amount: 4,
      },
    ],
  },
];

const getOrders = createAsyncThunk("orders/getOrders", (name) => {
  let itemsArray = [];
  const q = query(collection(db, "orders"), where("name", "==", name));
  //
  const querySnapshot = getDocs(q)
    .then((res) => {
      res.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        itemsArray.push(item);
      });
      return { itemsArray };
    })
    .catch((err) => console.log(err));
  return querySnapshot;
});

const Orders = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getOrders(user.name);
  }, []);

  return (
    <div className="w-1/2 mx-auto mb-12">
      <h2 className="text-center font-medium text-gray-700">Lista zamówień</h2>
      <div>
        {orders.map((order) => {
          return <Order {...order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
