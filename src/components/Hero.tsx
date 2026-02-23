import { useEffect, useState } from 'react';
import { Sparkles, Award, Users } from 'lucide-react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    yearsOfExperience: string;
    clientsServed: string;
  };
}

export default function Hero({ data }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
        <div className="mb-6 inline-block">
          <div className="flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Professional Video Editor</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block transform hover:scale-105 transition-transform duration-300">
            {data.name}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
          {data.title}
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {data.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="group">
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">{data.yearsOfExperience}</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>

          <div className="group">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-6 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">{data.clientsServed}</div>
              <div className="text-sm text-gray-400">Satisfied Clients</div>
            </div>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold overflow-hidden hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <span className="relative z-10">View My Work</span>
          <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-500 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
