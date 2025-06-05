import React from 'react';
import Image from 'next/image';

const Review = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-4">
          <div className="border-t border-[#f7f2ec] w-16"></div>
          <div className="text-[#f28a73] text-2xl font-semibold">×</div>
          <div className="border-t border-[#f7f2ec] w-16"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1f2547] mb-3">
          Our Customer Thoughts
        </h2>
        <div className="flex space-x-3 text-[#f28a73] text-sm mb-12">
          <button
            aria-label="Slide 1"
            className="w-4 h-4 rounded-full border border-[#f28a73] bg-[#fce9e3]"
          ></button>
          <button
            aria-label="Slide 2"
            className="w-4 h-4 rounded-full border border-[#f28a73]"
          ></button>
          <button
            aria-label="Slide 3"
            className="w-4 h-4 rounded-full border border-[#f28a73]"
          ></button>
        </div>
      </div>
      <div className="relative bg-[#f9f9f9] rounded-2xl p-10 sm:p-16 flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-16">
        <div className="relative flex-shrink-0">
          <Image
            alt="Portrait of a woman with curly black hair, wearing glasses and a brown turtleneck sweater, on a light gray circular background"
            className="rounded-full w-48 h-48 object-cover relative z-10"
            height={200}
            src="/ruby.png"
            width={200}
          />
          <Image
            alt="Orange line art zodiac circle with astrology symbols and stars on a white background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] pointer-events-none select-none"
            height={320}
            src="/ruby.png"
            style={{ zIndex: 0 }}
            width={320}
          />
        </div>
        <div className="max-w-3xl relative z-10 flex flex-col justify-center">
          <p className="text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
            Accumsan lacus vel facilisis volutpat est. Ornare suspendisse sed nisi lacus sed viverra tellus in. Lobortis scelerisque fermentum dui faucibus. Et odio pellentesque diam volutpat commodo. Odio morbi quis commodo odio aenean sed. Velit laoreet id donec ultrices tincidunt arcu non sodales. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Aliquet enim tortor at auctor.
          </p>
          <div className="flex items-center mb-4 space-x-1 text-yellow-400 text-lg">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <h3 className="text-[#f28a73] font-serif text-xl sm:text-2xl font-semibold mb-1">
            Saara - Manager
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">Zodiac - Leo</p>
        </div>
        <Image
          alt="Orange line art quotation marks stacked vertically"
          className="absolute right-10 top-1/2 -translate-y-1/2 w-20 h-40 pointer-events-none select-none hidden sm:block"
          height={160}
          src="/ruby.png"
          style={{ zIndex: 0 }}
          width={80}
        />
      </div>
    </section>
  );
};

export default Review;