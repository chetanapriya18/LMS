// src/pages/student/CoursesList.jsx

import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import SearchBar from '../../components/student/SearchBar';
import CourseCard from '../../components/student/CourseCard';
import Footer from '../../components/student/Footer';

const CoursesList = () => {
  const { allCourses } = useContext(AppContext);
  const navigate = useNavigate();
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      if (input) {
        setFilteredCourse(
          tempCourses.filter(course =>
            course.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourse(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      {/* Header */}
      <div className='px-6 md:px-36 pt-10'>
        <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
        <p className='text-gray-500'>
          <span
            className='text-blue-600 cursor-pointer'
            onClick={() => navigate('/')}
          >
            Home
          </span>{' '}
          / <span>Course List</span>
        </p>
      </div>

      {/* Search Bar and Filter Tag */}
      <div className='px-6 md:px-36 mt-6'>
        <SearchBar data={input} />
        {input && (
          <div className='inline-flex items-center gap-2 px-4 py-2 border mt-4 text-sm text-gray-600 rounded-full bg-white shadow transition-all duration-300'>
            <p className='text-blue-600 font-medium'>{input}</p>
            <img
              src={assets.cross_icon}
              alt="Clear filter"
              className='w-4 h-4 cursor-pointer'
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}
      </div>

      {/* Course Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 px-6 md:px-36'>
        {filteredCourse.length > 0 ? (
          filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <p className='col-span-full text-center text-gray-500 text-lg'>
            No courses found matching "{input}".
          </p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CoursesList;
