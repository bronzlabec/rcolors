import React, { Component } from 'react';
import styled from 'styled-components';

import Color from './Color';
import ColorInput from './ColorInput';

const StyledList = styled.section`
  padding: 1rem 0;
`;

const getKey = (() => {
  let key = 0;
  return () => (key++).toString();
})();

class ColorList extends Component {
  constructor(props) {
    super(props);
    this.state = { colors: [] };

    this.onColorAdd = this.onColorAdd.bind(this);
  }

  onColorAdd(color, name) {
    const newColor = { color, name, key: getKey() };
    //
    // aici e gresit!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // state nu trebuie updatat asa
    //
    const colors = [...this.state.colors, newColor];
    console.log(colors);
    this.setState({ colors: colors });
  }

  render() {
    return(
      <StyledList>
        { this.state.colors.map(color => <Color
          color={color.color}
          name={color.name}
          key={color.key}
        />) }
        <ColorInput onAdd={this.onColorAdd} />
      </StyledList>
    );
  }
}

export default ColorList;
