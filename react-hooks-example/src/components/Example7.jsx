import { useState, useMemo, useCallback } from "react";
function sum(persons) {
  console.log("sum ...");

  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
}
export default function Example7() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    { name: "choi", age: 31 },
    { name: "kim", age: 27 },
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]); //persons 변경시에만..

  const click = useCallback(() => {
    console.log(value);
  }, []); // 최초에만 생성

  return (
    <div>
      <input value={value} onChange={change} />
      <p>hello~</p>
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
