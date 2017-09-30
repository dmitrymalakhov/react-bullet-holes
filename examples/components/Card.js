/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  image: PropTypes.string,
  error: PropTypes.bool,
};

const defaultProps = {
  image: '',
  error: false,
};

const CardStyled = styled.div`
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  align-items: stretch;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1),
    0px 0px 0px 0px rgba(0,0,0,0.1), 0px 0.5px 1px 0.25px rgba(0,0,0,0.1);
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
        <CardImgStyled src={this.props.image} />
      </CardStyled>
    );
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.displayName = 'Card';

export default Card;
