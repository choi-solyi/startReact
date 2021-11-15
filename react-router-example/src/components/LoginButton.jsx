import { withRouter, useHistory } from "react-router-dom";
// export default withRouter(function LoginButton(props) {
//   console.log("loginButton의 props:", props);
//   function login() {
//     setTimeout(() => {
//       console.log("로그인버튼 컴포넌트");
//       props.history.push("/");
//     }, 1000);
//   }
//   return <button onClick={login}>로그인하러가기~</button>;
// });
export default function LoginButton() {
  const history = useHistory();
  function login() {
    setTimeout(() => {
      console.log("로그인버튼 컴포넌트");
      history.push("/");
    }, 1000);
  }
  return <button onClick={login}>로그인하러가기~</button>;
}
