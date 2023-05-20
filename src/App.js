import { MyProvider } from './ContextCounter';
import './App.css';
import {Counter} from "./Counter"


function App() {
  return (
    <div className="App">
      <MyProvider>
        <Counter/>
      </MyProvider>
    </div>
  );
}

export default App;
