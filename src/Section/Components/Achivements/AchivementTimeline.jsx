import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaCode } from "react-icons/fa";

const CompetitionTimelineElement = ({ competition, isLeft }) => {
  const { title, subtitle, date, description, image } = competition;

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#1c4e83', color: '#fff', borderRadius: '20px' }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      date={date}
      iconStyle={{ background: '#00b3ff', color: '#001933' }}
      icon={<FaCode />}
      position={isLeft ? 'left' : 'right'} // Switch position based on isLeft
    >
      <h3 className="vertical-timeline-element-title font-bold text-3xl">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-sm pb-2">{subtitle}</h4>
      {image && <img src={image} alt={title} className="h-64 object-contain w-full mb-4" />}
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default CompetitionTimelineElement;
