import { useState, useEffect } from 'react';

function useOutsideClick(myRef) {

  const [clickedOutside, setClickedOutside] = useState(false);

  const handleClickOutside = event => {
    if (myRef.current && !myRef.current.contains(event.target)) {
      setClickedOutside(true);
    }
    else {
      setClickedOutside(false);
    }

  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return clickedOutside;
}

export default useOutsideClick; 