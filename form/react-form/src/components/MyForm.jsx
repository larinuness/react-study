import { useState } from "react";
import "./MyForm.css";
const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - gerenciamento de dados
  //pega com o que vem da props ou mostra vazio
  const [name, setName] = useState(user.name ?? "");
  const [email, setEmail] = useState(user.email ?? "");
  const [bio, setBio] = useState("");
  const [role,setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    //Não deixa recarregar o form
    e.preventDefault();
    console.log(name, email, bio, role);

    // 7 - Limpar o form após enviar
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };
  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criando o form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            //ja vem preenchido com o que foi passado na prop
            value={name}
          />
        </div>
        {/* 2 -Label envolvendo input (O jeito mais indicado de fazer)*/}
        <label>
          <span>E-mail</span>
          {/* 4 - Simplificação de manipulação do state */}
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            //quando so precisar do valor do input, melhor fazer assim
            onChange={(e) => setEmail(e.target.value)}
            //ja vem preenchido com o que foi passado na prop
            value={email}
          />
        </label>
        {/* 8 - TextArea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função do Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}value={role}>
            <option value="user">Usuário</option>
            <option value="adm">Admin</option>
            <option value="dev">Desenvolvedor</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
