import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-[#712cf9] to-[#6610f2] font-sans text-white p-1 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl italic font-semibold">
          Suvetrac
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/Analytics" className="hover:text-gray-300">
          Analytics
        </Link>
        <Link to="/Devices" className="hover:text-gray-300">
          Devices
        </Link>
        <Link to="/Alarms" className="hover:text-gray-300">
          Alarms
        </Link>
        <Link to="/Settings" className="hover:text-gray-300">
          Settings
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-14 right-0 bg-gray-800 w-full p-4">
          <div className="flex flex-col space-y-2 text-center h-[100vh] text-xl ">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/Analytics" className="text-white">
              Analytics
            </Link>
            <Link to="/Devices" className="text-white">
              Devices
            </Link>
            <Link to="/Alarms" className="text-white">
              Alarms
            </Link>
            <Link to="/Settings" className="text-white">
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
