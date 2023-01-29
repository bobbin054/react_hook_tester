import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [child, setChild] = useState<JSX.Element | null>(null);
  const myButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log("App mounted");
    if (myButtonRef.current) {
      myButtonRef.current.textContent = child ? "Delete child" : "Render child";
    }
    return () => {
      console.log("App unmounted");
    };
  }, [child]);

  const hideChild = () => {
    setChild(null);
  };

  return (
    <>
      <button
        type="button"
        ref={myButtonRef}
        onClick={() => {
          !child ? setChild(<Child hideChild={hideChild} />) : setChild(null);
        }}
      ></button>
      {child ? <Child hideChild={hideChild} /> : null}
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
