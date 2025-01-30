import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CompetitionTimelineElement from './Components/Achivements/AchivementTimeline'; // Adjust the path as needed
import competitionsData from './Components/Achivements/achivements'; // Adjust the path as needed

const Achievements = () => {
  return (
    <section className="flex flex-row justify-evenly gap-8 mt-16" id="timeline">
      <div className="no-scrollbar w-full">
        <h1 className="mb-16 md:text-4xl text-xl tracking-tight font-extrabold text-center font-badscript text-gray-900 dark:text-white p-2">
          UNVEILING MY JOURNEY THROUGH COMPETITIONS
        </h1>
        <VerticalTimeline>
          {competitionsData.map((competition, index) => (
            <CompetitionTimelineElement 
              key={index} 
              competition={competition} 
              isLeft={index % 2 === 0} // Alternate sides based on index
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Achievements;
