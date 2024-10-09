import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: #f7f7a0;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  background-color: #721242;
  border-radius: 7px;
  color: white;
  /* cursor: pointer; */
  margin: 20px;
`;

const Input = styled.input`
  font-size: 16px;
  /* background-color: #fdf; */
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
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
