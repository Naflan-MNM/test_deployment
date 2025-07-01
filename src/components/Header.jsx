import React from "react";

const Header = ({ toggleNav }) => (
  <header className="p-4 flex justify-between items-center bg-gray-800 text-white w-full shadow-md">
    <h1 className="text-xl font-bold">Naflan</h1>
    {/* Only show button on mobile */}
    <button className="md:hidden" onClick={toggleNav}>
      ☰
    </button>
  </header>
);

export default Header;
