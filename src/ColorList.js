import React from 'react';
import styled from 'styled-components';

import Color from './Color';

const StyledList = styled.section`
  padding: 1rem 0;
`;

const ColorList = () => {
  return(
    <StyledList>
      <Color
        colorCode="#ffffff"
        colorName="alb"
      >
      </Color>
      <Color
        colorCode="#fafeaf"
      >
      </Color>
    </StyledList>
  );
}

export default ColorList;
