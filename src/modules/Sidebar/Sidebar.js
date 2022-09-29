const Sidebar = () => {
  const main = document.getElementById("main");

  const sidebar = document.createElement("div");
  sidebar.id = "sidebar";
  main.appendChild(sidebar);
};

export default Sidebar;
