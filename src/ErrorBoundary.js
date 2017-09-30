/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorWrapperStyled = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  animation: colorchange 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;

  @keyframes colorchange {
    0%   {background: white;}
    50%   {background: #daa357;}
    100%   {background: white;}
  }
`;

class ErrorBoundary extends Component {
  componentDidCatch(error, info) {
    this.props.onError(error, info);
  }

  render() {
    const { width, height, hasError } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorWrapperStyled width={width} height={height}>
          Something went wrong. Click please for detail.
        </ErrorWrapperStyled>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
