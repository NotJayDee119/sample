import React from 'react';
import { Link } from 'react-router-dom';
import gif404 from '../assets/404gif.gif';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* GIF Animation */}
          <div className="flex justify-center animate-fade-in-up">
            <img 
              src={gif404} 
              alt="404 Animation" 
              className="max-w-full h-auto pointer-events-none select-none"
              style={{ maxHeight: '400px' }}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
          </div>

          {/* 404 Text on Right */}
          <div className="text-left animate-fade-in">
            <h1 className="text-8xl md:text-9xl lg:text-[200px] font-bold text-black leading-none mb-4 font-custom">
              404
            </h1>
            <h2 className="text-[42px] font-bold text-black font-custom">
              Page Not Found
            </h2>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
