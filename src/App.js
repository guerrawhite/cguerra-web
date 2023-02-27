import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img alt="foto del perfil de carlos" className="imgMain" src={require('./assets/img/carlos.jpeg')}/>
      <h1>Carlos Guerra Blanco, Full Stack Developer</h1>
      </header>
      <section className="myJobs">
        <code>
          <h2>Mis trabajos:</h2>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://ticjob.es/">ticjob.es</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://thisisaluche.com/">thisisaluche.com</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://buffalobaraluche.es/">buffalobaraluche.es</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://barelbarrioaluche.es/">barelbarrioaluche.es</a></li>
          </ul>
        </code>
      </section>
      <footer>
        <p>¡Escríbeme a <a href="mailto:cguerradev@gmail.com">cguerradev@gmail.com</a>!</p>
        <a target="_blank" rel="noreferrer" href="https://es.linkedin.com/in/carlos-guerra-blanco"><img alt="logo linkedin" className="imgLinkedin" src={require('./assets/img/linkedin.png')}/></a>
      </footer>
    </div>
  );
}

export default App;
