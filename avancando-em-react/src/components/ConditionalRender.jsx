import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const[name,setName] = useState("Leticia");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/* mostra algo se for true or false */}
      {x ? <p>Sim</p> : <p>Não</p>}
      {/* só mostra se for true */}
      {x && <p>Sim</p>}
      {name == "Larissa" ? (
        <p>O nome é Larissa</p>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Larissa")}>Testar o nome</button>
    </div>
  );
};

export default ConditionalRender;
