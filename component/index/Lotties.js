import React from "react";
import Lottie from "react-lottie";
import animationData from "../../images/68792-cute-astronaut-flying-in-space-animation.json";

function Lotties() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYmid slice",
    },
  };
  return (
    <div className="flex items-center justify-center">
      <Lottie options={defaultOptions} width={350} height={350} />
    </div>
  );
}
export default Lotties;
