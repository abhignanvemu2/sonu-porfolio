import { Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  data: {
    phone: string;
    location: string;
    whatsapp: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const handleWhatsAppClick = () => {
    const message = "Hi Sonu! I'm interested in discussing a video project with you.";
    const phoneNumber = data.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 flex items-center justify-center group-hover/item:border-purple-500 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href={`tel:${data.phone}`} className="text-white hover:text-purple-400 transition-colors">
                    {data.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 flex items-center justify-center group-hover/item:border-pink-500 transition-colors">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-white">{data.location}</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-400 text-sm">Open for new projects and collaborations</p>
            </div>

          </div>

          <div className="bg-gradient-to-br from-gray-900/80 to-transparent border border-gray-800/50 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <p className="text-gray-400 leading-relaxed">
                I'm always excited to discuss new projects and creative ideas. Whether you have a specific vision in mind or need professional video editing expertise, let's connect and bring your ideas to life.
              </p>

              <div className="bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 rounded-2xl p-6">
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Quick Connection</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Message me directly on WhatsApp for the fastest response
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-xl text-white font-semibold overflow-hidden hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Chat on WhatsApp
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-800/50 mt-16">
          <p className="text-gray-500">
            &copy; 2024 Shaik Sonu. All rights reserved. Crafted with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
}
