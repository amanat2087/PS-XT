import React from 'react';
import './App.css';
import {store} from './Redux/store';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Provider store={store}><Dashboard/></Provider>
    </div>
  );
}

export default App;
