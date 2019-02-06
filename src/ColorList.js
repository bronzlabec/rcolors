import React from 'react';
import styled from 'styled-components';

import Color from './Color';
import ColorInput from './ColorInput';

const StyledList = styled.section`
  padding: 1rem 0;
`;

const ColorList = () => {
  return(
    <StyledList>
      { /* map colors */ }

      <ColorInput />
    </StyledList>
  );
}

export default ColorList;
