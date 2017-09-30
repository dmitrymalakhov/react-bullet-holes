/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withErrorWrapper from '../../src';

const propTypes = {
  error: PropTypes.bool,
};

const defaultProps = {
  error: false,
};

const CardStyled = styled.div`
  height: 525px;
  width: 600px;
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  align-items: stretch;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0px 0px 0px 0px rgba(0,0,0,0.1), 0px 0.5px 1px 0.25px rgba(0,0,0,0.1);
`;

const CardImgStyled = styled.img`
  max-width: 100%;
  width: 100%;
`;

/* eslint-disable max-len */
class Card extends PureComponent {
  render() {
    if (this.props.error)
      throw new Error('I crashed!');

    return (
      <CardStyled>
        <CardImgStyled src="https://coubsecure-s.akamaihd.net/get/b16/p/coub/simple/cw_timeline_pic/61e4a31314a/4beebc6fcb2a882eae698/ios_large_1411418346_1398164437_image.jpg" />
      </CardStyled>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.displayName = 'Card';

export default withErrorWrapper(Card);
