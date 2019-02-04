import React from 'react';
import styled from 'styled-components';

import Color from './Color';

const StyledList = styled.section`
  padding: 1rem 0;
`;

const ColorList = () => {
  return(
    <StyledList>
      <Color>
        Culoare locala.
      </Color>
      <Color>
        Culoare locala.
      </Color>
    </StyledList>
  );
}

export default ColorList;
