import logo from "./logo.svg";
import "./App.css";
import StyledButton from "./components/StyleButton";
import styled, { createGlobalStyle } from "styled-components";
import StyledA from "./components/StyledA";

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;
const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 10px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: ${(props) => props.color || "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 30px;
  :hover {
    border: 2px solid red;
  }
  ::before {
    content: "@";
  }
`;

const GlobalStyle = createGlobalStyle`
button {
  color: yellow !important;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>BUTTON 1 </StyledButton>
          <StyledButton primary>BUTTON 2</StyledButton>
          <PrimaryStyledButton primary>botton 3</PrimaryStyledButton>
          <StyledButton as={UppercaseButton}>botton 4</StyledButton>
          <StyledMyButton color="green">button 5</StyledMyButton>

          <StyledA href="https://google.com">태그</StyledA>
        </p>
      </header> 
    </div>
  );
}

export default App;
