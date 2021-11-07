import React from "react";

// 이전 useState => count
// 이번 파일 useState => { count: 0 }
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You clicked {state.count}times.</p>
      <button onClick={click}>click me!</button>
    </div>
  );
  function click() {
    // setState({ count: state.count + 1 });
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}
