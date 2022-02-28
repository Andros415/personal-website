import React, { Dispatch, ReactElement, SetStateAction } from "react";

interface HamburgerButtonProps {
  isNavbarExpanded: boolean;
  setIsNavbarExpanded: Dispatch<SetStateAction<boolean>>;
}

const HamburgerButton = ({
  isNavbarExpanded,
  setIsNavbarExpanded,
}: HamburgerButtonProps): ReactElement => {
  return (
    <button
      aria-label="Toggle mobile navbar menu"
      className="group h-6 w-6 space-y-1 md:hidden"
      onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}
    >
      <div
        className={`h-1 w-full bg-white transition group-hover:bg-teal ${
          isNavbarExpanded ? "translate-y-2 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-full bg-white transition group-hover:bg-teal ${
          isNavbarExpanded ? "-translate-x-2 opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`h-1 w-full bg-white transition group-hover:bg-teal ${
          isNavbarExpanded ? "-translate-y-2 -rotate-45" : ""
        }`}
      ></div>
    </button>
  );
};

export default HamburgerButton;
