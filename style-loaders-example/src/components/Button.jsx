import React from "react";
import styles from "./Button.module.css";
// import classNames from "classnames";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
console.log(cx("button", "loading"));

class Button extends React.Component {
  state = {
    loading: false,
  };
  render() {
    // // foo bar
    // console.log(classNames("foo", "bar"));
    // // foo bar baz
    // console.log(classNames("foo", "bar", "baz"));
    // // foo
    // console.log(classNames({ foo: true }, { bar: false }));
    // // bar 1   >> falsy값은 사라진다
    // console.log(
    //   classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
    // );
    // console.log(classNames(styles.button, styles.loading));
    const { loading } = this.state;
    return (
      <button
        onClick={this.startLoading}
        className={cx("button", { loading: loading })}
        {...this.props}
      />
    );
  }
  startLoading = () => {
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };
}

export default Button;
