import { Link } from '@tanstack/react-router';
import React, { useState, useEffect, useRef } from 'react';

interface Dot {
  id: number;
  progress: number;
  type: 'input' | 'output';
}

interface InputWire {
  id: number;
  startY: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  dots: Dot[];
}

interface OutputWire {
  id: number;
  offset: number;
  dots: Dot[];
}

export const HeroSection: React.FC = () => {
  const [wires, setWires] = useState<InputWire[]>([]);
  const [outputWires, setOutputWires] = useState<OutputWire[]>([]);
  const [time, setTime] = useState<number>(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const generateInputWires = (): InputWire[] => {
      const newWires: InputWire[] = [];
      for (let i = 0; i < 15; i++) {
        const startY: number = 5 + (i * 6.5);
        const amplitude: number = 15 + Math.random() * 25;
        const frequency: number = 0.008 + Math.random() * 0.015;
        const phase: number = Math.random() * Math.PI * 2;
        const speed: number = 0.0005 + Math.random() * 0.001;

        newWires.push({
          id: i,
          startY,
          amplitude,
          frequency,
          phase,
          speed,
          dots: []
        });
      }
      return newWires;
    };

    const generateOutputWires = (): OutputWire[] => {
      const newWires: OutputWire[] = [];
      const spacing: number = 8;
      const totalWires: number = 8;
      const totalHeight: number = (totalWires - 1) * spacing;
      const startOffset: number = -totalHeight / 2;

      for (let i = 0; i < totalWires; i++) {
        newWires.push({
          id: i,
          offset: startOffset + (i * spacing),
          dots: []
        });
      }
      return newWires;
    };

    const inputWires: InputWire[] = generateInputWires();
    const outWires: OutputWire[] = generateOutputWires();

    setWires(inputWires);
    setOutputWires(outWires);

    const dotInterval = setInterval(() => {
      const randomWireIndex: number = Math.floor(Math.random() * inputWires.length);
      const newDot: Dot = {
        id: Date.now() + Math.random(),
        progress: 0,
        type: 'input'
      };

      setWires((prev: InputWire[]) => prev.map((wire: InputWire, idx: number) =>
        idx === randomWireIndex
          ? { ...wire, dots: [...wire.dots, newDot] }
          : wire
      ));
    }, 350);

    const timeInterval = setInterval(() => {
      setTime((prev: number) => prev + 0.016);
    }, 16);

    return () => {
      clearInterval(dotInterval);
      clearInterval(timeInterval);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setWires((prev: InputWire[]) => prev.map((wire: InputWire) => ({
        ...wire,
        dots: wire.dots
          .map((dot: Dot) => ({ ...dot, progress: dot.progress + 0.006 }))
          .filter((dot: Dot) => dot.progress < 1.1)
      })));

      setOutputWires((prev: OutputWire[]) => prev.map((wire: OutputWire) => ({
        ...wire,
        dots: wire.dots
          .map((dot: Dot) => ({ ...dot, progress: dot.progress + 0.008 }))
          .filter((dot: Dot) => dot.progress < 1.1)
      })));
    };

    const animationFrame = setInterval(animate, 16);
    return () => clearInterval(animationFrame);
  }, []);

  useEffect(() => {
    const transferInterval = setInterval(() => {
      setWires((prev: InputWire[]) => {
        const completedDots: Dot[] = [];
        const updatedWires: InputWire[] = prev.map((wire: InputWire) => {
          const remaining: Dot[] = wire.dots.filter((dot: Dot) => {
            if (dot.progress >= 0.95 && dot.progress < 1.0) {
              completedDots.push(dot);
              return false;
            }
            return true;
          });
          return { ...wire, dots: remaining };
        });

        if (completedDots.length > 0) {
          const randomOutputWire: number = Math.floor(Math.random() * outputWires.length);
          setOutputWires((prevOut: OutputWire[]) => prevOut.map((wire: OutputWire, idx: number) =>
            idx === randomOutputWire
              ? { ...wire, dots: [...wire.dots, { id: Date.now() + Math.random(), progress: 0, type: 'output' }] }
              : wire
          ));
        }

        return updatedWires;
      });
    }, 50);

    return () => clearInterval(transferInterval);
  }, [outputWires.length]);

  const getWavePath = (wire: InputWire, width: number, height: number): string => {
    const points: string[] = [];
    const centerX: number = width / 2;
    const centerY: number = height / 2;
    const steps: number = 150;

    for (let i = 0; i <= steps; i++) {
      const progress: number = i / steps;
      const x: number = progress * centerX;

      const animatedPhase: number = wire.phase + time * wire.speed;
      const baseY: number = (wire.startY / 100) * height;
      const waveOffset: number = Math.sin(x * wire.frequency + animatedPhase) * wire.amplitude;

      const straightFactor: number = Math.pow(progress, 2);
      const y: number = baseY + waveOffset * (1 - straightFactor) + (centerY - baseY) * straightFactor;

      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }

    points.push(`L ${centerX} ${centerY}`);
    return points.join(' ');
  };

  const getDotPosition = (
    wire: InputWire | OutputWire,
    progress: number,
    width: number,
    height: number,
    isOutput: boolean = false
  ): { x: number; y: number } => {
    const centerX: number = width / 2;
    const centerY: number = height / 2;

    if (isOutput) {
      const outputWire = wire as OutputWire;
      const x: number = centerX + progress * (width - centerX);
      const y: number = centerY + outputWire.offset;
      return { x, y };
    }

    const inputWire = wire as InputWire;
    const currentX: number = progress * centerX;
    const animatedPhase: number = inputWire.phase + time * inputWire.speed;
    const baseY: number = (inputWire.startY / 100) * height;
    const waveOffset: number = Math.sin(currentX * inputWire.frequency + animatedPhase) * inputWire.amplitude;

    const straightFactor: number = Math.pow(progress, 2);
    const y: number = baseY + waveOffset * (1 - straightFactor) + (centerY - baseY) * straightFactor;

    return { x: currentX, y };
  };

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col items-center justify-center my-8 pt-20 gap-8">
      <svg ref={svgRef} className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="dotGradient">
            <stop offset="0%" stopColor="#a4c8ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#424cf9" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient id="dotGradientGreen">
            <stop offset="0%" stopColor="#a4c8ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#424cf9" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {wires.map((wire: InputWire) => {
          const width: number = svgRef.current?.clientWidth || 1920;
          const height: number = svgRef.current?.clientHeight || 1080;

          return (
            <g key={`wire-input-${wire.id}`}>
              <path
                d={getWavePath(wire, width, height)}
                stroke="#a4c8ff"
                strokeWidth="1.5"
                fill="none"
              />
              {wire.dots.map((dot: Dot) => {
                const pos: { x: number; y: number } = getDotPosition(wire, dot.progress, width, height);
                return (
                  <circle
                    key={dot.id}
                    cx={pos.x}
                    cy={pos.y}
                    r="2"
                    fill="url(#dotGradient)"
                    filter="url(#glow)"
                  />
                );
              })}
            </g>
          );
        })}

        {outputWires.map((wire: OutputWire) => {
          const width: number = svgRef.current?.clientWidth || 1920;
          const height: number = svgRef.current?.clientHeight || 1080;
          const centerX: number = width / 2;
          const centerY: number = height / 2;
          const y: number = centerY + wire.offset;

          return (
            <g key={`wire-output-${wire.id}`}>
              <line
                x1={centerX}
                y1={y}
                x2={width}
                y2={y}
                stroke="#a4c8ff"
                strokeWidth="1.5"
              />
              {wire.dots.map((dot: Dot) => {
                const pos: { x: number; y: number } = getDotPosition(wire, dot.progress, width, height, true);
                return (
                  <circle
                    key={dot.id}
                    cx={pos.x}
                    cy={pos.y}
                    r="2"
                    fill="url(#dotGradientGreen)"
                    filter="url(#glow)"
                  />
                );
              })}
            </g>
          );
        })}
      </svg>

      <div className="relative z-10 text-center">
        <div className="flex justify-center items-center">
          <div className="p-6 aspect-square rounded-3xl bg-white backdrop-blur-sm border-4 border-slate-300">
            <svg width="66" height="66" viewBox="0 0 66 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-auto">
              <rect x="5" y="3.98242" width="12.0381" height="45.4409" rx="6.01904" transform="rotate(-19.3198 5 3.98242)" fill="#04182b" />
              <rect x="25.6152" y="4.11719" width="12.0381" height="45.4409" rx="6.01904" transform="rotate(-19.3198 25.6152 4.11719)" fill="#04182b" />
              <path d="M60 8.25899C60 10.7015 53.4228 22 53.4228 22C53.4228 22 47 10.7015 47 8.25899C47 4.80225 49.9101 2 53.5 2C57.0899 2 60 4.80225 60 8.25899Z" fill="#04182b" />
            </svg>
          </div>
        </div>
      </div>
      <div className="z-10 w-full flex mx-auto flex-col items-center">
        <Link
          to="/docs/$slug"
          params={{ slug: 'guides/first-steps' }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;