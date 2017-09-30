/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from './components/Card';


const RootStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 700px;
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  margin: 0;
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  background-color: #d9003f;
  color: #ffffff;
  border-width: 0;
  border-color: transparent;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0px 0.75em;
  border-radius: 2px;
  transition-property: color,background-color,border,box-shadow;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  transition-delay: 0ms;
`;

class Root extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      error: true,
    });
  }

  render() {
    return (
      <RootStyled>
        <Card error={this.state.error} />
        <ButtonStyled onClick={this._handleClick}>
          CRASH
        </ButtonStyled>
        <Card />
      </RootStyled>
    );
  }
}

Root.displayName = 'Root';

export default Root;
