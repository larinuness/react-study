export const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
     
        <h2>{nome}</h2>
        <p>{idade}</p>
        <p>{profissao}</p>
        {idade >= 18 ? <p>Pode tirar a CNH</p> : <p>Menor de idade</p>}
      
    </div>
  );
};
