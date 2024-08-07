import React, { ReactElement } from "react";
import { SkillIconProps } from "./SkillIcon.interface";


function SkillIcon({
  name,
  type,
  size,
  caption,
  isColored = false,
}: SkillIconProps): ReactElement {
  return (
    <div
      className={`group transition duration-300 sm:hover:scale-110 ${
        size ? "flex w-32 flex-col justify-center lg:w-auto" : ""
      }`}
    >
      <i
        className={`devicon-${name.toLowerCase()}-${type} ${
          isColored ? "colored" : ""
        }`}
        style={{ fontSize: size }}
      />
      {caption && (
        <p className="pointer-events-none mt-1 font-main text-lg transition group-hover:opacity-100 sm:opacity-0">
          {caption}
        </p>
      )}
    </div>
  );
}

export default SkillIcon;
