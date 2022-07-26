import React, { useState } from "react";
import { useEffect } from "react";
import Paints from "../components/Paints";
import db from "../firebase";
import { collection, doc, getDocs, query } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import {
  decreasePage,
  getPaints,
  getprevPaints,
  increasePage,
} from "../features/paintsSlice";

const PaintsPage = () => {
  const paints = useSelector((state) => state.paints);
  const dispatch = useDispatch();
  let { items, page, lastDoc } = paints;
  //const [page, setPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const changePage = (sign) => {
    let title = items[items.length - 1].name;
    let firstElement = items[0].name;
    console.log(items.length);
    if (sign == "-") {
      dispatch(decreasePage());
      dispatch(getprevPaints(title));
    } else if (sign == "+") {
      dispatch(increasePage(firstElement));
      dispatch(getPaints(title));
    }
  };

  useEffect(() => {
    console.log(page);
    if (page - 1 == "1") {
      setDisablePrev(true);
    }
    if (page > 1) {
      setDisablePrev(false);
    }
    if (items.length == 0 || items.length != 4) {
      setDisableNext(true);
    }
  }, [items]);

  if (items) {
    return (
      <div>
        {items.length != 0 ? (
          <>
            <h2 className="text-2xl ml-5 font-medium mb-8 ">
              Zobacz nasze produkty:
            </h2>
            <div className="">
              <Paints items={items} />
            </div>{" "}
          </>
        ) : (
          <h2 className="text-3xl mb-12 text-center text-stone-700 ">
            Ostatnia strona. Wyświetlono już wszystkie produkty.
          </h2>
        )}
        <div className=" mb-8 flex justify-center gap-x-4">
          <button
            onClick={() => changePage("-")}
            disabled={disablePrev}
            className="disabled:text-gray-500 text-[45px] hover:text-emerald-900 transition-all duration-300 hover:cursor-pointer disabled:cursor-default  "
          >
            <BsFillArrowLeftCircleFill className=" " />
          </button>
          <button
            className="disabled:text-gray-500 text-[45px] hover:text-emerald-900 transition-all duration-300 hover:cursor-pointer disabled:cursor-default  "
            disabled={disableNext}
            onClick={() => changePage("+")}
          >
            <BsFillArrowRightCircleFill className="   " />
          </button>
        </div>
      </div>
    );
  }
};

export default PaintsPage;
