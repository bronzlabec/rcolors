import React from 'react';
import styled from 'styled-components';

const StyledColor = styled.div`
  background: magenta;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 3rem;
`;

const Color = () => {
  return(
    <StyledColor>
      <p>#FF66AB</p>
      <p>roz</p>
      <p>pata de culoare</p>
      <p>buton de sters</p>
    </StyledColor>
  );
}

export default Color;
