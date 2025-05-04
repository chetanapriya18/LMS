import React, { useContext } from 'react';
import { assets } from '../../assets/assets';

const CourseCard = ({ course }) => {

  const { currency } = useContext(AppContext);

  return (
    <div>
      <img className='w-full' src={course.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
      <h3 className='text-base font-semibold'>{course.courseTitle}</h3>
      <p className='text-gray-500'>{course.educator.name}</p>

      <div>
        <p>4.5</p>
        <div>
        {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt=''
                className="w-3.5 h-3.5"
              />
            ))}
        </div>
        <p>22</p>
      </div>
      <p>{currency}
        {(course.coursePrice - course.discount * coursePrice / 100).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CourseCard
