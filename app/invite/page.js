"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
// import { useSearchParams } from "next/navigation";

const page = () => {

  // const searchParams = useSearchParams();
  // const attend = searchParams.get("attendance");

  return (
    <div className="mb-10">
      <div className="relative">
        <img
          srcset="rsvp_banner_lg.jpg 1024w"
          src="./rsvp_banner.jpg"
          alt="rsvp banner"
          className="xs:h-[200px] md:h-[250px] lg:h-[525px] md:w-full blur-[1px]"
        />
        <div className="center">
          <p className="font-lato text-[30px] text-white font-bold uppercase">
            Access Card
          </p>
        </div>
      </div>

      {/* <div className="z-30">
        <img src="./flower1.svg" className="absolute right-[-100px]" />
      </div> */}

      <div className="md:max-container md:padding-container">
        <div className="relative">
          <div className="bg1 pt-5 pb-10 md:mt-5 px-5">
            <div className="border-none shadow-md p-5 md:p-12 rounded-sm">        
                <p className="flexCenter font-serif mt-5 md:mt-8 blue font-normal text-[16px] md:text-[18px] text-justify md:text-center">
                  Find below your invitation / access to the event. Please do
                  not forget to save a copy.
                </p>
            </div>
          </div>
        </div>
        <div className="flexCenter px-5">
          <img src="./invitation.png" alt="invitation card" />
        </div>
      </div>
    </div>
  );
};

export default page;
