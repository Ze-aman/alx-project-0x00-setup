import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", className = "" }) => {
  // Define Tailwind classes based on size
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button className={`${sizeClasses} ${shape} bg-blue-500 text-white font-semibold hover:bg-blue-600 ${className}`}>
      {title}
    </button>
  );
};

export default Button;
