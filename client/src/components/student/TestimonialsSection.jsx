import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-4 sm:px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='text-base text-gray-500 mt-3'>
        Hear from our learners as they share their journeys of transformation, success, and how our <br className="hidden sm:block" /> platform has made a difference in their lives.
      </p>

      {/* Horizontal scrollable container */}
      <div className='mt-10 overflow-x-auto'>
        <div className='flex gap-5 snap-x snap-mandatory overflow-x-scroll pb-2'>
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className='snap-start min-w-[85%] sm:min-w-[300px] max-w-sm flex-shrink-0 text-sm text-left border border-gray-500/30 rounded-lg bg-white shadow-md shadow-black/5 overflow-hidden'
            >
              <div className='flex items-center gap-4 px-5 py-4 bg-gray-100'>
                <img className='h-12 w-12 rounded-full object-cover' src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                </div>
              </div>
              <div className='p-5'>
                <div className='flex gap-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <img
                      className='h-5'
                      key={i}
                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                      alt="star"
                    />
                  ))}
                </div>
                <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
              </div>
              <a href="#" className='text-blue-500 underline px-5 pb-4 block'>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection