import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-900 mt-4 ">
      <p className="text-center text-xl font-semibold p-3 text-slate-400 ">
        Follow Me :{" "}
      </p>
      <div className="justify-center flex items-center p-6">
        <div className="bg-[#61DBFB] text-slate-200 w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
          <a href="https://web.facebook.com/farid.matialoz" target="_blank">
            <FaFacebookF />
          </a>
        </div>

        <div className="bg-[#61DBFB]  text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
          <a href="https://github.com/FarizMaulaa" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="bg-[#61DBFB] text-white w-[40px] h-[40px] text-[23px] rounded-full flex justify-center items-center mr-2">
          <a href="https://intagram.com" target="_blank">
            <BsInstagram />
          </a>
        </div>
        <div className="bg-[#61DBFB] text-white w-[40px] h-[40px] text-[23px] rounded flex justify-center items-center mr-2">
          <a
            href="https://www.linkedin.com/in/fariz-maulana-39988022b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <p className="text-center  text-xl font-semibold p-2 text-slate-400">
          Copyright © 2023 - FarizMaulaa
        </p>
      </div>
    </div>
  );
}

export default Footer;
