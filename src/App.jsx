import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: #f7f7a0;
`;

const StyledApp = styled.div`
  background-color: #1b0d27;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello world</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check in")}>Check out</Button>
        <Input type="date" placeholder="Number of guests"></Input>
      </StyledApp>
    </>
  );
}

export default App;
