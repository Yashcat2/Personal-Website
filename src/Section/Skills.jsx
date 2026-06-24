import React, { useState, useEffect, useRef } from 'react';
import technologies from '../Section/Components/Skills/skills';
import hack from '../Assests/hack.gif';

const categories = [
  { id: 'languages', label: 'Languages', skills: ['Python', 'C', 'C++', 'Java'], color: '#f59e0b' },
  { id: 'frontend', label: 'Frontend', skills: ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript', 'React JS', 'Next JS', 'Tailwind CSS'], color: '#00b3ff' },
  { id: 'backend', label: 'Backend', skills: ['Node JS', 'Express JS', '.NET', 'MongoDB', 'MySQL', 'Firebase'], color: '#8b5cf6' },
  { id: 'mobile', label: 'Mobile', skills: ['Flutter', 'Dart', 'Android'], color: '#10b981' },
  { id: 'devops', label: 'DevOps & Tools', skills: ['git', 'Docker', 'Jenkins', 'Linux', 'figma', 'Jira'], color: '#ef4444' },
];

const animationOrder = ['languages', 'frontend', 'backend', 'mobile', 'devops'];

const getSkillIcon = (name) => {
  const tech = technologies.find((t) => t.name === name);
  return tech ? tech.icon : null;
};

const Block = ({ cat, active, style, expanded, onToggle }) => {
  return (
    <div
      style={{
        ...style,
        width: '160px',
        opacity: active ? 1 : 0.2,
        transition: 'all 0.5s ease',
        zIndex: expanded ? 20 : 1,
      }}
    >
      <div
        onClick={onToggle}
        className="rounded-xl cursor-pointer select-none"
        style={{
          background: active ? `rgba(0,0,0,0.6)` : 'rgba(0,0,0,0.3)',
          border: `2px solid ${active ? cat.color : 'rgba(255,255,255,0.1)'}`,
          boxShadow: active ? `0 0 16px ${cat.color}66` : 'none',
          padding: '12px 16px',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="flex items-center gap-2">
          <div style={{
            width: '10px', height: '10px', borderRadius: '50%',
            background: active ? cat.color : 'gray',
            boxShadow: active ? `0 0 8px ${cat.color}` : 'none',
            transition: 'all 0.4s ease',
            flexShrink: 0,
          }} />
          <span className="text-white text-xs font-bold">{cat.label}</span>
        </div>
        <p className="text-gray-400 text-[10px] mt-1">{cat.skills.length} skills · click</p>
      </div>

      {expanded && active && (
        <div
          className="mt-2 rounded-xl p-2 flex flex-wrap gap-2 justify-center"
          style={{
            background: 'rgba(0,0,0,0.8)',
            border: `1px solid ${cat.color}44`,
            animation: 'popIn 0.3s ease',
          }}
        >
          {cat.skills.map((name) => {
            const icon = getSkillIcon(name);
            return icon ? (
              <div key={name} className="flex flex-col items-center gap-1">
                <img src={icon} alt={name} className="w-7 h-7 object-contain" />
                <span style={{ fontSize: '8px', color: cat.color }}>{name}</span>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const [step, setStep] = useState(-1);
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          animationOrder.forEach((_, i) => {
            setTimeout(() => setStep(i), i * 600);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isActive = (id) => step >= animationOrder.indexOf(id);

  return (
    <section id="skills" ref={sectionRef} className="relative w-full min-h-screen bg-transparent flex flex-col items-center overflow-hidden">

      <h1 className="text-4xl md:text-5xl font-bold text-white mt-20 mb-16 font-badscript">
        My <span className="text-[#00b3ff]">Skills</span>
      </h1>

      <div className="relative w-full max-w-4xl mx-auto px-8" style={{ minHeight: '520px' }}>

        <svg
          viewBox="0 0 800 520"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="glow2">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* languages → frontend */}
          <line x1="400" y1="80" x2="130" y2="220"
            stroke={isActive('frontend') ? '#00b3ff' : 'rgba(255,255,255,0.08)'}
            strokeWidth="2" filter={isActive('frontend') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />
          <circle cx="130" cy="220" r="5"
            fill={isActive('frontend') ? '#00b3ff' : 'rgba(255,255,255,0.1)'}
            filter={isActive('frontend') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />

          {/* languages → backend */}
          <line x1="400" y1="80" x2="670" y2="220"
            stroke={isActive('backend') ? '#8b5cf6' : 'rgba(255,255,255,0.08)'}
            strokeWidth="2" filter={isActive('backend') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />
          <circle cx="670" cy="220" r="5"
            fill={isActive('backend') ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}
            filter={isActive('backend') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />

          {/* frontend → mobile */}
          <line x1="130" y1="300" x2="220" y2="430"
            stroke={isActive('mobile') ? '#10b981' : 'rgba(255,255,255,0.08)'}
            strokeWidth="2" filter={isActive('mobile') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />
          <circle cx="220" cy="430" r="5"
            fill={isActive('mobile') ? '#10b981' : 'rgba(255,255,255,0.1)'}
            filter={isActive('mobile') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />

          {/* backend → devops */}
          <line x1="670" y1="300" x2="580" y2="430"
            stroke={isActive('devops') ? '#ef4444' : 'rgba(255,255,255,0.08)'}
            strokeWidth="2" filter={isActive('devops') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />
          <circle cx="580" cy="430" r="5"
            fill={isActive('devops') ? '#ef4444' : 'rgba(255,255,255,0.1)'}
            filter={isActive('devops') ? 'url(#glow2)' : 'none'}
            style={{ transition: 'all 0.6s ease' }} />

          {/* Traveling dots */}
          {isActive('frontend') && (
            <circle r="4" fill="#00b3ff" filter="url(#glow2)">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M400,80 L130,220" />
            </circle>
          )}
          {isActive('backend') && (
            <circle r="4" fill="#8b5cf6" filter="url(#glow2)">
              <animateMotion dur="1.8s" repeatCount="indefinite" path="M400,80 L670,220" />
            </circle>
          )}
          {isActive('mobile') && (
            <circle r="4" fill="#10b981" filter="url(#glow2)">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M130,300 L220,430" />
            </circle>
          )}
          {isActive('devops') && (
            <circle r="4" fill="#ef4444" filter="url(#glow2)">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M670,300 L580,430" />
            </circle>
          )}
        </svg>

        {/* Languages — top center */}
        <Block cat={categories[0]} active={isActive('languages')}
          style={{ position: 'absolute', left: '50%', top: '20px', transform: 'translateX(-50%)' }}
          expanded={expandedId === 'languages'}
          onToggle={() => setExpandedId(expandedId === 'languages' ? null : 'languages')}
        />

        {/* Frontend — left middle */}
        <Block cat={categories[1]} active={isActive('frontend')}
          style={{ position: 'absolute', left: '2%', top: '210px' }}
          expanded={expandedId === 'frontend'}
          onToggle={() => setExpandedId(expandedId === 'frontend' ? null : 'frontend')}
        />

        {/* Backend — right middle */}
        <Block cat={categories[2]} active={isActive('backend')}
          style={{ position: 'absolute', right: '2%', top: '210px' }}
          expanded={expandedId === 'backend'}
          onToggle={() => setExpandedId(expandedId === 'backend' ? null : 'backend')}
        />

        {/* Mobile — left bottom */}
        <Block cat={categories[3]} active={isActive('mobile')}
          style={{ position: 'absolute', left: '10%', bottom: '20px' }}
          expanded={expandedId === 'mobile'}
          onToggle={() => setExpandedId(expandedId === 'mobile' ? null : 'mobile')}
        />

        {/* DevOps — right bottom */}
        <Block cat={categories[4]} active={isActive('devops')}
          style={{ position: 'absolute', right: '10%', bottom: '20px' }}
          expanded={expandedId === 'devops'}
          onToggle={() => setExpandedId(expandedId === 'devops' ? null : 'devops')}
        />
      </div>

      {/* Hack gif */}
      <div className="flex justify-center mt-16 mb-10">
        <img src={hack} alt="hacker" className="rounded-lg shadow-lg h-[180px]" />
      </div>

      <style>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </section>
  );
};

export default Skills;