# react-bullet-holes

Show errors of React components where they occurred.

![react-bullet-holes](docs/demo.gif)

### Install

```bash
yarn add -D react-bullet-holes
```

or

```bash
npm install --save-dev react-bullet-holes
```

### Usage

```javascript
import React from 'react';
import ErrorBoundary from 'react-bullet-holes';

/../

render() {
  return (
    <div>
      <ErrorBoundary>
        <Card />
      </ErrorBoundary>
    </div>
  );
}

```

## Documentation - props

#### onError: func(error: { message: string, stack: string }, info: { componentStack: string })

This callback is called when throwing error in wrapped component.
