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
        <main><Dictionary defaultKeyword="sunset"/></main>
        <footer className="App-footer text-center">Coded by Suzette Samm</footer>
      </div>
    </div>
  );
}

export default App;
