import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative rounded-full border-2 border-color-1 inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
