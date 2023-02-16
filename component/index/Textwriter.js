import React from "react";
import Typewriter from "typewriter-effect";

function Textwriter() {
  return (
    <div className="text-2xl text-white font-bold mb-4">
      <Typewriter
        options={{
          strings: ["Front-End Developer..."],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default Textwriter;
