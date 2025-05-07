import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.slice(0, 4).map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a" onClick={() => {}}>
            {item.name}
          </a>
        </li>
      ))}
      {navLinks.slice(4).map((item) => (
        <li
          key={item.id}
          className="nav-li sm:border-neutral-600 sm:border sm:px-4 sm:py-2 sm:rounded-md cursor-pointer"
        >
          <a href={item.href} className="nav-li_a" onClick={() => {}}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-100/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            <img src="/assets/zn-logo.svg" alt="logo" className="w-10" />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
