const Header = () => {
  const content = document.getElementById("content");

  const main = document.createElement("div");
  main.id = "header";
  content.appendChild(main);
  main.innerHTML = "123";
};

export default Header;
