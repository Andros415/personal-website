import React, { ReactElement } from "react";
import { HashLink } from "react-router-hash-link";
import Typist from "react-typist-component";

function Splash(): ReactElement {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="text-center text-slate-800 dark:text-white">
        <h1 className="mb-7 bg-gradient-to-r from-emerald-400 to-[#64ACFF] bg-clip-text font-main text-5xl font-bold tracking-wider text-transparent drop-shadow-lg dark:from-[#61F4DE] dark:to-[#64ACFF] sm:text-7xl">
          Andrei Spatariu
        </h1>
        <div className="m-auto max-w-mobile min-h-12 font-handwriting text-4xl sm:max-w-full sm:text-5xl">
          <Typist>
            <span>Full-stack Web Developer</span>
            <Typist.Delay ms={7500} />
            <Typist.Backspace count={25} />
            <span>University of Georgia Alumni 🐾</span>
          </Typist>
        </div>
        <HashLink to="#About">
          <span className="material-icons-outlined mt-20 text-5xl hover:cursor-pointer motion-safe:animate-bounce">
            expand_circle_down
          </span>
        </HashLink>
      </div>
    </div>
  );
}

export default Splash;
