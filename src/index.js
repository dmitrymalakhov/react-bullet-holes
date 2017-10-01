/**
 * @author Dmitry Malakhov
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';
import { noop } from './utils';

const propTypes = {
  onError: PropTypes.func,
};

const defaultProps = {
  onError: noop,
};

class ErrorBoundaryWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

    this._domNode = null;
    this._boundingClientRect = {};

    this._handleError = this._handleError.bind(this);
    this._saveRef = this._saveRef.bind(this);
  }

  componentDidMount() {
    this._updateClientRect();
  }

  componentWillReceiveProps() {
    this._updateClientRect();
  }

  _updateClientRect() {
    if (this._domNode)
      this._boundingClientRect = this._domNode.getBoundingClientRect();
  }

  _handleError(error, { componentStack }) {
    this.setState({
      hasError: true,
    });

    this.props.onError(error, { componentStack });
  }

  _saveRef(ref) {
    this._domNode = ref;
  }

  render() {
    return (
      <ErrorBoundary
        width={this._boundingClientRect.width}
        height={this._boundingClientRect.height}
        onError={this._handleError}
        hasError={this.state.hasError}
      >
        <div ref={this._saveRef}>
          { this.props.children }
        </div>
      </ErrorBoundary>
    );
  }
}

ErrorBoundaryWrapper.propTypes = propTypes;
ErrorBoundaryWrapper.defaultProps = defaultProps;
ErrorBoundaryWrapper.displayName = 'ErrorBoundaryWrapper';

export default ErrorBoundaryWrapper;
