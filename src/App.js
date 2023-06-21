import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="left-content">
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
      </div>
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
    </div>
  );
}
