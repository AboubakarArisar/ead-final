import React from "react";

const TrafficSimulator = () => {
  return (
    <>
      <div className='bg-gray-900 min-h-screen w-full flex justify-center items-center'>
        <div className='h-[50vh] w-[50%]  shadow-lg flex flex-col justify-center gap-4 items-center'>
          <h4 className='text-white text-normal'>Traffic Light Simulator</h4>
          <div className='h-[30vh] w-[13%] bg-gray-800 rounded-lg shadow-lg py-2 px-2 flex flex-col justify-center items-center gap-4'>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-600 shadow'></div>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-600 shadow'></div>
            <div className='w-[50px] h-[50px] rounded-full bg-gray-600 shadow'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrafficSimulator;
