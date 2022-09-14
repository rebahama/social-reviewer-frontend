import styles from './App.module.css';
import NavBar from './components/NavBar';
import HomePage from './webpage/homepage/HomePage';
import { Route, Switch } from "react-router-dom";



function App() {
  return (
    <div className={styles.App}>
    <NavBar/>
    
    <Switch>

      <Route exact path="/" render={()=> <HomePage/>}/>
      <Route exact path="/signup" render={()=> <h1> Sign up page</h1>}/>
    </Switch>
    </div>
  );
}

export default App;