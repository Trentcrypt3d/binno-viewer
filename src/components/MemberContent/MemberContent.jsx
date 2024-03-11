import React from "react";
import BlogsContent from "./Contents/BlogsContent.jsx";
import GuidesContent from "./Contents/GuideContent.jsx";
import EventsContent from "./Contents/EventsContent.jsx";
import CommunityPage from "./Contents/CommunityPage.jsx";

function MemberContent() {
  return (
    <>
      {/* content container */}
      <div className="flex flex-col">
        {/* blog container */}
        <div className="flex flex-col mx-10">
          <h1 className="text-black font-bold text-5xl">Blog</h1>
          <a
            className="flex mx-5 justify-end text-xl text-CustomOrange font-bold "
            href="https://www.facebook.com"
          >
            View All
          </a>
          {/* blog card container */}
          <div className="flex flex-row m-10 ">
            <BlogsContent />
          </div>
        </div>
        {/* event container */}
        <div className="flex flex-col mx-10">
          <h1 className="text-black font-bold text-5xl">Events</h1>
          <a
            className="flex mx-5 justify-end text-xl text-CustomOrange font-bold "
            href="https://www.facebook.com"
          >
            View All
          </a>
          {/* event card container */}
          <div className="flex flex-row m-10">
            <EventsContent />
          </div>
        </div>
        {/* Guides */}
        <div className="flex flex-col mx-10">
          <h1 className="text-black font-bold text-5xl">Guides</h1>
          <a
            className="flex mx-5 justify-end text-xl text-CustomOrange font-bold "
            href="https://www.facebook.com"
          >
            View All
          </a>
          {/* guide card container */}
          <div className="flex flex-row m-10 ">
            <GuidesContent />
          </div>
        </div>
        <div className="flex">
          <CommunityPage />
        </div>
      </div>
    </>
  );
}

export default MemberContent;
