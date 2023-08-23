import { FaCircle } from 'react-icons/fa';
import { AiOutlineSearch} from 'react-icons/ai';
import { BsList} from 'react-icons/bs';
import { BsFilter } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoContractOutline } from 'react-icons/io5';
const Devices = () => {
  return (
    <div className="bg-red-500 flex flex-col h-[100%] max-w-[100%] gap-2 md:grid lg:grid lg:grid-cols-3 lg:grid-rows-1 m-2">
      <div className="bg-white lg:col-span-2 lg:row-span-1 border border-gray-200 ">
      <div className=" flex items-center justify-between font-bold text-xl text-black p-3">
      Water Meters
      <div className="flex items-center">
        <AiOutlineSearch className="mr-2" />
        <BsList className="mr-2" />
        <IoContractOutline />        
        </div>
      </div>
      <div className= "text-gray-700 text-sm mt-4 text-spacing ml-2 "> Label <span className="mx-9 lg:mx-15"></span> Consumed <span className="mx-2 lg:mx-6"></span> Address <span className="mx-2 lg:mx-6"></span> Status <span className="mx-2 lg:mx-6"></span> Leakage</div>
      <div className="border-t border-gray-300 my-2 mt-4"></div>
      <div className= "text-gray-800 text-xs mt-4 text-spacing ml-2 "> WM0000123<span className="mx-5 lg:mx-15"></span> 3722550.89 m <span className="mx-2 lg:mx-6"></span>  <span className="mx-8 lg:mx-12"></span> Active <span className="mx-1 lg:mx-6"></span><FaCircle className="inline-block  mx-6 mr-1 "style={{ color: 'green' }}  /> <FaMapMarkerAlt className="inline-block mx-12 lg:mx-14 mr-1"/></div>
      <div className="border-t border-gray-300 my-2 mt-4"></div>
      <div className= "text-gray-700 text-xs mt-4 text-spacing ml-2 "> WM0000124<span className="mx-5 lg:mx-15"></span> 3722550.89 m <span className="mx-2 lg:mx-6"></span>  <span className="mx-8 lg:mx-12"></span> Active <span className="mx-1 lg:mx-6"></span><FaCircle className="inline-block  mx-6 mr-1 "style={{ color: 'green' }}  /> <FaMapMarkerAlt className="inline-block mx-12 lg:mx-14 mr-1"/> </div>
      <div className="border-t border-gray-300 my-2 mt-4"></div>
      <div className= "text-gray-700 text-xs mt-4 text-spacing ml-2 "> WM0000125<span className="mx-5 lg:mx-15"></span> 3722550.89 m <span className="mx-2 lg:mx-6"></span>  <span className="mx-8 lg:mx-12"></span> Active <span className="mx-1 lg:mx-6"></span><FaCircle className="inline-block  mx-6 mr-1 "style={{ color: 'green' }}  /> <FaMapMarkerAlt className="inline-block mx-12 lg:mx-14 mr-1"/> </div>
      <div className="border-t border-gray-300 my-2 mt-4 mb-20 lg:h-screen"></div>
      </div>
      <div className="bg-white lg:col-span-1 lg:row-span-1 flex  justify-between font-bold text-xl text-black p-3  h-screen border border-gray-200  ">Water Meters
      <div className="flex ">
        <IoContractOutline className="mr-2"/>   
        <AiOutlineSearch className="mr-2" />
        <BsFilter className="mr-2" />
        <BsList  /> 
      </div>
      
    </div>
    </div>
  );
};

export default Devices;
