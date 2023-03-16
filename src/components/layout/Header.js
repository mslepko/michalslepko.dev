import React from "react";
import MenuLinks from "../menuLinks"

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
      <nav className="hidden lg:flex lg:flex-row justify-center w-full py-3">
        <MenuLinks
            classes="flex flex-col lg:flex-row h-auto lg:h-full"
            linkClasses={"flex h-full items-center px-6 dark:text-mid dark:hover:text-lightest text-dark hover:text-darkest font-bold"}
          />
      </nav>
  );
}
