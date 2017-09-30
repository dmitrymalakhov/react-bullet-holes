/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../src';
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

const ButtonBoxStyled = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

class Root extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      errorLeft: false,
      errorRight: false,
    };

    this._handleClickLeft = this._handleClickLeft.bind(this);
    this._handleClickRight = this._handleClickRight.bind(this);
  }

  _handleClickLeft() {
    this.setState({
      errorLeft: true,
    });
  }

  _handleClickRight() {
    this.setState({
      errorRight: true,
    });
  }

  render() {
    return (
      <RootStyled>
        <ColumnStyled>
          <ErrorBoundary>
            <Card image="https://goo.gl/mBixRw" error={this.state.errorLeft} />
          </ErrorBoundary>
          <ButtonBoxStyled>
            <ButtonStyled onClick={this._handleClickLeft}>
              CRASH
            </ButtonStyled>
          </ButtonBoxStyled>
        </ColumnStyled>
        <ColumnStyled>
          <ErrorBoundary>
            <Card image="https://goo.gl/y6eS4V" error={this.state.errorRight} />
          </ErrorBoundary>
          <ButtonBoxStyled>
            <ButtonStyled onClick={this._handleClickRight}>
              CRASH
            </ButtonStyled>
          </ButtonBoxStyled>
        </ColumnStyled>
      </RootStyled>
    );
  }
}

Root.displayName = 'Root';

export default Root;
