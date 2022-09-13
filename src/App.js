import styles from './App.module.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className={styles.App}>
    <NavBar/>

    <h1> hello world</h1>
    </div>
  );
}

export default App;