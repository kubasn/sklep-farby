import { IoMdAddCircle } from "react-icons/io";
import Product2Img from "./assets/paintWhite.jpeg";

import Product3Img from "./assets/paintBrown.jpg";
import Product4Img from "./assets/paintGray.jpeg";

const cartItems = [
  {
    id: 1,
    image: <Product2Img />,
    icon: <IoMdAddCircle />,
    name: "Samtex biały",
    price: 50,
    capacity: 1,
    category: "interior",
    amount: 1,
  },
  {
    id: 2,
    image: <Product3Img />,
    icon: <IoMdAddCircle />,
    name: "Samtex szary",
    price: 105,
    capacity: 2,
    category: "interior",
    amount: 1,
  },
  {
    id: 3,
    image: <Product4Img />,
    icon: <IoMdAddCircle />,
    name: "Capasilan brązowy",
    price: 75,
    capacity: 1.5,
    category: "wood",
    amount: 1,
  },
];

export default cartItems;
