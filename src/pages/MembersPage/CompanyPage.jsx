import React from "react";
import NavBar from "../../components/NavBar.jsx";
import CarouselCompany from "../../components/CompaniesCarousel/CarouselCompany.jsx";
import { Button } from "@material-tailwind/react";

function CompanyPage() {
  return (
    <>
      {/*member page container*/}
      <div className="flex flex-col h-lvh w-full bg-companyBG">
        {/* nav bar container */}
        <div className="flex w-full max-h-20">
          <NavBar />
        </div>
        {/* Company Content*/}
        <div className="flex flex-col border border-red-500 w-4/6 p-10 mt-10">
          <h1 className="text-white font-bold text-8xl w-1/2">
            Startup Companies
          </h1>
          <div className="mt-20">{/* <CarouselCompany /> */}</div>
          <div className="flex align-center justify-center m-10">
            <Button
              size="lg"
              className="flex bg-CustomOrange justify-center items-center gap-3 w-1/2"
            >
              Visit Startup Companies
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyPage;
