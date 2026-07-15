import React, { useState, useEffect, useRef } from 'react';
import technologies from '../Section/Components/Skills/skills';
import hack from '../Assests/hack.gif';

// Wide spread positions — starts narrow top, fans out downward
const nodePositions = [
  // Row 1 — 5 nodes, spread across top
  { x: 150, y: 80  }, { x: 350, y: 50  }, { x: 550, y: 70  }, { x: 720, y: 40  }, { x: 880, y: 90  },
  // Row 2 — 6 nodes, wider
  { x: 60,  y: 210 }, { x: 230, y: 190 }, { x: 430, y: 220 }, { x: 620, y: 180 }, { x: 800, y: 200 }, { x: 970, y: 230 },
  // Row 3 — 6 nodes, even wider
  { x: 30,  y: 360 }, { x: 200, y: 340 }, { x: 400, y: 370 }, { x: 590, y: 330 }, { x: 780, y: 360 }, { x: 990, y: 340 },
  // Row 4 — 5 nodes
  { x: 90,  y: 490 }, { x: 280, y: 510 }, { x: 500, y: 480 }, { x: 700, y: 500 }, { x: 920, y: 470 },
  // Row 5 — 4 nodes
  { x: 180, y: 620 }, { x: 390, y: 640 }, { x: 620, y: 610 }, { x: 840, y: 630 },
];

// Organic diagonal edges — top fans down
const edges = [
  // row1 internal
  [0,1],[1,2],[2,3],[3,4],
  // row1 → row2
  [0,5],[0,6],[1,6],[1,7],[2,7],[2,8],[3,8],[3,9],[4,9],[4,10],
  // row2 internal
  [5,6],[6,7],[7,8],[8,9],[9,10],[10,11],
  // row2 → row3
  [5,11],[5,12],[6,12],[7,12],[7,13],[8,13],[8,14],[9,14],[10,15],[11,15],[11,16],
  // row3 internal
  [12,13],[13,14],[14,15],[15,16],
  // row3 → row4
  [12,17],[13,17],[13,18],[14,18],[14,19],[15,19],[15,20],[16,20],[16,21],
  // row4 internal
  [17,18],[18,19],[19,20],[20,21],
  // row4 → row5
  [17,22],[18,22],[18,23],[19,23],[20,24],[21,24],[21,25],
  // row5 internal
  [22,23],[23,24],[24,25],
  // cross diagonals for wild feel
  [0,7],[1,8],[3,10],[6,13],[8,15],[9,16],[14,20],[13,19],
];

const Skills = () => {
  const [activeNodes, setActiveNodes] = useState(new Set());
  const [activeEdges, setActiveEdges] = useState(new Set());
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    technologies.forEach((_, i) => {
      setTimeout(() => {
        setActiveNodes((prev) => new Set([...prev, i]));
      }, i * 100);
    });
    edges.forEach((edge, i) => {
      setTimeout(() => {
        setActiveEdges((prev) => new Set([...prev, `${edge[0]}-${edge[1]}`]));
      }, 200 + i * 60);
    });
  };

  const isEdgeActive = (a, b) =>
    activeEdges.has(`${a}-${b}`) || activeEdges.has(`${b}-${a}`);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full bg-transparent flex flex-col items-center overflow-hidden"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-20 mb-6 font-badscript">
        My <span className="text-[#00b3ff]">Skills</span>
      </h1>

      <div className="relative w-full" style={{ maxWidth: '1100px', height: '740px' }}>
        <svg
          viewBox="0 0 1060 700"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="glowS">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="nodeGlowS">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Edges — very thin and subtle */}
          {edges.map(([a, b]) => {
            const posA = nodePositions[a];
            const posB = nodePositions[b];
            if (!posA || !posB) return null;
            const active = isEdgeActive(a, b);
            return (
              <g key={`e-${a}-${b}`}>
                <line
                  x1={posA.x} y1={posA.y}
                  x2={posB.x} y2={posB.y}
                  stroke="rgba(0,179,255,0.05)"
                  strokeWidth="0.8"
                />
                {active && (
                  <line
                    x1={posA.x} y1={posA.y}
                    x2={posB.x} y2={posB.y}
                    stroke="#00b3ff"
                    strokeWidth="0.8"
                    opacity="0.25"
                  />
                )}
                {active && (
                  <circle r="2" fill="#00b3ff" opacity="0.5">
                    <animateMotion
                      dur={`${2 + (a % 4) * 0.4}s`}
                      repeatCount="indefinite"
                      path={`M${posA.x},${posA.y} L${posB.x},${posB.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Skill nodes — big icons are the star */}
          {technologies.map((tech, idx) => {
            const pos = nodePositions[idx];
            if (!pos) return null;
            const active = activeNodes.has(idx);
            return (
              <g key={tech.name}>
                {/* subtle outer glow ring */}
                <circle
                  cx={pos.x} cy={pos.y} r="34"
                  fill="none"
                  stroke={active ? 'rgba(0,179,255,0.3)' : 'rgba(0,179,255,0.04)'}
                  strokeWidth="1"
                  filter={active ? 'url(#glowS)' : 'none'}
                  style={{ transition: 'all 0.5s ease' }}
                />
                {/* inner dark circle */}
                <circle
                  cx={pos.x} cy={pos.y} r="26"
                  fill={active ? 'rgba(0,10,20,0.85)' : 'rgba(0,0,0,0.6)'}
                  stroke={active ? 'rgba(0,179,255,0.5)' : 'rgba(0,179,255,0.06)'}
                  strokeWidth="1.5"
                  filter={active ? 'url(#nodeGlowS)' : 'none'}
                  style={{ transition: 'all 0.5s ease' }}
                />
                {/* icon — big and prominent */}
                <foreignObject
                  x={pos.x - 18} y={pos.y - 18}
                  width="36" height="36"
                  style={{ opacity: active ? 1 : 0.1, transition: 'opacity 0.5s ease' }}
                >
                  <div style={{
                    width: '36px', height: '36px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                    />
                  </div>
                </foreignObject>
                {/* label */}
                <text
                  x={pos.x} y={pos.y + 42}
                  textAnchor="middle"
                  fill={active ? 'rgba(0,179,255,0.8)' : 'rgba(0,179,255,0.1)'}
                  fontSize="8"
                  fontFamily="sans-serif"
                  style={{ transition: 'all 0.5s ease' }}
                >
                  {tech.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Hack gif */}
      <div className="flex justify-center mt-6 mb-10">
        <img src={hack} alt="hacker" className="rounded-lg shadow-lg h-[180px]" />
      </div>

    </section>
  );
};

export default Skills;