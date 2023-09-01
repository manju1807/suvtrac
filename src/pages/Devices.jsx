import { FaCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoContractOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
const Devices = () => {
  return (
    <div className="bg-white flex flex-col max-h-[92vh] max-w-[100vw] gap-2 md:grid lg:grid lg:grid-cols-3 lg:grid-rows-1 m-2">
      <div className="bg-white lg:col-span-2 lg:row-span-1 border border-gray-200 ">
        <div className=" flex items-center justify-between font-bold text-xl text-black p-3">
          Water Meters
          <div className="flex items-center">
            <AiOutlineSearch className="mr-2" />
            <BsList className="mr-2" />
            <IoContractOutline />
          </div>
        </div>
        <div className="text-gray-700 text-sm mt-4 text-spacing ml-2 lg:flex lg:justify-between lg:w-[65vw] lg:text-md">
          <span className="lg:mx-4">Label</span>
          <span className=" mx-12 lg:mx-2">Consumed</span>
          <span className=" mx-2 lg:mx-1">Address</span>
          <span className="mx-2 lg:mx-1">Status</span>
          <span className="mx-2 lg:mx-1">Leakage</span>
          <span className="mx-2 lg:mx-1"></span>
        </div>
        <div className="border-t border-gray-300 my-2 mt-4"></div>
        <div className="text-gray-700 text-xs mt-4 text-spacing ml-2 lg:flex lg:justify-between lg:w-full lg:text-xs">
          <span className="lg:mx-4">WM0000123</span>
          <span className=" mx-4 lg:mx-10">3722550.89 m</span>
          <span className=" mx-12 lg:mx-14"></span>
          <span className=" mx-1 lg:mx-14">Active</span>
          <span className="mx-1 lg:mx-2">
            <FaCircle
              className="inline-block  mx-6 mr-1 "
              style={{ color: "green" }}
            />
          </span>
          <span>
            <FaMapMarkerAlt className="inline-block mx-12 lg:mx-12 mr-1" />
          </span>
        </div>
        <div className="border-t border-gray-300 my-2 mt-4"></div>
        <div className="text-gray-700 text-xs mt-4 text-spacing ml-2 lg:flex lg:justify-between lg:w-full lg:text-xs">
          <span className="lg:mx-4">WM0000123</span>
          <span className=" mx-4 lg:mx-10">3722550.89 m</span>
          <span className=" mx-12 lg:mx-14"></span>
          <span className=" mx-1 lg:mx-14">Active</span>
          <span className="mx-1 lg:mx-2">
            <FaCircle
              className="inline-block  mx-6 mr-1 "
              style={{ color: "green" }}
            />
          </span>
          <span>
            <FaMapMarkerAlt className="inline-block mx-12 lg:mx-12 mr-1" />
          </span>
        </div>
        <div className="border-t border-gray-300 my-2 mt-4"></div>
        <div className="text-gray-700 text-xs mt-4 text-spacing ml-2 lg:flex lg:justify-between lg:w-full lg:text-xs">
          <span className="lg:mx-4">WM0000123</span>
          <span className=" mx-4 lg:mx-10">3722550.89 m</span>
          <span className=" mx-12 lg:mx-14"></span>
          <span className=" mx-1 lg:mx-14">Active</span>
          <span className="mx-1 lg:mx-2">
            <FaCircle
              className="inline-block  mx-6 mr-1 "
              style={{ color: "green" }}
            />
          </span>
          <span>
            <FaMapMarkerAlt className="inline-block mx-12 lg:mx-12 mr-1" />
          </span>
        </div>
        <div className="border-t border-gray-300 my-2 mt-4 mb-20 lg:h-screen"></div>
      </div>

      <div className="bg-white lg:col-span-1 lg:row-span-1  h-[92vh] border border-gray-200">
        <div className=" flex items-center justify-between font-bold text-xl text-black p-3">
          Water Meters
          <div className="flex items-center">
            <IoContractOutline className="mr-2" />
            <AiOutlineSearch className="mr-2" />
            <BsFilter className="mr-2" />
            <BsList className="mr-2" />
          </div>
        </div>

        <div className="text-gray-700 text-sm mt-4 ml-2 flex">
          <div className="w-full lg:w-1/2">
            Created Time <FaArrowDown className="inline-block ml-1" />
          </div>
          <div className="w-full lg:w-1/2">Originator</div>
          <div className="w-full lg:w-1/4">Type</div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>
        <div className="text-black text-center  mt-12 pb-12">
          No Alarms found
        </div>
      </div>
    </div>
  );
};

export default Devices;
