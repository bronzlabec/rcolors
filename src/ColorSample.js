import styled from 'styled-components';

const ColorSample = styled.div`
  height: 3rem;
  flex-grow: 1;
  max-width: 600px;
  background: ${props => props.color};
`;

export default ColorSample;
