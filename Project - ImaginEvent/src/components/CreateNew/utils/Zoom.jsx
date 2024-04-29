import React from 'react';
import { useMainDashContext } from "../../../context/AppContext";

const Zoom = () => {
  const { newevent, setNewEvent } = useMainDashContext();

  return (
    <>
      <div className=" mt-3 p-3">
        <h1 className=" text-xl">Enter Zoom Information</h1>
        <div className=" p-4">
          <p className=" text-sm">Zoom Meeting URL</p>
          <input
            type="text"
            placeholder="https://zoom.us/j/1234567890"
            className=" w-full md:w-[30rem] h-[2.5rem] border-none outline-none  bg-[#323436] border-gray-500 rounded-md p-3 mt-2"
            onChange={(e) =>
              setNewEvent({ ...newevent, eventurl: e.target.value })
            }
          />
        </div>
        <div className=" pl-4  pb-4">
          <p className=" text-sm">Meeting ID</p>
          <input
            type="text"
            placeholder="Enter Meeting ID"
            className="w-full md:w-[30rem] h-[2.5rem] border-none outline-none  bg-[#323436] border-gray-500 rounded-md p-3 mt-2"
          />
        </div>
        <div className=" pl-4 ">
          <p className=" text-sm">Meeting Password</p>
          <input
            type="text"
            placeholder="Enter Meeting Password"
            className="w-full md:w-[30rem] h-[2.5rem] border-none outline-none  bg-[#323436] border-gray-500 rounded-md p-3 mt-2"
          />
        </div>
      </div>
    </>
  )
}

export default Zoom