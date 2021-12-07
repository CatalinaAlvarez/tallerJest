import logo from './logo.svg';
import './App.css';
import * as math from './components/math.js';

function App() {
  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);
