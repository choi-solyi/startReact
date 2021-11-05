import React from "react";

class UncontrolledComponent extends React.Component {
  inputRef = React.createRef();

  render() {
    console.log("initial render: ", this.inputRef);

    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.click}>클릭</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount, ", this.inputRef);
  }
  click = () => {
    // 인풋 엘리먼트의 현재 상태 값 을 꺼내서 전송한다.
    // const inputTag = document.querySelector("#my-input");
    // console.log(inputTag.value);

    //2

    console.log(this.inputRef.current.value);
  };
}

export default UncontrolledComponent;
