import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/HightlightText';
import ctaButton from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        {/* Section 1 */}
        <div className='mx-auto flex flex-col w-11/12 items-center'>
            <Link to="/signup">
                <div className='bg-richblack-800 rounded-full p-1 mt-16 transition-all duration-200 hover:scale-95'>
                    <div className='flex flex-row items-center gap-2 px-10 py-[5px]'>
                        <p>Become an Instructor</p>
                        <FaArrowRight />
                    </div>
                </div>
            </Link>
            <div className='mt-7 text-4xl font-semibold'>
                Empower your Future with <HighlightText text={'Coding Skills'} color="richblue-500"/>
            </div>
            <div className='mt-4 font-bold text-richblack-300 w-[90%]'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            <div className='flex flex-row items-center gap-2 mt-5'>
                <ctaButton text="Learn More" active={true} linkto="/signup" />
                <ctaButton text="Book a Demo" active={false} linkto="/signup" />
            </div>
        </div>
    </div>
  )
}

export default Home;
