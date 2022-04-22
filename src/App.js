import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { history } from './util/setting'

function App() {
  return (
    <Router history={history}>
      <Switch>
        
      </Switch>
    </Router>
  );
}

export default App;
