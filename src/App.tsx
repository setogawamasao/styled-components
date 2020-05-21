import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <h1>HELLO REACT + TYPESCRIPT WORLD</h1>
      <Red>test</Red>
    </>
  );
};

const Red = styled.button`
  color: red;
`;

export default App;
