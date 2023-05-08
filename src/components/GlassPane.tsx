import React from "react";
import clsx from "clsx";

type Props = {};

const GlassPane = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border-solid border-2 border-gray-200 glass"
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
