import "./style.css";
import { setupCounter } from "./counter";

async function loadUsers() {
  const response = await fetch(import.meta.env.VITE_APP_API);
  console.log(import.meta.env.VITE_APP_API);
  const data = await response.json();
  console.log(data);

  const userList = document.createElement("div");
  data.forEach((element: any) => {
    userList.innerHTML += `
      <div>
        <h2>${element.name}</h2>
      </div>
    `;
  });
  const users = document.getElementById("users");
  users?.appendChild(userList);
}

loadUsers();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <h1>Lista de usuarios</h1>
    <div id="users"></div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
