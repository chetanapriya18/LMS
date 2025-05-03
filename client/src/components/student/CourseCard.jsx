import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const CourseCard = ({ course }) => {
  const { currency,calculateRating } = useContext(AppContext);
  

  // Ensure coursePrice and courseDiscount are valid numbers
  const coursePrice = parseFloat(course.coursePrice) || 0;
  const courseDiscount = parseFloat(course.courseDiscount) || 0;

  // Calculate discounted price if valid values exist
  const discountedPrice = (
    coursePrice - (courseDiscount * coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg"
    >
      <img className="w-full" src={course.courseThumbnail} alt="" />

      <div className="p-3 text-left">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-gray-500">{course.educator.name}</p>

        <div className="flex items-center space-x-2">

          <p>{calculateRating(course)}</p>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="star"
                className="w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className="text-gray-500">{course.courseRatings.length}</p>
        </div>

        <p className="text-base font-semibold text-gray-800">
          {currency}
          {discountedPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
