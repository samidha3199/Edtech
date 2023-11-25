import React from 'react';
import { Link } from 'react-router-dom';


const ctaButton = ({active,text,linkto}) => {
  return (
    <Link to={linkto}>
      <div className={`text-color text-[13px] rounded-md font-semibold px-6 py-3 ${active?` bg-yellow-50 text-richblack-800`: `bg-richblack-800 text-white`} ` }>
            {text}
      </div>
    </Link>
  )
}

export default ctaButton;
