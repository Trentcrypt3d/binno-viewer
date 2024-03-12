import React from "react";
import MembersPage from "./MembersPage/MembersPage.jsx";
import DiscoverPage from "./DiscoverPage/DiscoverPage";
import TeamPage from "./TeamCompanyPage/TeamPage";
import CompanyPage from "./Company Page/CompanyPage.jsx";
import FAQPage from "./FAQ/FAQPage.jsx";
import Footer from "../components/Footer/Footer.jsx";

function LandingPage() {
  return (
    <>
      {/*Main Landing Page*/}
      <div className="flex flex-col w-full bg-discoverWhite">
        <MembersPage />
        <DiscoverPage />
        <TeamPage />
        <CompanyPage />
        <FAQPage />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
