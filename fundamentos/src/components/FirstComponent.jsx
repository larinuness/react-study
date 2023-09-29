import MyComponent from "./MyComponent";

const FirstComponent = () => {
  return (
    // sempre usar a div porque um component jsx só pode ter um pai

    <div>
      <h1>Meu primeiro componente</h1>
      {/* no react usamos className em vez de apenas "class" */}
      <p className="teste">Meu texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
