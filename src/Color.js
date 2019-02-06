import React from 'react';
import StyledColor from './StyledColor';

const Color = (props) => {
  return(
    <StyledColor>
      <p>{ props.colorCode } </p>
      <p>roz</p>
      <p>pata de culoare</p>
      <p>buton de sters</p>
    </StyledColor>
  );
}

export default Color;
