
import './App.css';
import {Cube} from './Componenets/Cube';
import { Line } from './Componenets/Line';
import {Demo} from './Componenets/Demo';
function App() {
  return (
    <div className="App">
      {/* <canvas ><Cube/></canvas>
      <canvas><Line/></canvas> */}
      <canvas id="bg"><Demo/></canvas>
    </div>
  );
}

export default App;
