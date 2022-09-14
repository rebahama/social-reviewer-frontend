import styles from './App.module.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar';
import HomePage from './webpage/homepage/HomePage';


function App() {
  return (
    <div className={styles.App}>
    <NavBar/>
    <HomePage/>
    </div>
  );
}

export default App;