import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { TrademarkCircleOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const colStyle = () => ({
  height: "50px",
  backgroundColor: "red",
  opacity: Math.round(Math.random() * 10) / 10,
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TrademarkCircleOutlined />
        </p>
        <Calendar />
      </header>
      <div>
        <Row>
          <Col span={12} style={colStyle()} />
          <Col span={12} style={colStyle()} />
        </Row>
        <Row>
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
        </Row>
        <Row>
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
        </Row>
      </div>
      <hr />
      <div>
        <Row gutter={16}>
          <Col span={12} style={colStyle()} />
          <Col span={12} />
        </Row>
        <Row gutter={16}>
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
        </Row>
        <Row gutter={16}>
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
        </Row>
      </div>
    </div>
  );
}

export default App;
