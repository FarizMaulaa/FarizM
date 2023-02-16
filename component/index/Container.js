import React from "react";
import Lotties from "./Lotties";
import Navbar from "./Navbar";
import Textwriter from "./Textwriter";

function Container() {
  return (
    <div className="w-screen h-screen bg-slate-900">
      <div className="p-5">
        <Navbar />
      </div>
      <div className="md:flex justify-center items-center md:mt-8">
        <div className="p-2 text-center">
          <h1 className="text-4xl text-white font-bold">
            Hello, I'm{" "}
            <span className="underline underline-offset-4 text-[#61DBFB]">
              Fariz Maulana
            </span>
          </h1>
          <Textwriter />
          <div className="mt-10 mb-7">
            <a
              href="https://wa.me/+62895360861452"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-700 text-slate-400 hover:text-white p-3 rounded cursor-pointer "
            >
              Let's Connect ➜
            </a>
          </div>
        </div>
        <div className="p-2">
          <Lotties />
        </div>
      </div>
    </div>
  );
}

export default Container;
