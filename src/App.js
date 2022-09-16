import styles from './App.module.css';
import NavBar from './components/NavBar';
import SignUp from './webpage/auth/SignUp';
import SignIn from './webpage/auth/SignIn';
import HomePage from './webpage/homepage/HomePage';
import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Footer from './webpage/homepage/Footer';
import './api/axios';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
        <Switch>
          <Route exact path="/" render={() => <HomePage/>} />
          <Route exact path="/signup" render={() => <SignUp/>} />
          <Route exact path="/signin" render={() => <SignIn/>} />
        </Switch>
    </div>
 



  );
}

export default App;