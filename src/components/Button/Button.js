import React from "react";

const Button = ({
  children,
  type,
  bgColor,
  textColor,
  className = "",
  ...props
}) => {
  return (
    <Button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}` } {...props}
    >
      {children}
    </Button>
  );
};

export default Button;
