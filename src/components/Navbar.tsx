import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="text-white p-8 md:px-20">
      <nav className="flex justify-between items-center">
        <span>
          <a href="#" className="font-bold text-2xl">
            LumenLens
          </a>
        </span>
        <ul className="flex gap-6">
          <div className="flex items-center justify-center w-fit bg-white rounded-full p-2">
            <Instagram className="text-black" />
          </div>
          <div className="flex items-center justify-center w-fit bg-white rounded-full p-2">
            <Facebook className="text-black" />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
