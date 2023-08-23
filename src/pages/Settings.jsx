const Settings = () => {
  return (
  
    <div className="bg-gray-100 flex flex-col lg:grid grid-cols-3 max-w-full gap-2 text-white m-2 ">
      <div className="bg-white flex flex-col border border-gray-200 h-screen">
        <div className="font-bold text-xl text-black m-2">System Alarms</div>
        <div className= "text-black m-3">Low Temperature Alarm</div>
        <div className= "flex flex-col bg-blue-100 m-3 p-2 rounded-t-md border-b-2 border-black border-opacity-25 ">
        <div className="text-sm text-gray-700">Low Temperature Threshold</div>
        <div className="text-black">10</div>
        </div>
        <div className= "text-black m-3">Exceeding Daily Consumption Alarm</div>
        <div className= "flex flex-col bg-blue-100 m-3 p-2 rounded-t-md border-b-2 border-black border-opacity-25 ">
        <div className="text-sm text-gray-700"> Daily Consumption Threshold</div>
        <div className="text-black">18</div>
        </div>
        <div className= "text-black m-3">Exceeding Weekly Consumption Alarm</div>
        <div className= "flex flex-col bg-blue-100 m-3 p-2 rounded-t-md border-b-2 border-black border-opacity-25 ">
        <div className="text-sm text-gray-700"> Weekly Consumption Threshold</div>
        <div className="text-black ">353</div>
        </div>
        </div>
        <div className="bg-white flex flex-col border border-gray-200">
        <div className="font-bold text-xl text-black m-2">SMS Notification</div>
        <div className= "text-gray-500 m-3">Low Temperature Alarm</div>
        <div className= "text-gray-500 m-3">Exceeding Daily Consumption Alarm</div>
        <div className= "text-gray-500 m-3">Exceeding Weekly Consumption Alarm</div>
        </div>
        <div className="bg-white flex flex-col border border-gray-200">
        <div className="font-bold text-xl text-black m-2">Email Notifications</div>
        <div className= "text-gray-500 m-3">Low Temperature Alarm</div>
        <div className= "text-gray-500 m-3">Exceeding Daily Consumption Alarm</div>
        <div className= "text-gray-500 m-3">Exceeding Weekly Consumption Alarm</div>
        </div>
    </div>
    
  );
};

export default Settings;
