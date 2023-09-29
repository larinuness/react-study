function Challenge() {
  let a = 10;
  let b = 20;

  function somar() {
    console.log(a + b);
  }
  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={somar}>Clique pra somar</button>
    </div>
  );
}

export default Challenge;
