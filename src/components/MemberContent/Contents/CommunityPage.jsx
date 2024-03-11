import React from "react";
import { members } from "../ContentData";

function CommunityPage() {
  return (
    <>
      {/* Community page container */}
      <div className="flex flex-row my-40 w-full">
        <div className="flex grow justify-center items-center max-w-1/2">
          <h1 className="text-CustomOrange font-bold text-5xl">
            Be part of our growing community
          </h1>
        </div>
        {/* community count container grid format*/}
        <div className="grid grid-cols-2 mx-40">
          {members.map((member) => (
            // layout container
            <div className="flex items-center justify-center">
              {/* card design */}
              <div className=" bg-white p-8 m-5 w-full max-w-50 rounded">
                {/* content alignment */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-customLBlue font-bold text-7xl mb-3">
                    {member.userCount}
                  </h1>
                  <h3 className="text-black text-xl">{member.usertype}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
