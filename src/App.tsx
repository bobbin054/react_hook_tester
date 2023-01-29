import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [child, setChild] = useState<JSX.Element | null>(null);
  const myButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log("App mounted");
    if (myButtonRef.current) {
      myButtonRef.current.textContent = child ? "Unmount" : "Mount";
    }
    return () => {
      console.log("App unmounted");
    };
  }, [child]);

  return (
    <>
      <button
        type="button"
        ref={myButtonRef}
        onClick={() => {
          !child ? setChild(<Child />) : setChild(null);
        }}
      ></button>
      {child ?? <Child />}
    </>
  );
}

function Child() {
  return <div>I'm a child</div>;
}

export default App;
