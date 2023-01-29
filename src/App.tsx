import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [child, setChild] = useState<JSX.Element | null>(null);
  const myButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = () => {
    setChild((child) => (child ? null : <Child hideChild={handleHideChild} />));
  };
  const handleHideChild = () => {
    setChild(null);
  };
  useEffect(() => {
    console.log("App mounted");
    if (myButtonRef.current) {
      myButtonRef.current.textContent = child ? "Delete child" : "Render child";
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
        onClick={handleButtonClick}
      ></button>
      <div>{child ? child : null}</div>
    </>
  );
}

function Child({ hideChild }: { hideChild: () => void }) {
  useEffect(() => {
    console.log("Child mounted");
    return () => {
      console.log("Child unmounted");
    };
  }, []);
  return (
    <>
      <div>I'm a child</div>
      <button type="button" onClick={hideChild}>
        Delete me
      </button>
    </>
  );
}

export default App;
