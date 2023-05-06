import React, { useState } from "react";
// -------Array------
// let Array=["Nasifa","Sourov","Swarna","Pappu"];
// let [user1,user2,user3,user4]=Array

// --------state managment usestate hook-------

const Test = () => {
  let [count, setCount] = useState(1);

  let counterIncrease = () => {
     setCount(++count)
  };
  let counterDecrease = () => {
    setCount(--count)
 };

  
  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={counterIncrease}>Increase</button>
     <button onClick={counterDecrease}>Decrease</button>
    </>
  );
};
export default Test;
