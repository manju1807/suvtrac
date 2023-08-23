const Home = () => {
  return (
    <div className="bg-black h-[100%] max-w-full text-white flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-5">
      <div className="bg-red-200 flex flex-col text-center justify-center items-center m-2 lg:grid lg:row-span-2 lg:col-span-3">
        Maps
      </div>
      <div className="bg-red-200 m-2 flex flex-col text-center justify-center items-center gap-2 lg:grid lg:row-span-2 lg:col-span-2">
        <div className="bg-green-400 w-full">consumed per day</div>
        <div className="bg-violet-400 w-full">consumed per current week</div>
        <div className="bg-sky-500  w-full ">active alarms</div>
      </div>
      <div className="bg-yellow-500 m-2 lg:mt-0 lg:grid lg:col-span-5 lg:row-span-1">
        water consumption
      </div>
    </div>
  );
};

export default Home;
