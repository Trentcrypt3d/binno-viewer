import React from "react";
import { events } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

function EventsContent() {
  return (
    <>
      <div className="flex">
        {events.map((event) => (
          // cards
          <div className="bg-white rounded-lg flex flex-col mx-5 p-5 max-w-30">
            {/* title description container */}
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-xl mb-1">
                  {event.eventTitle}
                </h2>
                <h2 className="text-black text-opacity-80 ">
                  <LocationOnRoundedIcon />ㅤ{event.eventLocation}
                </h2>
                <h2 className="text-black text-opacity-80 ">
                  <CalendarMonthRoundedIcon />ㅤ{event.date}
                </h2>
                <h2 className="text-black text-opacity-80 mb-1">
                  <AccessTimeRoundedIcon />ㅤ{event.time}
                </h2>
              </div>

              <p className="text-black text-opacity-80 mb-1 text-base">
                {event.eventDescription}
              </p>
            </div>
            {/* footer container */}
            <div className="flex items-center flex-row m-1 mt-3">
              <Avatar src={event.profilePic} alt="profile picture" />
              <h2 className="text-black mx-2 font-bold">{event.username}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default EventsContent;
