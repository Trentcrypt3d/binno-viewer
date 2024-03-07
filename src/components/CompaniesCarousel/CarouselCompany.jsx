import React from "react";
import CarouselData from "./CarouselData";
import { Carousel } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function CarouselCompany() {
  return (
    <>
      <div className="flex items-center justify-center">
        {CarouselData.map((val, key) => (
          <div className="m-5">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="flex items-center justify-center w-full">
                  {/* card container (parent container)*/}

                  <div
                    className="flex flex-col justify-center items-center max-h-96 max-w-80"
                    key={key}
                  >
                    {/* profilePic Container */}
                    <div className="relative flex items-center justify-center rounded-full p-2 bg-white">
                      <img
                        className="flex h-20 w-20 rounded-full object-cover"
                        src={val.profilePic}
                        alt="Profile Picture"
                      />
                    </div>
                    {/* background design */}
                    <div className="pt-10 rounded bg-white">
                      {/* content container */}
                      <div className=" flex justify-center items-center flex-col">
                        <div className="flex m-1 font-bold text-2xl">
                          {val.username}
                        </div>
                        <div className="flex m-5">{val.companyDesc}</div>
                        <img
                          className="flex h-full max-h-32 w-full object-cover object-center rounded"
                          src={val.profileCover}
                          alt="Profile Cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        ))}
      </div>
    </>
  );
}
export default CarouselCompany;
