import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="left-content">
              <h1 className="mb-5">Dictionary App</h1>
              <h2 className="mb-5 text-center">
                <q>Raise your words... not your voice...</q> - Rumi
              </h2>
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
          </div>
          <div className="col-6 mt-4">
            <main>
              <Dictionary defaultKeyword="sunset" />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
