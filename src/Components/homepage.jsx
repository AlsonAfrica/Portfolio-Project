import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import image from '../assets/Me.jpg'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Info */}
          <div className="space-y-6 animate-fade-in">
            {/* Photo Section */}
            <div className="relative max-w-md mx-auto">
              <div className="aspect-square w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-4 border-white">
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <Star className="w-8 h-8 text-indigo-600" />
              </div>
            </div>

            {/* Name Section */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                Nhlakanipho Alson Radebe
              </h1>
              <p className="text-xl text-indigo-600 font-semibold">
                Mern Stack Trainee
              </p>
            </div>
          </div>

          {/* Right Column - About & Animated Elements */}
          <div className="relative">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                About Me
                <Sparkles className="w-5 h-5 ml-2 text-indigo-600" />
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
              I am a Biokineticist graduate from the University of Johannesburg, deeply passionate about integrating health science with technology to enhance the well-being of both athletes and the general population. 
              My journey into the world of technology began at Code Tribe Academy, where I had the opportunity to immerse myself in the MERN stack. Through hands-on project building, I gained valuable insights into the power of collaboration and effective learning, 
              which have significantly shaped my approach to development
              </p>
              <p className="text-gray-600 leading-relaxed">
              As I continue to grow in the tech industry, my aspirations are focused on becoming a full-stack developer. 
              I aim to build applications that not only push the boundaries of technology but also make a positive impact on the health industry as a whole.
              I believe that by combining my background in health sciences with my skills in technology, I can contribute to creating innovative solutions that improve lives and promote wellness.
              </p>
            </div>

            {/* Animated Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 animate-bounce">
              <div className="w-16 h-16 rounded-full bg-purple-500 opacity-20"></div>
            </div>
            <div className="absolute top-0 right-0 animate-pulse">
              <div className="w-24 h-24 rounded-full bg-indigo-500 opacity-10"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HomePage;