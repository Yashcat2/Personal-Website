import React from 'react';
// import ParticlesBackground from './Components/Background/ParticlesBackground'; // Ensure the import is correct
import technologies from '../Section/Components/Skills/skills'; // Removed curly braces for default import
import hack from '../Assests/hack.gif';

const Skills = () => {
  if (!technologies || technologies.length === 0) {
    return (
      <section id='skills'>
        <div className='mt-8 mx-4 md:mx-16'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center font-badscript text-white mt-20 mb-20'>
            My Skills
          </h1>
          <p className='text-center text-white'>No skills available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id='skills'>
      <div className='mt-8 mx-4 md:mx-16'>
        {/* Add an H1 tag for the heading */}
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center font-badscript text-white mt-20 mb-20'>
          My Skills
        </h1>

        <div className='flex flex-row flex-wrap justify-center gap-10 mb-40'>
          {technologies.map((technology) => (
            <div
              className='mx-auto border border-gray-200 shadow-lg rounded-lg overflow-hidden md:w-16 md:h-16 lg:w-20 lg:h-20 w-12 h-12'
              key={technology.name}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>
        <div className='flex justify-center h-[200px] mb-10'>
          <img
            src={hack}
            alt='Contact Animation'
            className='rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
