import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const redTitle = false;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "white", padding: "20px" }}>
        Alterando de forma inline o CSS
      </p>
      {/* Classe dinâmica */}
      <h2 className={redTitle ?"red-title" : "title"}>Esse título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
    </div>
  );
}

export default App;
