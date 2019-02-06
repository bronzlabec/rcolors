import styled from 'styled-components';

const StyledColor = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 3rem;
  padding: 0 3rem;
  input {
    margin: 0 3rem;
    padding: 5px 10px;
  }
  button {
    margin: 0 3rem;
    border: 1px solid red;
    background: none;
    padding: 10px 20px;
    border-radius: 5px;
    :hover {
      background: pink;
  }
  }
`;

export default StyledColor;
