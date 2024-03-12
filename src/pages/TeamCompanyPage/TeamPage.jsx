import React from "react";

function TeamPage() {
  return (
    <>
      {/* company team page */}
      <div className="flex bg-discoverWhite justify-center m-0">
        <div className="absolute">
          <h1 className="text-9xl bg-gradient-to-r from-companyBG from-60% to-discoverWhite to-40% font-bold m-5 bg-clip-text text-transparent">
            Meet the Team
          </h1>
        </div>
      </div>
      <div></div>
      <div className="grid grid-cols-2 bg-discoverWhite h-dvh m-0">
        <div className="bg-discoverWhite"></div>
        <div class="bg-companyBG w-11/12 flex justify-self-end"></div>
      </div>
    </>
  );
}

export default TeamPage;
