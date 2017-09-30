/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BackdropStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 8px;
  z-index: 1;
  background-color: rgba(0,0,0,0.5);
`;

const OverlayStyled = styled.div`
  overflow: auto;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: stretch;
  max-height: 100vh;
  padding: 8px;
  z-index: 2;
  min-width: 180px;
  max-width: 640px;
`;

const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  display: flex;
  overflow: hidden;
  will-change: transform,opacity;
  display: flex;
  z-index: 8501;
  transition-property: opacity,transform;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  transition-delay: 0ms;
`;

const ContentStyled = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: 100%;
  z-index: 8500;
  background-color: #ffffff;
  max-height: calc(100vh - 8px * 2);
  border-radius: 2px;
  animation: esUIVk 300ms ease-in;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0px 4.5px 9px 0.75px rgba(0,0,0,0.1), 0px 5px 10px 1px rgba(0,0,0,0.1);
}
`;

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');

    this._handleClickClose = this._handleClickClose.bind(this);
    this._handleClickContent = this._handleClickContent.bind(this);
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  _handleClickContent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  _handleClickClose(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.onClose();
  }

  _renderContent() {
    if (!this.props.visible)
      return null;

    return (
      <ModalStyled onClick={this._handleClickClose}>
        <BackdropStyled />
        <OverlayStyled>
          <ContentStyled onClick={this._handleClickContent}>
            {this.props.children}
          </ContentStyled>
        </OverlayStyled>
      </ModalStyled>
    );
  }

  render() {
    const content = this._renderContent();
    return ReactDOM.createPortal(content, this.el);
  }
}

export default Modal;
