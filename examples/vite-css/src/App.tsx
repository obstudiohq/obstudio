import * as React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import obstudioLogo from './assets/obstudio.svg';
import { Switch } from './widgets/Switch';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://obstudio.co" target="_blank">
          <img src={obstudioLogo} className="logo obstudio" alt="Obstudio logo" />
        </a>
      </div>
      <h1>Vite + React + Obstudio</h1>
      <div className="card">
        <Switch onCheckedChange={() => setCount((c) => c + 1)} />
        <p>
          Flicked the Switch {count} time{count !== 1 ? 's' : ''}.
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite, React, and Obstudio logos to learn more.</p>
    </React.Fragment>
  );
}

export default App;
