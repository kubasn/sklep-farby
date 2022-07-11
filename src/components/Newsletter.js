import React from "react";

const Newsletter = () => {
  return (
    <div className="">
      <div className="bg-stone-800  min-h-[256px]  w-full pb-2">
        <p className="text-center w-3/4 lg:w-1/2  mx-auto text-slate-100 pt-10 pb-4  text-2xl ">
          Jeśli chcesz otrzymywać aktualne informacje o naszych produktach,
          zapisz się do newslettera
        </p>
        <input
          className="w-3/4 lg:w-1/3 mx-auto block rounded-md outline-none py-2 px-2  placeholder:text-slate-600"
          type="text"
          placeholder="Wpisz adres mailowy"
        />
        <button className="bg-slate-200 w-3/4 lg:w-1/3 rounded-md py-2 block my-4 mx-auto transition-all duration-1000 text-slate-600 font-bold hover:bg-midnight-green hover:text-white">
          Zapisz się
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
