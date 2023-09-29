import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Larissa", "Viviane", "Victória"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Larissa", age: 25 },
    { id: 2, name: "Viviane", age: 40 },
    { id: 3, name: "Victória", age: 14 },
    { id: 4, name: "Cido", age: 54 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      {/* usar a key pro react não reclamar */}
      <ul>
        {list.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      {/* usando a key que vem do objeto */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
