import React from "react";
import { members } from "../ContentData";

function CommunityPage() {
  return (
    <>
      {/* Community page container */}
      <div className="flex flex-row justify-center items-center my-40 w-full mx-0">
        {/* text container */}
        <div className="flex mx-40 max-w-1/2">
          <h1 className="text-CustomOrange font-bold text-5xl w-full max-w-80">
            Be part of our growing community
          </h1>
        </div>
        {/* community count container grid format*/}
        <div className="grid grid-cols-2 mx-35">
          {members.map((member) => (
            // cards gap
            <div className="mx-5" key={member.id}>
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
