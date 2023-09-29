function Events() {
  const handleEvents = (e) => {
    console.log(e);
    console.log("Ativou o evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando outra coisa</h1>;
    }
  };

  return (
    <div>
      <div>
        {/* se deixar como onClick={handleEvents()}
                a função vai ser disparada assim que entra na página e não queremos nesse caso */}
        <button onClick={handleEvents}>Clique aqui</button>
      </div>
      {/* dessa forma ele entende que só vai executar quando for clicado */}
      <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
      <button
        onClick={() => {
          if (true) {
            console.log("Isso não deveria existir");
          }
        }}
      >
        Clique aqui de novo
      </button>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default Events;
