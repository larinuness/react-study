import "./App.css";
import Dog2 from "./assets/dog2.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avançando em Rect</h1>
      {/* Imagem em public */}
      <div>
        <img src="/dog1.jpg" alt="Cachorro 1" height="300" width="400" />
      </div>
      {/* Imagem em src/assets */}
      <div>
        <img src={Dog2} alt="Cachorro" height="300" width="400" />
      </div>
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
