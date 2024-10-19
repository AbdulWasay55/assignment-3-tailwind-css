import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div id="about-us">
      <div className="flex flex-col  justify-center ">
        <p className="font-semibold text-blue-950 text-5xl mt-16 self-center">
          About Me
        </p>
        <Image
          className="self-center rounded-full border-blue-950 border-4 mt-8"
          src="/profile.jpg"
          alt="profile-pic"
          width={100}
          height={100}
        />
        <p className="ml-3 mt-4 mr-3 text-justify">
           <b>Hello</b>, my name is <b>Abdul Wasay</b>. I am a detail-oriented professional
          with a background in computer science and a passion for programming.
          With a focus on <b>TypeScript</b> and <b>Next.js</b>, I aim to create efficient,
          scalable solutions that drive impactful results. I have experience
          building projects such as a <b>Countdown Timer,Weather Widget,Birthday Wish Card</b> and an <b>Interactive Resume
          Builder</b> during hackathons and challenges, showcasing my
          problem-solving abilities and attention to detail. My journey in tech
          has been shaped by continuous learning, practical coding experiences,
          and hands-on project development.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
