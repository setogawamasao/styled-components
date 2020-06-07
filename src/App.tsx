import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Button>hello styled-component!</Button>
    </>
  );
};

const Button = styled.div`
  color: red;
`;

export default App;
