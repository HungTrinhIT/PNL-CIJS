import React, { useEffect, useState } from "react";
const DARK_MODE = "DARK";
const LIGHT_MODE = "LIGHT";

const Count = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("intervals of count runs b...");
    }, 1000);


    // Component will unmount
    return () => {
      console.log("Unmounting...")
      clearInterval(timer);
    };
  }, []);
  return <span>{props.value}</span>;
};

export const DemoHooks = () => {
  const [count, setCount] = useState(() => {
    console.log("Constructor...");
    return 0;
  });

  const [theme, setTheme] = useState(LIGHT_MODE);
  const [isShowCount, setShowCount] = useState(true);

  const handleCount = (value) => {
    setCount(count + value);
  };

  const onSwitchTheme = () => {
    theme === LIGHT_MODE ? setTheme(DARK_MODE) : setTheme(LIGHT_MODE);
  };
  const onDeleteCount = () => setShowCount(false);

  // Component did mount in Functional Component
  // useEffect(() => {
  //   console.log("Effect runs...");
  // }, []);

  // Component did update
  // useEffect(() => {
  //   if (count >= 5) {
  //     theme === LIGHT_MODE ? setTheme(DARK_MODE) : setTheme(LIGHT_MODE);
  //   }
  // }, [count]);

  useEffect(() => {}, []);

  // console.log("Render");
  return (
    <div>
      <button onClick={() => handleCount(-1)}>-</button>
      {isShowCount && <Count value={count} />}
      <button onClick={() => handleCount(+1)}>+</button>
      <button onClick={onDeleteCount}>Delete</button>

      <div>
        <button onClick={onSwitchTheme}>
          {theme === LIGHT_MODE ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};
