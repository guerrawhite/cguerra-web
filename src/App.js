import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="imgMain" src={require('./assets/img/carlos.jpeg')}/>
        <p>
          <code>Carlos Guerra Blanco, Full Stack Developer</code>
          <code>Write me at cguerradev@gmail.com</code>
        </p>
      </header>
      <footer>
        <a target="_blank" href="https://es.linkedin.com/in/carlos-guerra-blanco"><img className="imgLinkedin" src={require('./assets/img/linkedin.png')}/></a>
      </footer>
    </div>
  );
}

export default App;
