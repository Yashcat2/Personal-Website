import React, { useState, useEffect, useRef } from 'react';
import projects from './Components/ProjectSection/ProjectData';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef(null);
  const isHijacked = useRef(false);
  const quantity = projects.length;
  const anglePerCard = 360 / quantity;
const scrollCount = useRef(0);
const hasCompleted = useRef(false);

  useEffect(() => {
  const section = sectionRef.current;

  

const onWheel = (e) => {
  const rect = section.getBoundingClientRect();
  const inView = rect.top <= 100 && rect.bottom >= 100;

  if (!inView || hasCompleted.current) return;

  e.preventDefault();

  setRotation((prev) => {
    const next = e.deltaY > 0 ? prev - anglePerCard : prev + anglePerCard;
    const normalised = ((-next % 360) + 360) % 360;
    const index = Math.round(normalised / anglePerCard) % quantity;
    setActiveIndex(index);

    if (e.deltaY > 0) {
      scrollCount.current += 1;
    }

    if (scrollCount.current >= quantity) {
      hasCompleted.current = true;
    }

    return next;
  });
};

  window.addEventListener('wheel', onWheel, { passive: false });
  return () => window.removeEventListener('wheel', onWheel);
}, [anglePerCard, quantity]);

  const goNext = () => {
    setRotation((prev) => {
      const next = prev - anglePerCard;
      const normalised = ((-next % 360) + 360) % 360;
      const index = Math.round(normalised / anglePerCard) % quantity;
      setActiveIndex(index);
      return next;
    });
  };

  const goPrev = () => {
    setRotation((prev) => {
      const next = prev + anglePerCard;
      const normalised = ((-next % 360) + 360) % 360;
      const index = Math.round(normalised / anglePerCard) % quantity;
      setActiveIndex(index);
      return next;
    });
  };

  return (
   <section
  id="projects"
  ref={sectionRef}
  className="relative w-full min-h-[130vh] overflow-hidden bg-transparent flex flex-col items-center pt-16"
>
      {/* Title */}
      {/* Faded background title */}
<div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-white mb-8 font-badscript">
          My Projects
        </h1>
</div>

      {/* 3D Carousel */}
      <div className="relative w-full flex items-center justify-center" style={{ height: '400px', perspective: '1400px' }}>
        <div
          className="relative"
          style={{
            width: '200px',
            height: '250px',
            transformStyle: 'preserve-3d',
            transform: `rotateX(-8deg) rotateY(${rotation}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {projects.map((project, index) => {
            const isFront = index === activeIndex;
            return (
              <div
                key={index}
                className="absolute inset-0 cursor-pointer"
                style={{
                  transform: `rotateY(${index * anglePerCard}deg) translateZ(550px)`,
                }}
                onClick={() => {
                  const diff = index - activeIndex;
                  setRotation((prev) => prev - diff * anglePerCard);
                  setActiveIndex(index);
                }}
              >
                {/* Card Image */}
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  style={{
                    border: isFront ? '2px solid #00b3ff' : '2px solid transparent',
                    boxShadow: isFront ? '0 0 20px #00b3ff' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* Title overlay on front card only */}
                {isFront && (
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-b-xl px-2 py-2 text-center"
                    style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
                  >
                    {/* <p className="text-[#00b3ff] text-xs font-bold leading-tight">
                      {project.title}
                    </p> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={goPrev}
          className="px-5 py-2 rounded-full border border-[#00b3ff] text-[#00b3ff] text-sm hover:bg-[#00b3ff] hover:text-black transition-all duration-300"
        >
          ← Prev
        </button>
        <button
          onClick={goNext}
          className="px-5 py-2 rounded-full border border-[#00b3ff] text-[#00b3ff] text-sm hover:bg-[#00b3ff] hover:text-black transition-all duration-300"
        >
          Next →
        </button>
      </div>

      {/* Project Info Below */}
<div className="mt-8 text-center px-6 max-w-2xl transition-all duration-500 relative z-10 bg-transparent">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00b3ff] mb-3">
          {projects[activeIndex].title}
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          {projects[activeIndex].description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {projects[activeIndex].techUsed.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full border border-[#00b3ff] text-[#00b3ff]"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-3">{projects[activeIndex].date}</p>
      </div>
    </section>
  );
};

export default Projects;