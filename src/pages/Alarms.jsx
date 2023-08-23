import { AiOutlineSearch} from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';

import { FaArrowDown } from 'react-icons/fa';
const Alarms = () => {
  return (
    <div className="bg-white flex flex-col h-[100%] max-w-[100%] gap-2 md:grid lg:grid lg:grid-cols-3 lg:grid-rows-1 m-2">
      <div className="bg-white lg:col-span-2 lg:row-span-1 border h-screen  border-gray-200 ">
      <div className=" flex items-center justify-between font-bold text-xl text-black p-3">
      Alarms
      <div className="flex items-center">
        <AiOutlineSearch className="mr-2" />
        <BsFilter className="mr-2" />
        <BsList  />
      </div>
    </div>
      <div className= "text-gray-700 text-sm mt-4 text-spacing ml-2 "> Created Time  <FaArrowDown className="inline-block mr-1" />  <span className="mx-8 lg:mx-15"></span> Originator <span className="mx-2 lg:mx-6"></span> Type <span className="mx-2 lg:mx-6"></span> Severity <span className="mx-2 lg:mx-6"></span> Status</div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="text-black text-center  mt-12 pb-12" >No Alarms found</div>
      </div>

      
      <div className="bg-white lg:col-span-1 lg:row-span-1 flex  justify-between font-bold text-xl text-black p-3  h-screen border border-gray-200  ">Water Meters
      <div className="flex ">
        <AiOutlineSearch className="mr-2" />
        <BsList className="mr-2" /> 
      </div>
      
    </div>

      
    </div>
  );
};

export default Alarms;
