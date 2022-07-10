import React from "react";

const Newsletter = () => {
  return (
    <footer>
      <div className="bg-stone-800  h-[256px]  w-full">
        <p className="text-center w-1/2 mx-auto text-slate-100 py-10 text-2xl ">
          Jeśli chcesz otrzymywać aktualne informacje o naszych produktach,
          zapisz się do newslettera
        </p>
        <input
          className="w-1/3 mx-auto block rounded-md outline-none py-2 px-2  placeholder:text-slate-600"
          type="text"
          placeholder="Wpisz adres mailowy"
        />
        <button className="bg-slate-200 w-1/3 rounded-md py-2 block my-4 mx-auto text-slate-600 font-bold">
          Zapisz się
        </button>
      </div>
    </footer>
  );
};

export default Newsletter;
