import React, { useEffect, useRef } from "react";

const Domtest = () => {
  const ref = useRef(null);
  useEffect(() => {
    const text = document.getElementById("text");
    // console.log(text);

    // ref initilization
    const text1 = ref.current;
    // console.log(ref.current);
    console.log(text1);
    // ref.current is for accessing element and one last thing we need pass ref hook to our element

    // instead os using vanila dom method simply we can use useRef method in react
  }, []);
  return (
    <div>
      <span className="text" id="text" ref={ref}>
        Hello Hustle
      </span>
    </div>
  );
};

export default Domtest;
