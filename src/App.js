import {TodoWrapper} from './Component/TodoWrapper'
import './App.css';
import { Component } from 'react';

class App extends Component {
  render()
  {
  return (
    <div className="App">
    <TodoWrapper/>
    </div>
  );
  }
}

export default App;
