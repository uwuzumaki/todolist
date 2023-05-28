//Gets content div and appends main div to it. Also initializes the modal, sidebar, and tasks area on the page.

import Modal from "../Modal/Modal";
import Sidebar from "../Sidebar/Sidebar";
import Tasks from "../Tasks/Tasks";

const Main = () => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.id = "main";
  content.appendChild(main);
  Modal();

  Sidebar();
  Tasks();
};

export default Main;
