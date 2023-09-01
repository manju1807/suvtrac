import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import Map from "../components/Map";
import WaterConsumption from "../components/WaterConsumption";
import { FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" text-white max-h-[94vh] flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-5">
      <div className="bg-red-200 flex text-center justify-center items-center m-2 lg:row-span-2 lg:col-span-3">
        <div className="map-container border border-gray-200 shadow-md">
          <Map />
        </div>
      </div>
      <div className=" m-2 flex flex-col text-center justify-center items-center gap-2 lg:row-span-2 lg:col-span-2">
        <div className=" w-full">
          {" "}
          <div className="bg-white flex-grow mr-2 border text-black border-gray-200">
            <div className="mt-6 font-bold text-2xl text-center">
              518388.54 m<sup>3</sup>
            </div>
            <div className="mt-1 text-sm font-normal text-center">
              Consumed per day
            </div>
          </div>
        </div>
        <div className=" w-full">
          {" "}
          <div className="bg-white flex-grow mr-2 border text-black border-gray-200">
            <div className="mt-6 font-bold text-2xl text-center">
              10493570.28 m<sup>3</sup>
            </div>
            <div className="mt-1 text-sm font-normal text-center">
              Consumed per current week
            </div>
          </div>
        </div>
        <div className="bg-white lg:col-span-2 lg:row-span-1 border h-screen  border-gray-200 w-full">
          <div className=" flex items-center justify-between font-bold text-xl text-black p-3">
            Alarms
            <div className="flex items-center">
              <AiOutlineSearch className="mr-2" />
              <BsFilter className="mr-2" />
              <BsList />
            </div>
          </div>

          <div className="text-gray-700 text-sm mt-4 ml-2 flex">
            <div className=" lg:w-1/4">
              Created Time <FaArrowDown className="inline-block ml-1" />
            </div>
            <div className=" mx-8 lg:w-1/4">Originator</div>
            <div className=" mx-6 lg:w-1/4">Type</div>
            <div className="mx-6 lg:w-1/4">Severity</div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="text-black text-center  mt-12 pb-12">
            No Alarms found
          </div>
        </div>
      </div>
      <div className="bg-white m-2 lg:mt-0 lg:col-span-5 lg:row-span-1">
        <WaterConsumption />
      </div>
    </div>
  );
};

export default Home;
