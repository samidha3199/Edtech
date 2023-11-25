import React from 'react';


const HighlightText = ({text,color}) => {
  return (
    <div>
      <span className={`text-bold ${color}`}>{text}</span>
    </div>
  )
}

export default HighlightText
