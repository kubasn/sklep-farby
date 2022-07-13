import React from "react";
import Paints from "../components/Paints";

const PaintsPage = () => {
  return (
    <div>
      <h2 className="text-2xl ml-5 font-medium mb-8 ">
        Zobacz nasze produkty:
      </h2>
      <div className="">
        <Paints />
      </div>
    </div>
  );
};

export default PaintsPage;
