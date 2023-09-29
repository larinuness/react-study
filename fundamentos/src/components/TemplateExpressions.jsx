const TemplateExpressions = () => {
  const name = "Larissa";
  const data = {
    age: 25,
    job: "Software Engineer",
  };
  return (
    <div>
      <h1>Olá {name}, tudo bem ?</h1>
      <p>Você atua como: {data.job}</p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
