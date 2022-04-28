import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './page/Home/Home';
import Contact from './page/Contact/Contact';
import News from './page/News/News';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Detail from './page/Detail/Detail';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <Route path="/login" component={Login} />
        <Route path="/register" exact component={Register} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
      </Switch>

    </Router>
  );
}

export default App;
