import React from "react";
import { FaGithub } from "react-icons/fa";
import Darkmode from "./Darkmode";

function Navbar() {
  return (
    <div>
      <div className="bg-slate-700 rounded">
        <div className="flex justify-between">
          <div className="flex justify-center items-center p-3">
            <p className="text-2xl font-bold text-white ml-3"> Färizz.</p>
          </div>
          <div className="flex justify-center items-center p-3">
            <Darkmode />
            <p className="text-2xl font-bold text-white">
              <a href="https://github.com/FarizMaulaa" target="_blank">
                <FaGithub />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
