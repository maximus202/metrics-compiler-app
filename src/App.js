import React, { Component } from 'react';
import Upload from './components/Upload/Upload';
import Report from './components/Report/Report';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>
            MetricsCompiler
      </h1>
        </header>
        <main>
          <Upload />
          <Report />
        </main>
      </>
    );
  };
}

export default App;
