import React from 'react';
import Upload from './components/Upload/Upload';
import Report from './components/Report/Report';

function App() {
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
}

export default App;
