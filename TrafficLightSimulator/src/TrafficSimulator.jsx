import React, { useState, useEffect } from "react";

const lights = ["red", "yellow", "green"];

const TrafficSimulator = () => {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        const idx = lights.indexOf(prev);
        return lights[(idx + 1) % lights.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getLightClass = (color) => {
    const base =
      "w-[50px] h-[50px] rounded-full shadow transition-all duration-300";
    const active = {
      red: "bg-red-500 shadow-red-500/70 shadow-[0_0_40px_10px]",
      yellow: "bg-yellow-500 shadow-yellow-500/70 shadow-[0_0_40px_10px]",
      green: "bg-green-500 shadow-green-500/70 shadow-[0_0_40px_10px]",
    };
    return `${base} ${currentLight === color ? active[color] : "bg-gray-600"}`;
  };

  return (
    <div className='bg-gray-900 min-h-screen w-full flex justify-center items-center'>
      <div className='h-[50vh] w-[50%] shadow-lg flex flex-col justify-center gap-4 items-center'>
        <h4 className='text-white text-normal'>Traffic Light Simulator</h4>
        <div className='h-[30vh] w-[13%] bg-gray-800 rounded-lg shadow-xl py-2 px-2 flex flex-col justify-center items-center gap-4'>
          <div className={getLightClass("red")}></div>
          <div className={getLightClass("yellow")}></div>
          <div className={getLightClass("green")}></div>
        </div>
      </div>
    </div>
  );
};

export default TrafficSimulator;
