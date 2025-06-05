'use client';

import { Merriweather } from 'next/font/google';
import Image from 'next/image';

// Configure Merriweather font
const merriweather = Merriweather({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Services() {
  return (
    <>
     
      <div className={`${merriweather.className} bg-gray-50 min-h-screen`}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-5xl font-semibold mb-6 text-[#1a1f3d] drop-shadow-sm">
            Our Services
          </h2>
          <p className="text-lg max-w-lg mb-20 text-gray-600 leading-relaxed tracking-wide">
            Egestas Integer Eget Aliquet Nibh Praesent Tristique Magna. Diam Sit Amet Nisl Suscipit.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="icon-bg mb-8">
                <Image
                  alt="Illustration of a sun with a face, lines radiating outward in a soft coral color"
                  className="w-20 h-20"
                  height={80}
                  src=""
                  width={80}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1a1f3d] leading-snug">
                Birth Chart Readings
              </h3>
              <p className="text-gray-500 max-w-[180px] leading-relaxed tracking-wide">
                Vestibulum rhoncus est pellentesque elit.
              </p>
            </div>
            <div className="divider hidden md:block h-40"></div>
            {/* Service 2 */}
            <div className="flex flex-col items-center text-center max-w-xs mt-16 md:mt-0">
              <div className="icon-bg mb-8">
                <Image
                  alt="Illustration of a triangle with a sun inside, surrounded by small stars in coral color"
                  className="w-20 h-20"
                  height={80}
                  src=""
                  width={80}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1a1f3d] leading-snug">
                Compatibility Assessments
              </h3>
              <p className="text-gray-500 max-w-[180px] leading-relaxed tracking-wide">
                Consequat mauris nunc congue nisi.
              </p>
            </div>
            <div className="divider hidden md:block h-40"></div>
            {/* Service 3 */}
            <div className="flex flex-col items-center text-center max-w-xs mt-16 md:mt-0">
              <div className="icon-bg mb-8">
                <Image
                  alt="Illustration of a person with a planet with rings covering their eyes, coral color"
                  className="w-20 h-20"
                  height={80}
                  src=""
                  width={80}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1a1f3d] leading-snug">
                Career Guidance
              </h3>
              <p className="text-gray-500 max-w-[180px] leading-relaxed tracking-wide">
                Magna sit amet purus gravida.
              </p>
            </div>
            <div className="divider hidden md:block h-40"></div>
            {/* Service 4 */}
            <div className="flex flex-col items-center text-center max-w-xs mt-16 md:mt-0">
              <div className="icon-bg mb-8">
                <Image
                  alt="Illustration of two hands holding a planet with orbiting moons, coral color"
                  className="w-20 h-20"
                  height={80}
                  src=""
                  width={80}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1a1f3d] leading-snug">
                Relationship Advice
              </h3>
              <p className="text-gray-500 max-w-[180px] leading-relaxed tracking-wide">
                Dictumst vestibulum rhoncus est.
              </p>
            </div>
            <div className="divider hidden md:block h-40"></div>
            {/* Service 5 */}
            <div className="flex flex-col items-center text-center max-w-xs mt-16 md:mt-0">
              <div className="icon-bg mb-8">
                <Image
                  alt="Illustration of a crescent moon with sun rays and a cloud, coral color"
                  className="w-20 h-20"
                  height={80}
                  src="/ruby.png"
                  width={80}
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#1a1f3d] leading-snug">
                Sun Signs Consultation
              </h3>
              <p className="text-gray-500 max-w-[180px] leading-relaxed tracking-wide">
                Tincidunt dui ut ornare amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon-bg {
          background: linear-gradient(135deg, #fcd5b2 0%, #f9a8d4 100%);
          border-radius: 9999px;
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 15px -3px rgb(249 168 212 / 0.3),
            0 4px 6px -4px rgb(252 213 178 / 0.4);
          transition: transform 0.3s ease;
        }

        .icon-bg:hover {
          transform: scale(1.1);
          box-shadow: 0 20px 25px -5px rgb(249 168 212 / 0.5),
            0 10px 10px -5px rgb(252 213 178 / 0.6);
        }

        .divider {
          width: 1px;
          background: linear-gradient(to bottom, #f9a8d4, #fcd5b2);
          opacity: 0.3;
          margin: 0 2rem;
        }
      `}</style>
    </>
  );
}