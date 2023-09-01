import { AiOutlineSearch} from 'react-icons/ai';
import { BsList } from 'react-icons/bs';

const Analytics = () => {
  return (
    <div className="bg-red-400 flex flex-col h-[100%] max-w-[100%] gap-2 md:grid lg:grid lg:grid-cols-3 lg:grid-rows-1 m-2">
      <div className="bg-sky-300 lg:col-span-2 lg:row-span-1">hello</div>
      <div className="bg-white lg:col-span-1 lg:row-span-1  h-screen border border-gray-200">
      <div className=' flex items-center justify-between font-bold text-xl text-black p-3'>
      Water Meters
      <div className="flex items-center">
        <AiOutlineSearch className="mr-2" />
        <BsList className="mr-2" />
      </div>
       </div>

       <div className="text-gray-700 text-sm mt-4 ml-4 flex">
      <div className="w-full lg:w-1/2">Label</div>
      <div className="w-full lg:w-1/2">Consumed</div>
      <div className="w-full lg:w-1/4">Status</div>
    </div>
    
    <div className="border-t border-gray-300 my-4"></div>

    <div className="text-black text-xs font-medium mt-4 ml-4 flex">
      <div className="w-full lg:w-1/2">WM0000123</div>
      <div className="w-full lg:w-1/2">0.0</div>
      <div className="w-full lg:w-1/4">Active</div>
    </div>
    
    <div className="border-t border-gray-300 my-4"></div>

    <div className="text-black text-xs font-medium mt-4 ml-4 flex">
      <div className="w-full lg:w-1/2">WM0000124</div>
      <div className="w-full lg:w-1/2">0.0</div>
      <div className="w-full lg:w-1/4">Active</div>
    </div>
    
    <div className="border-t border-gray-300 my-4"></div>

    <div className="text-black text-xs font-medium mt-4 ml-4 flex">
      <div className="w-full lg:w-1/2">WM0000125</div>
      <div className="w-full lg:w-1/2">0.0</div>
      <div className="w-full lg:w-1/4">Active</div>
    </div>
    
    <div className="border-t border-gray-300 my-4"></div>
      
   </div>
    </div>
  );
};

export default Analytics;
