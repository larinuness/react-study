const CarDetails = ({ brand, color, name }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Cor: {color}</li>
        <li>Nome: {name}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
