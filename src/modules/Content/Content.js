//Selects the body of the document and appends a Div with an ID of "content"
const content = () => {
  const body = document.body;

  const content = document.createElement("div");
  content.id = "content";
  body.appendChild(content);
};

export default content;
