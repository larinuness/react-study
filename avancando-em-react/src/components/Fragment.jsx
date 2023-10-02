const Fragment = ({title}) => {
  return (
    //retirando essa div ele vira o filho do pai do arquivo que for usar ele
    <>
      <h1>Primeiro título</h1>
      <h2>Segundo título</h2>
      <h3>{title}</h3>
    </>
  );
};

export default Fragment;
