import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [buttonState, setButtonState] = useState<boolean>(true);
  return (
    <>
      <Button
        state={buttonState}
        onClick={(): void => {
          setButtonState(!buttonState);
        }}
      >
        hello styled-component!
      </Button>
    </>
  );
};

const Button = styled.div<{ state: boolean }>`
  width: 200px;
  color: ${(props) => (props.state ? "white" : "")};
  background: ${(props) => (props.state ? "red" : "")};
`;

export default App;
