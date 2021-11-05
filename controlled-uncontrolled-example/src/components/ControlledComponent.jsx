import React from "react";
// 상태를 컴포넌트가 관리

class ControlledComponent extends React.Component {
  state = {
    value: "",
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <input value={value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
  change = (event) => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };
  click = () => {
    console.log(this.state.value);
  };
}

export default ControlledComponent;
