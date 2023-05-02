import React from 'react';

const Cloud = ({propRef, ...rest}) => (
  <div ref={propRef} style={ style(rest).wrapper }>
    <svg id="Layer_1" viewBox="0 0 165.72 60.06" data-name="Layer 1">
      <circle cx="67.36" cy="29.03" fill="#fff" r="29.03" transform="translate(32.83 93.75) rotate(-85.23)"/>
      <ellipse cx="101.09" cy="41.1" fill="#fff" rx="18.8" ry="16.96"/>
      <path d="M153.69,60.06L0,59.82 A 379.89,379.89,0,0,1,91.08,48.53 C 183.33,48.53,170.77,59.61,153.69,60.06Z" fill="#fff"/>
      <path d="M81.2,51.57c-10.13,7.75-25.32,4.91-33.94-6.35S39.88,18.56,50,10.81A35.28,35.28,0,0,0,81.2,51.57Z" fill="#e9f6f8"/>
      <path d="M109.92,53.34c-6.1,4.67-15.12,3.13-20.14-3.43s-4.15-15.67,2-20.34A20.13,20.13,0,0,0,109.92,53.34Z" fill="#e9f6f8"/>
    </svg>
  </div>
);

function style(props) {
  return {
    wrapper: {
      position: "absolute",
      ...props.styleWrapper,
    }
  }
}

export default Cloud;
