import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from './Components/ProjectSection/ProjectData';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative mb-10 mx-4 sm:mt-[100px] sm:mx-[20px] w-full sm:w-[220px] md:w-[350px] lg:w-[400px] h-[600px] bg-gray-900 shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 group hover:bg-[#03e9f4] hover:z-10 hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]">
      {/* Top and Bottom Border Animation */}
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#00b3ff] animate-slide-horizontal"></span>
      <span className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent to-[#00b3ff] animate-slide-horizontal"></span>
      
      {/* Left and Right Border Animation */}
      <span className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent to-[#00b3ff] animate-slide-vertical"></span>
      <span className="absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t from-transparent to-[#00b3ff] animate-slide-vertical"></span>
      
      {/* Card Content */}
      <img
        src={project.imageSrc}
        alt={project.title}
        className="h-48 w-full object-cover rounded-t-xl"
      />
      <div className="p-4 pt-6 pb-4">
        <h2 className="text-xl font-bold text-gray-100 group-hover:text-black">
          {project.title}
        </h2>
        <p className="text-gray-200 text-sm mt-2 group-hover:text-black">
          {project.description}
        </p>
        <div className="mt-4">
          <h3 className="text-gray-300 font-medium group-hover:text-black">Tech Used:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.techUsed.map((tech, index) => (
              <li
                key={index}
                className="bg-[#1c4e83] text-gray-300 text-xs px-2 py-1 rounded-lg group-hover:text-black group-hover:bg-[#00b3ff]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-gray-300 mt-4 group-hover:text-black mb-10">
          {project.date}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-12 bg-transparent rounded">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-white mb-8 font-badscript">
          My Projects
        </h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} slick-next !w-[60px] !h-[60px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 flex items-center justify-center absolute right-[-70px] top-1/2 transform -translate-y-1/2 !z-50`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      ➜
    </div>
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} slick-prev !w-[60px] !h-[60px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 flex items-center justify-center absolute left-[-70px] top-1/2 transform -translate-y-1/2 !z-50`}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    >
      ➜
    </div>
  );
};


export default ProjectsSection;
