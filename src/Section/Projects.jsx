import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import projects from './Components/ProjectSection/ProjectData';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative mt-20 mb-20 ml-20 mx-1 w-[350px] h-[450px] bg-gray-900 shadow-lg  rounded-xl  overflow-hidden transform transition duration-300 hover:scale-105 group hover:bg-[#03e9f4] hover:z-10 hover:shadow-[0_0_5px_#03e9f4,0_0_25px_#03e9f4,0_0_50px_#03e9f4,0_0_200px_#03e9f4]">
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
        className="h-48 w-full object-cover mt-0 rounded-xl"
      />

      <div className="p-4 pt-6 pb-4"> {/* Added padding top (pt-6) and bottom (pb-4) */}
        <h2 className="text-xl font-bold text-gray-100 group-hover:text-black">
          {project.title}
        </h2>
        <p className="text-gray-200 text-sm mt-2 group-hover:text-black">
          {project.description}
        </p>
        <div className="mt-4">
          <h3 className="text-gray-300 font-medium group-hover:text-black">Tech Used:</h3>
          <ul className="flex flex-wrap gap-2 mt-2 ">
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
    <section id="projects" className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/30 p-3 rounded-full cursor-pointer hover:bg-white/50`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      ➜
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/30 p-3 rounded-full cursor-pointer hover:bg-white/50`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      ◀
    </div>
  );
};

export default ProjectsSection;
