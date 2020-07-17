import React, { useRef } from 'react';
import './App.css';

import useOutsideClick from './component/useOutsideClick';

function App() {

  const myRef = useRef();
  let outsideClicked = useOutsideClick(myRef);
  console.log(outsideClicked);
  return (
    <div style={{ height: "100vh", width: "100vw", textAlign: "center" }}>
      <div style={{ height: "30vh", width: "30vw", backgroundColor: "#eee", margin: "auto" }} ref={myRef}>
        <p>{outsideClicked ? "Clicked outside this div" : "Clicked on this div"}</p>
      </div>
    </div>
  );
}

export default App;
