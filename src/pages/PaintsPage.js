import React from "react";
import { useEffect } from "react";
import Paints from "../components/Paints";
import db from "../firebase";
import { collection, doc, getDocs, query } from "@firebase/firestore";
import { useSelector } from "react-redux";

const PaintsPage = () => {
  const paints = useSelector((state) => state.paints);
  let { items } = paints;
  console.log(items);

  return (
    <div>
      <h2 className="text-2xl ml-5 font-medium mb-8 ">
        Zobacz nasze produkty:
      </h2>
      <div className="">
        <Paints items={items} />
      </div>
    </div>
  );
};

export default PaintsPage;
