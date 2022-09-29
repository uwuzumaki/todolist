import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  Sidebar();
};

export default Main;
