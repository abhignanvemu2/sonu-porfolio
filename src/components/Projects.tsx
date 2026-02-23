import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Project {
  id: number;
  videoUrl: string;
}

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-pink-400 text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-transparent border border-gray-800/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                {/* <img
                  src={project.thumbnail}
                  alt={`Project ${project.id}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                /> */}
               <iframe
                src={`https://drive.google.com/file/d/${project.videoUrl}/preview`}
                // className="w-full h-full"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/50">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/50 animate-scale-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="aspect-video bg-black"> 
              <iframe
                src={`https://drive.google.com/file/d/${selectedProject.videoUrl}/preview`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
