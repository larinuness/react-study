import "./App.css";
import Dog2 from "./assets/dog2.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

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
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Larissa"/>
      {/* destructuring */}
      <CarDetails name="Ferrari" color="Red" brand="Ferrari"/>
      <CarDetails name="Volvo" color="Preto" brand="Volvo"/>
      <CarDetails name="X6" color="White" brand="BMW"/>
    </div>
  );
}

export default App;
