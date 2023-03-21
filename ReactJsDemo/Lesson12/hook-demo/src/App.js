import './App.css';

import ExampleEffect from './components/DemoUseEffect';
import Example from './components/DemoUseState';
import Example2 from './components/Demo_State_Effect';
import Example3 from './components/DemoContext';
import DemoUseRef from './components/DemoUseRef';
import DemoUseReducer from './components/DemoUseReducer';
import DemoUseCallback from './components/DemoUseCallback';
function App() {
  return (
    <div className="App">
        <h2>Sử dụng useState</h2>
        <Example />
        <div>
          <ExampleEffect />
        </div>
        <div>
          <Example2 />
        </div>
        <div>
          <Example3 /> 
        </div>
        <div>
          <DemoUseRef />
        </div>
        <div>
          <DemoUseReducer />
        </div>
        <div>
          <DemoUseCallback />
        </div>
    </div>
  );
}

export default App;
