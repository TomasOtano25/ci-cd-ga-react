import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  const userList = document.createElement("div");
  data.forEach((element: any) => {
    userList.innerHTML += `
      <div>
        <h1>${element.name}</h1>
      </div>
    `;
  });
  const users = document.getElementById("users");
  users?.appendChild(userList);
}

loadUsers();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id="users"></div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
