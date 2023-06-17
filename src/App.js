import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="cristalh-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Cristal
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/codingcalypso/react-dictionaryapp-shecodesredesign"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
