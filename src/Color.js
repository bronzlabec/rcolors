import React from 'react';
import styled from 'styled-components';

import ColorCode from './ColorCode';

const StyledColor = styled.div`
  background: magenta;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 3rem;
`;

const Color = (props) => {
  return(
    <StyledColor>
      <ColorCode>{ props.colorCode } </ColorCode>
      <p>roz</p>
      <p>pata de culoare</p>
      <p>buton de sters</p>
    </StyledColor>
  );
}

export default Color;
