
import styles from './App.module.css';
import Component from './MyComponent';
import Counter from './Counter';
import Counter2 from './Counter2';
import Login from './login';

function App() {
  return (
    < >
    <div class={styles.App}>Dobar dan, svijete!</div>
    <div>Test</div>
    <Component/>
    <Counter/>
    <Counter2/>
    <Login/>
    </>
  );
}

export default App;
