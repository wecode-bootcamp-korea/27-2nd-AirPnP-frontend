import { useState } from 'react';

function useAddressSelect(adjustHostInfo) {
  const [isPopup, setIsPopup] = useState(false);

  const changeLocalDescription = e => {
    adjustHostInfo('local_description', e.target.value);
  };

  const closePopup = () => {
    setIsPopup(false);
  };

  return { isPopup, setIsPopup, changeLocalDescription, closePopup };
}

export default useAddressSelect;
