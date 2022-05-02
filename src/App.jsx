import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer text-center">
          This project was created by{" "}
          <a href="https://www.suzettesamm.io" target="_blank" rel="noreferrer">
            Suzette Samm
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SuzetteSa/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          and{" "}
          <a
            href="https://fluffy-fenglisu-ce59bf.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
