import React from "react";
import { guides } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";

function GuidesContent() {
  return (
    <>
      <div className="flex">
        {guides.map((guides) => (
          // cards
          <a href="">
            <div
              className="bg-white rounded-lg flex flex-col mx-5 p-5  max-w-30"
              key={guides.id}
            >
              {/* title description container */}
              <div className="flex flex-col">
                <h2 className="text-black font-bold text-xl mb-1">
                  {guides.guideTitle}
                </h2>
                <p className="text-black text-opacity-80 mb-1 text-base">
                  {guides.guideDescription}
                </p>
              </div>
              <p className="text-black text-opacity-60">{guides.date}</p>
              {/* footer container */}
              <div className="flex items-center flex-row m-1 mt-3">
                <Avatar src={guides.profilePic} alt="profile picture" />
                <h2 className="text-black mx-4 font-bold">{guides.username}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default GuidesContent;
