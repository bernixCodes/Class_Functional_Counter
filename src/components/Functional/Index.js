import style from "./index.module.css";
import { useState } from "react";

const FunctionalCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className={style.container}>
        <h2 className={style.header}>Functional Counter</h2>
        <div className={style.counter}>{counter}</div>
        <div className={style.btns}>
          <div
            className={style.increment}
            onClick={() => setCounter(counter + 1)}
          >
            +
          </div>
          <div
            className={style.decrement}
            onClick={() => setCounter(counter - 1)}
          >
            -
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalCounter;
