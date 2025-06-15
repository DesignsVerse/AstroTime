"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: "Saara",
    role: "Manager",
    zodiac: "Leo",
    image: "https://dt-suriya.myshopify.com/cdn/shop/files/testimonial.jpg?v=1683788419&width=550",
    overlapImage: "/suriya-web.svg", // Add your overlap image URL here
    rating: 3,
    text: "Accumsan lacus vel facilisis volutpat est. Ornare suspendisse sed nisi lacus sed viverra tellus in. Lobortis scelerisque fermentum dui faucibus. Et odio pellentesque diam volutpat commodo. Odio morbi quis commodo odio aenean sed. Velit laoreet id donec ultrices tincidunt arcu non sodales. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Aliquet enim tortor at auctor."
  },
  // ... other testimonials
];

const Review: React.FC = () => {
  // ... keep your existing useEffect and swiper configuration

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative"> {/* Increased container size */}
      <div className="row">
        <div className="text-center mb-12"> {/* Increased margin */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800"> {/* Larger heading */}
            Our Customer Thoughts
          </h2>
        </div>

        <div className="swiper testimonialsSwiper" id="testimonial-slider">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden p-10 h-full"> {/* Larger box */}
                  {/* Image Section - Made larger */}
                  <div className="w-full md:w-2/5 pr-0 md:pr-10 mb-8 md:mb-0 relative flex items-center justify-center">
                    {/* Background Pattern - Now properly visible */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        loading="lazy"
                        src={testimonial.overlapImage || testimonial.image}
                        alt={`${testimonial.name} background`}
                        className="h-[90%] w-[90%] object-contain opacity-30" // Proper sizing and visibility
                      />
                    </div>
                    
                    {/* Main Circular Image - Larger size */}
                    <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl z-10"> {/* Added z-index */}
                      <img
                        loading="lazy"
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content Section - Adjusted spacing */}
                  <div className="w-full md:w-3/5 flex flex-col justify-center py-4">
                    <blockquote className="space-y-6">
                      <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="dt-sc-rating">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" opacity="0.5" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <cite className="not-italic">
                        <p className="font-bold text-gray-800 text-xl">{testimonial.name} - {testimonial.role}</p>
                        <span className="text-gray-500 text-base">Zodiac - {testimonial.zodiac}</span>
                      </cite>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-10"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;