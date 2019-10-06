import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
