import React from 'react';
import { useState } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { IoHeartSharp } from 'react-icons/io5';

const HeartButton = () => {
  const [isHeartChecked, setIsHeartChecked] = useState(true);

  const hendleHeartEvent = () => {
    setIsHeartChecked(!isHeartChecked);
  };

  // <img onClick={()=>{setState(!state)}} src={state값이 true  ? 찬하트 : 빈하트}/>>
  return (
    <div className="heartList">
      {isHeartChecked ? (
        <IoHeartOutline
          style={{ fontSize: '30px' }}
          onClick={hendleHeartEvent}
        />
      ) : (
        <IoHeartSharp
          style={{ color: 'red', fontSize: '30px' }}
          onClick={hendleHeartEvent}
        />
      )}
    </div>
  );
};
export default HeartButton;
