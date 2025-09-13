"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

function Whatido() {
  return (
    <section className="min-h-[100vh] w-full bg-[url('ttps://i.pinimg.com/originals/f7/49/ee/f749eeaf2e92ba06f85902564fd35722.gif')] bg-cover bg-no-repeat">
      <div className="min-h-[50vh] w-full px-4 sm:px-10 md:px-20 lg:px-40 pt-10 sm:pt-20 md:pt-30">
        <div className="h-auto w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
            <hr className="border-t-2 w-[40px] sm:w-[55px] inline-block mb-2 mr-3" />
            What I Do
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl tracking-wide mt-4">
            I love turning ideas into <br />
            reliable and impactful applications.
          </p>
        </div>

        <div className="w-full h-auto flex items-center mt-6 sm:mt-10">
          <p
            style={{ fontFamily: "revert" }}
            className="text-[clamp(2rem,10vw,7rem)] leading-none font-sans font-bold"
          >
            Think. Code. <br /> Deploy.
          </p>
        </div>
      </div>

      <div className="min-h-[50vh] w-full px-4 sm:px-10 md:px-20 lg:px-40 py-6 sm:py-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* Frontend */}
          <SwiperSlide className="hover:bg-gray-100 duration-300 rounded-2xl p-4 mb-10">
            <div className="h-full w-full">
              <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden mx-auto">
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="https://i.pinimg.com/originals/90/70/32/9070324cdfc07c68d60eed0c39e77573.gif"
                  alt="Frontend Development"
                />
              </div>
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-4">
                Frontend <br /> Development
              </h1>
              <p className="text-center mx-4 sm:mx-6 md:mx-10 text-sm sm:text-base">
                Frontend development focuses on building the user interface and
                experience of websites and applications.
              </p>
            </div>
          </SwiperSlide>
          {/* UI/UX */}
          <SwiperSlide className="hover:bg-gray-100 duration-300 rounded-2xl p-4">
            <div className="h-full w-full">
              <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden mx-auto">
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="https://i.pinimg.com/originals/b8/03/f8/b803f8e0de34075d0eb487fe4db60bcd.gif"
                  alt="UI/UX Development"
                />
              </div>
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-4">
                UI/UX <br /> Development
              </h1>
              <p className="text-center mx-4 sm:mx-6 md:mx-10 text-sm sm:text-base">
                UI/UX development focuses on designing intuitive and engaging user
                interfaces for seamless user experiences.
              </p>
            </div>
          </SwiperSlide>
          {/* Android */}
          <SwiperSlide className="hover:bg-gray-100 duration-300 rounded-2xl p-4">
            <div className="h-full w-full">
              <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden mx-auto">
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="https://i.pinimg.com/originals/24/0d/24/240d24822c74a9a8abfb972d94a998a6.gif"
                  alt="Android Development"
                />
              </div>
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-4">
                Android <br /> Development
              </h1>
              <p className="text-center mx-4 sm:mx-6 md:mx-10 text-sm sm:text-base">
                Android development focuses on creating robust and user-friendly
                mobile applications for Android devices.
              </p>
            </div>
          </SwiperSlide>
          {/* API */}
          <SwiperSlide className="hover:bg-gray-100 duration-300 rounded-2xl p-4">
            <div className="h-full w-full">
              <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden mx-auto">
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="https://i.pinimg.com/1200x/54/24/6c/54246c5e5df64493f80d6fea27d80847.jpg"
                  alt="API Integration"
                />
              </div>
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-4">
                API <br /> Integration
              </h1>
              <p className="text-center mx-4 sm:mx-6 md:mx-10 text-sm sm:text-base">
                API integration enables applications to communicate and exchange
                data seamlessly, enhancing functionality and user experience.
              </p>
            </div>
          </SwiperSlide>
          {/* Scalable Solution */}
          <SwiperSlide className="hover:bg-gray-100 duration-300 rounded-2xl p-4">
            <div className="h-full w-full">
              <div className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[300px] rounded-full overflow-hidden mx-auto">
                <img
                  className="rounded-full h-full w-full object-cover"
                  src="https://i.pinimg.com/originals/e3/47/db/e347db30477773634e0fcd39b61e8cac.gif"
                  alt="Scalable Solution"
                />
              </div>
              <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl my-4">
                Scalable <br /> Solution
              </h1>
              <p className="text-center mx-4 sm:mx-6 md:mx-10 text-sm sm:text-base">
                Scalable solutions ensure applications handle increased loads
                efficiently without compromising performance.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Whatido;