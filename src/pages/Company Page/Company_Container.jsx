import React from "react";
import { SwiperSlide } from "swiper/react";
import CarouselData from "./Company_Data";

function CarouselCompany() {
  return (
    <>
      {CarouselData.map((company, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">
            <div className="m-5">
              <div className="flex items-center justify-center w-full">
                {/* card container (parent container)*/}
                <div className="flex flex-col justify-center items-center max-h-96 max-w-80">
                  {/* profilePic Container */}
                  <div className="relative flex items-center justify-center rounded-full p-2 bg-white">
                    <img
                      className="flex h-24 w-24 rounded-full object-cover"
                      src={company.profilePic}
                      alt="Profile Picture"
                    />
                  </div>
                  {/* background design */}
                  <div className="pt-10 rounded bg-white">
                    {/* content container */}
                    <div className="flex justify-center items-center flex-col">
                      <div className="flex m-1 font-bold text-2xl">
                        {company.username}
                      </div>
                      <div className="flex m-5">{company.companyDesc}</div>
                      <img
                        className="flex h-full max-h-32 w-full object-cover object-center rounded"
                        src={company.profileCover}
                        alt="Profile Cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </>
  );
}

export default CarouselCompany;
