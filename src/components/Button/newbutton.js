import React from "react";

export default function newbutton({
  children,
  onClick,
  href,
  className = "",
}) {
  const styles = `
    inline-flex items-center justify-center
    text-[1.6rem]
    md:text-[2.5rem]
    font-benditos
    px-10 py-4
    rounded-full
    bg-[#FFB91D] text-white
    transition-all duration-200 ease-out
    hover:scale-105 hover:bg-[#47b9c3]
    active:scale-95
    ${className}
  `;

  // If href is provided, render as a link
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  // Default button behavior
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
