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
