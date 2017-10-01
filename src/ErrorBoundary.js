/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from './Modal';
import { noop } from './utils';

const ErrorWrapperStyled = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  animation: colorchange 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  cursor: pointer;

  @keyframes colorchange {
    0%   {background: white;}
    50%   {background: #daa357;}
    100%   {background: white;}
  }
`;

const ErrorMessageStyled = styled.div`
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  color: #212121;
  font-weight: 600;
`;

const ErrorContentStyled = styled.div`
  flex-grow: 1;
  position: relative;
  font-size: 18px;
  line-height: 1.5;
  color: #212121;
  font-weight: 400;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const TraceListStyled = styled.ul`
  color: #d9003f;
  list-style: none;
`;

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  hasError: PropTypes.bool,
  onError: PropTypes.func,
};

const defaultProps = {
  width: 0,
  height: 0,
  hasError: false,
  onError: noop,
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      error: '',
      componentStack: '',
    };

    this._handleOpenModal = this._handleOpenModal.bind(this);
    this._handleCloseModal = this._handleCloseModal.bind(this);
  }

  componentDidCatch(error, { componentStack }) {
    this.setState({
      error,
      componentStack,
    });

    this.props.onError(error, { componentStack });
  }

  _handleOpenModal() {
    this.setState({
      visible: true,
    });
  }

  _handleCloseModal() {
    this.setState({
      visible: false,
    });
  }

  _renderModal() {
    const content = (
      <ErrorContentStyled>
        <ErrorMessageStyled>
          {this.state.error.message.toString()}
        </ErrorMessageStyled>
        <div>
          <h3>Trace:</h3>
          <TraceListStyled>
            {
              this.state.componentStack
                .split(/(?: \r\n|\r|\n)/g)
                .filter(item => item !== '')
                .map((item, idx) => <li key={idx}>{item}</li>)
            }
          </TraceListStyled>
        </div>
      </ErrorContentStyled>
    );

    return (
      <Modal visible={this.state.visible} onClose={this._handleCloseModal}>
        {content}
      </Modal>
    );
  }

  render() {
    const { width, height, hasError } = this.props;

    if (hasError) {
      const modal = this._renderModal();

      return (
        <ErrorWrapperStyled
          width={width}
          height={height}
          onClick={this._handleOpenModal}
        >
          Something went wrong. Click please for detail.
          {modal}
        </ErrorWrapperStyled>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.defaultProps = defaultProps;
ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
