import Sidebar from "../Sidebar/Sidebar";
import Tasks from "../Tasks/Tasks";

const Main = () => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);

  Sidebar();
  Tasks();
};

export default Main;
