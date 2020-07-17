import React, { useState, useEffect } from 'react';
import './App.css';

// import useOutsideClick from './component/useOutsideClick';
import useDebounce from './component/useDebounce';

function App() {

  // const myRef = useRef();
  // let outsideClicked = useOutsideClick(myRef);
  // console.log(outsideClicked);
  // return (
  //   <div style={{ height: "100vh", width: "100vw", textAlign: "center" }}>
  //     <div style={{ height: "30vh", width: "30vw", backgroundColor: "#eee", margin: "auto" }} ref={myRef}>
  //       <p>{outsideClicked ? "Clicked outside this div" : "Clicked on this div"}</p>
  //     </div>
  //   </div>
  // );
  const [state, setState] = useState(0);
  const [debounce, setDebounce] = useState(0);
  const debouncedValue = useDebounce(debounce, 3000);

  useEffect(() => {
    console.log(state, debounce);
  }, [debouncedValue]);

  return (
    <div style={{ height: "50vh", width: "50vw" }}>
      <button onClick={() => { setState(state + 1) }} >{state}</button>
      <button onClick={() => { setDebounce(debouncedValue + 1) }} >{debounce}</button>
    </div>
  );

}

export default App;
