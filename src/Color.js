import React from 'react';

import StyledColor from './StyledColor';
import ColorSample from './ColorSample';

const Color = (props) => {
  return(
    <StyledColor>
      <p>{ props.color } </p>
      <p>{ props.name } </p>
      <ColorSample color={ props.color }/>
      <p>buton de sters</p>
    </StyledColor>
  );
}

export default Color;
