import React, { useEffect, useState } from "react";
import ParticlesBackground from "./Components/Background/ParticlesBackground"; // Ensure correct import
import cv from '../Assests/cv/Yashodha Gunawardhana.pdf';
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 h-screen px-6 md:px-16 bg-transparent"
    >
      <ParticlesBackground className="home-background absolute inset-0" />

      {/* Home Content */}
      <div
        className={`flex flex-col text-center md:text-left items-center md:items-start justify-center relative z-10 transition-transform duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, It's <span className="text-main-color">Yashodha</span>
        </h1>
        <h3 className="text-2xl md:text-4xl font-semibold my-4">
          I'm a <span className="relative text-animation"><span></span></span>
        </h3>
        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-[90%] md:max-w-[700px]">
          As a proactive learner and problem-solver, I thrive in dynamic
          environments where I can leverage my technical skills to create
          innovative solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-8">
          {[
            { name: "linkedin-square", url: "https://www.linkedin.com/in/yashodha-gunawardhana/" },
            { name: "gmail", url: "mailto:ikykgunawardhana@gmail.com" },
            { name: "github", url: "https://github.com/Yashcat2" },
            { name: "whatsapp", url: "https://wa.me/+94703199598" }
          ].map((icon) => (
            <a
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-hover flex items-center justify-center w-[40px] md:w-[45px] h-[40px] md:h-[45px] border-2 border-[#00b3ff] text-[#00b3ff] rounded-full text-2xl md:text-3xl"
            >
              <i className={`bx bxl-${icon.name}`}></i>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-8 transition-transform duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100 delay-800" : "translate-y-10 opacity-0"
          }`}
        >
          <a
            href="#contact"
            className="icon-hover py-3 px-8 md:py-4 md:px-12 bg-[#00b3ff] text-black font-semibold text-lg md:text-xl rounded-full border-2 border-transparent shadow-lg transform transition-all hover:scale-105"
          >
            Hire Me
          </a>
          <a
            href={cv}
            download="Yashodha_Gunawardhana_Resume.pdf"
            className="icon-hover py-3 px-8 md:py-4 md:px-12 bg-black text-[#00b3ff] font-semibold text-lg md:text-xl rounded-full border-2 border-[#00b3ff] shadow-lg transform transition-all hover:scale-105 hover:bg-[#00b3ff] hover:text-black"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Home Image */}
      <div
        className={`relative transition-transform duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <img
          src="2.png"
          alt="yash"
          className="w-[50vw] md:w-[30vw] lg:w-[26vw] rounded-full cursor-pointer transform transition-transform duration-1000 text-shadow-main-color box-shadow-main-color hover:scale-110 hover:rotate-6 hover:box-shadow-main-color-hover hover:shadow-[0_0_25px_var(--main-color),_0_0_50px_var(--main-color),_0_0_100px_var(--main-color)]"
        />
      </div>
    </section>
  );
};

export default Home;
