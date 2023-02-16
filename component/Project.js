import React from "react";
import Shopee from "../../src/images/Shopee.png";
import Dasboard from "../../src/images/Dasboard.png";
import Bioskop from "../../src/images/Bioskop.png";

function Project() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="mt-8 mb-8 mr-2 ml-2">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={Shopee} alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Shopee Clone
              </h5>
              <p class="text-gray-700 text-base mb-4"></p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 bg-slate-700 text-slate-400 hover:text-white active:shadow-lg transition duration-150 ease-in-out"
              >
                <a href="https://shopeeclone-eta.vercel.app/" target="_blank">
                  Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8 mr-2 ml-2">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={Bioskop} alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Bioskop21</h5>
              <p class="text-gray-700 text-base mb-4"></p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 bg-slate-700 text-slate-400 hover:text-white active:shadow-lg transition duration-150 ease-in-out"
              >
                <a href="https://portofoliov2.vercel.app/" target="_blank">
                  Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8 mr-2 ml-2">
        <div class="flex justify-center">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!">
              <img class="rounded-t-lg" src={Dasboard} alt="" />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Dasboard</h5>
              <p class="text-gray-700 text-base mb-4"></p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5  font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 bg-slate-700 text-slate-400 hover:text-white active:shadow-lg transition duration-150 ease-in-out"
              >
                <a href="https://teskodingahm.vercel.app/" target="_blank">
                  {" "}
                  Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
