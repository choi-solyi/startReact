import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";
const isLogin = false;

function App() {
  return (
    // 매칭 알고리즘 /profile은 /도 포함이 되어있다.
    // exact 를 추가해주어 정확하게 / 일때만 Home 페이지가 노출되게 된다.
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route
          path="/login2"
          render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/login" component={Login} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
