import "./App.css";
import ComponentOne from "./components/ComponentOne"; //normal import
import React, { Suspense, useState } from "react";
const ComponentTwo = React.lazy(() => import("./components/ComponentTwo")); // lazy loaded import

function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="App">
      <ComponentOne />
      {isShow && (
        <Suspense fallback={<h1>Loading....</h1>}>
          <ComponentTwo />
        </Suspense>
      )}

      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default App;
