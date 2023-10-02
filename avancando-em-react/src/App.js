import "./App.css";
import { Container } from "./components/Container";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import Dog2 from "./assets/dog2.jpg";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import { ExecuteFunction } from "./components/ExecuteFunction";
import { Message } from "./components/Message";
import { ChangeMessageState } from "./components/ChangeMessageState";
import { UserDetails } from "./components/UserDetails";

function App() {
  const name = "Thiago";
  const [userName] = useState("Jolie");

  const cars = [
    {
      id: 1,
      brand: "Fiat",
      color: "Purple",
      name: "Uno",
    },
    {
      id: 2,
      brand: "Fiat",
      color: "Blue",
      name: "Uno",
    },
    {
      id: 3,
      brand: "Fiat",
      color: "Green",
      name: "Uno",
    },
    {
      id: 4,
      brand: "Fiat",
      color: "Oranje",
      name: "Uno",
    },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const people = [
    {
      id: 1,
      nome: "Larissa",
      idade: 12,
      profissao: "Uno",
    },
    {
      id: 2,
      nome: "Thiago",
      idade: 23,
      profissao: "Uno",
    },
    {
      id: 3,
      nome: "Viviane",
      idade: 44,
      profissao: "Uno",
    },
    {
      id: 4,
      nome: "Cido",
      idade: 56,
      profissao: "Uno",
    },
  ];

  return (
    <div className="App">
      <h1>Avançando em Rect</h1>
      {/* Imagem em public */}
      <div>
        <img src="/dog1.jpg" alt="Dog 1" height="300" width="400" />
      </div>
      {/* Imagem em src/assets */}
      <div>
        <img src={Dog2} alt="Dog 2" height="300" width="400" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Larissa" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails name="Ferrari" color="Red" brand="Ferrari" />
      <CarDetails name="Volvo" color="Black" brand="Volvo" />
      <CarDetails name="X6" color="White" brand="BMW" />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          name={car.name}
          color={car.color}
          brand={car.brand}
          key={car.key}
        />
      ))}
      {/* Fragments */}
      <Fragment title="Props no Fragment" />
      {/* Children */}
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>
      {/* Executar funções */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}

      {/* componente que consome o estado */}
      <Message msg={message} />
      {/* componente que altera o estado */}
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio */}
      {people.map((person) => (
        <UserDetails
          key={person.id}
          nome={person.nome}
          idade={person.idade}
          profissao={person.profissao}
        />
      ))}
    </div>
  );
}

export default App;
