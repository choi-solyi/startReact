import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    // 매칭 알고리즘 /profile은 /도 포함이 되어있다.
    // exact 를 추가해주어 정확하게 / 일때만 Home 페이지가 노출되게 된다.
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
