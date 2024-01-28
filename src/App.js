import logo from './logo.svg';
import './App.css';
import ClassBasedComponents from './Components/ClassBasedComponents';
import FunctionalBasedComponents from './Components/FunctionalBasedComponents';

function App() {
  return (
    <div className="App">
      Heelo App
      <ClassBasedComponents/>
      <FunctionalBasedComponents/>
    </div>
  );
}

export default App;
