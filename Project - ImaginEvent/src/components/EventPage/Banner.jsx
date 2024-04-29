import React from "react";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";

const Banner = (props) => {
  const { eventname, time, date, location, img, organiser } = props;
  const convertedDate = new Date(date);
  const formattedDate = convertedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="w-full flex flex-col bg-zinc-800 p-3 rounded-2xl">
        <img src={img} alt="" className="rounded-xl " />
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start p-3 gap-2 justify-center">
            <h1 className="text-2xl md:text-3xl md:py-0 py-3 herofont capitalize font-semibold">{eventname}</h1>
            <h1 className="text-sm md:text-lg font-light flex items-center gap-2">
              <span className="p-3 bg-pink-200 rounded-full"></span>by{" "}
              {organiser && organiser.map((organizer, index) => (
                <span className='text-xs' key={index}> {organizer}</span>
              ))}
            </h1>
          </div>
          <h1 className="text-xl md:flex hidden font-medium p-3">{time}</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-3 md:px-12 gap-5 items-start">
          <div className="flex w-full md:w-1/2 items-center shadow-gray-200/20  gap-3 justify-start  p-2 rounded-lg">
            <IoCalendarClearOutline className="border border-gray-200/40 p-2 rounded-xl text-4xl" />
            <div className="flex flex-col">
              <h1 className="text-md font-semibold">{formattedDate}</h1>
              <h1 className="text-md">{time}</h1>
            </div>
          </div>
          <div className="flex w-full items-center shadow-gray-200/20 justify-start p-2 rounded-lg">
            <div className="w-1/6 flex items-center">
              <IoLocationOutline className="border border-gray-200/40 p-2 rounded-xl text-4xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-sm md:text-md pl-2 md:pl-0 font-semibold">{location}</h1>
              {/* <h1 className="text-sm md:text-md">Bombay, India</h1> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
