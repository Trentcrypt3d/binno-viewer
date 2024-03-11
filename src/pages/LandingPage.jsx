import React from "react";
import CompanyPage from "./MembersPage/CompanyPage";
import DiscoverPage from "./DiscoverPage/DiscoverPage";

function LandingPage() {
  return (
    <>
      {/*Main Landing Page*/}
      <div className="flex flex-col w-full">
        <CompanyPage />
        <DiscoverPage />
      </div>
    </>
  );
}

export default LandingPage;
