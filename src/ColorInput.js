import React from 'react';

import StyledColor from './StyledColor';
import ColorSample from './ColorSample';

const ColorInput = () => {
  return(
    <StyledColor>
    <input type="color" id="color-code" value="#ffffff" size="14" />
    <input type="text" id="color-name" size="20" placeholder="Nume" />
    <ColorSample />
    <button type="button">Pune in lista</button>
    </StyledColor>
  );
}

export default ColorInput;
