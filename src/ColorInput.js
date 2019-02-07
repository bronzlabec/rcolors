import React, { Component } from 'react';

import StyledColor from './StyledColor';
import ColorSample from './ColorSample';

class ColorInput extends Component {
  constructor(props) {
    super(props);
    this.state = { newColor: '#ffffff', newName: '' };

    this.onColorChange = this.onColorChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onHandleAdd = this.onHandleAdd.bind(this);
  }

  onColorChange(event) {
    this.setState({newColor: event.target.value});
  }

  onNameChange(event) {
    this.setState({newName: event.target.value});
  }

  onHandleAdd() {
    if (this.state.newName) {
      this.props.onAdd(
        this.state.newColor,
        this.state.newName
      );
      this.setState({
        newColor: "#ffffff",
        newName: ""
      });
    }
  }

  render() {
    return(
      <StyledColor>
        <input
          type="color"
          id="color-code"
          value={this.state.newColor}
          onChange={this.onColorChange}
        />

        <input type="text"
          id="color-name"
          size="20"
          placeholder="Nume"
          value={this.state.newName}
          onChange={this.onNameChange}
        />

        <ColorSample color={this.state.newColor} />
        <button type="button" onClick={ this.onHandleAdd }>Pune in lista</button>
      </StyledColor>
    );
  }
}

export default ColorInput;
