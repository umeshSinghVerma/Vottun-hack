import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type ShinyButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const ShinyButton = forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className }, ref) => {
    return (
      <button ref={ref} className={cn("shiny-button group", className)}>
        <div className="spinner-container">
          <div className="spinner opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="front-layer"></div>
        <div className="text">{children}</div>
      </button>
    );
  }
);

// Set the displayName property
ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
