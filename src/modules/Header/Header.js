//Creates a header div and appends it to content div
const Header = () => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.id = "header";
  content.appendChild(main);

  const heading = document.createElement("div");
  heading.id = "title";
  heading.textContent = "To-Do List";
  main.appendChild(heading);
};

export default Header;
