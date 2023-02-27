import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img alt="foto del perfil de carlos" className="imgMain" src={require('./assets/img/carlos.jpeg')}/>
      <h1>Carlos Guerra Blanco</h1>
      <h2>Full Stack Developer</h2>
      </header>
      <section className="myJobs">
        <span className="circleApple red"></span>
        <span className="circleApple yellow"></span>
        <span className="circleApple green"></span>
        <code>
          <h3>main@projects:~$</h3>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://ticjob.es/">ticjob.es</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://thisisaluche.com/">thisisaluche.com</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://buffalobaraluche.es/">buffalobaraluche.es</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://barelbarrioaluche.es/">barelbarrioaluche.es</a></li>
          </ul>
        </code>
      </section>
      <section className="myTechs">
        <h3>Skills</h3>
        <ul>
          <li className="color-one"><a href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)">java</a></li>
          <li className="color-two"><a href="https://es.wikipedia.org/wiki/HTML5">HTML5</a></li>
          <li className="color-one"><a href="https://es.wikipedia.org/wiki/JavaScript">javascript</a></li>
          <li className="color-three"><a href="https://es.wikipedia.org/wiki/Bash">bash</a></li>
          <li className="color-one"><a href="https://es.wikipedia.org/wiki/JavaServer_Pages">JSP</a></li>
          <li className="color-two"><a href="https://es.wikipedia.org/wiki/CSS">CSS3</a></li>
          <li className="color-three"><a href="https://es.wikipedia.org/wiki/GNU/Linux">linux</a></li>
          <li className="color-two"><a href="https://es.wikipedia.org/wiki/Bootstrap_(framework)">bootstrap</a></li>
          <li className="color-two"><a href="https://es.wikipedia.org/wiki/JQuery">jquery</a></li>
        </ul>
      </section>
      <footer>
        <p>¡Escríbeme a <a href="mailto:cguerradev@gmail.com"><strong>cguerradev@gmail.com</strong></a>!</p>
        <a target="_blank" rel="noreferrer" href="https://es.linkedin.com/in/carlos-guerra-blanco"><img alt="logo linkedin" className="imgLinkedin" src={require('./assets/img/linkedin.png')}/></a>
      </footer>
    </div>
  );
}

export default App;
