import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselData from "./Company_Data";

function CarouselFilter() {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={0}
   
      navigation={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      modules={[Autoplay, Navigation]}
      className="MySwiper"
    >
      {CarouselData.map((company, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">
            <div className="mb-4 mt-5 ">
              <div className="flex items-center justify-center w-full min-w-64 max-w-64">
                {/* card container (parent container)*/}
                <div className="flex flex-col justify-center items-center max-h-96 w-82 ">
                  {/* profilePic Container */}
                  <div className="relative flex items-center justify-center rounded-full p-1 bg-white h-24 w-24 translate-y-10 ">
                    <img
                      className="flex h-10 w-10 rounded-full object-cover"
                      src={company.profilePic}
                      alt="Profile Picture"
                    />
                  </div>
                  {/* background design */}
                  <div className="pt-10 rounded p-4 blur-bg ">   </div>
                    
                  <div className="pt-10 rounded-2xl bg-white h-64">
                    {/* content container */}
                    <div className="flex justify-center flex-col ">
                      <div className="flex items-start ml-4 font-bold text-xl text-black">
                        {company.username}
                      </div>
                      <div className="flex items-start m-5 text-black text-sm h-6">{company.companyDesc}</div>
                     <img
                        className="flex h-full w-full min-h-32 max-h-32 min-w-64 max-w-64 object-fill object-center rounded-b-xl"
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
    </Swiper>
  );
}

export default CarouselFilter;
