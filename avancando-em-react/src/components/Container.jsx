// usar o "children" quando eu quero passar uma tag/component por outro lugar

export const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Esté é o título do Container</h2>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};
