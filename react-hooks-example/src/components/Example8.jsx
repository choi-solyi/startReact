import { createRef, useRef, useState } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  // 1. Controlled
  // 2. Uncontrolled-createRef
  //  항상 레퍼런스를 생성해서 렌더 될때 넣어준다.
  // 3. Uncontrolled-useRef
  //  렌더 사이에도 유지해준다. 
  //  최초 렌더시 undefined로 출력 되고, 이후에는 <input> 태그 출력

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );
  function change(e) {
    setValue(e.target.value);
  }
}
