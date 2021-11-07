import React from "react";
export default function Example5() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("componentDidMount", count);
    return () => {
      //cleanup
      //componentWillUnmount
    }
  }, []);
  // [] 빈배열 : 최초에만 실행된다.

  React.useEffect(() => {
    console.log("componentDidMount and componentDidupdate by count", count);
    return () => {
      //cleanup
      console.log('cleanup by count', count);
      
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count}times.</p>
      <button onClick={click}>click me!</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
