import { Briefcase, Users, Zap } from 'lucide-react';

interface AboutProps {
  data: {
    name: string;
    experience: string;
    clients: string;
    bio: string;
    skills: Array<{
      category: string;
      tools: string[];
    }>;
    achievements: string[];
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">About Me</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Crafting Visual Excellence
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Briefcase className="w-10 h-10 text-purple-400 mb-4 group-hover:rotate-12 transition-transform" />
            <div className="text-2xl font-bold text-white mb-2">{data.experience}</div>
            <div className="text-gray-400 text-sm">Professional Experience</div>
          </div>

          <div className="group bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Users className="w-10 h-10 text-pink-400 mb-4 group-hover:rotate-12 transition-transform" />
            <div className="text-2xl font-bold text-white mb-2">{data.clients}</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>

          <div className="group bg-gradient-to-br from-pink-900/20 to-transparent border border-pink-500/20 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <Zap className="w-10 h-10 text-pink-400 mb-4 group-hover:rotate-12 transition-transform" />
            <div className="text-2xl font-bold text-white mb-2">AI-Powered</div>
            <div className="text-gray-400 text-sm">Cutting-Edge Tech</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-700/50 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            {data.bio}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 mr-3 rounded-full"></span>
                Technical Skills
              </h3>
              <div className="space-y-6">
                {data.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <h4 className="text-purple-400 font-semibold mb-3 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-gray-300 hover:bg-purple-500/20 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 mr-3 rounded-full"></span>
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {data.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
