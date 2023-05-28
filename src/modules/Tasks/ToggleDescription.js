//Toggles the description of each task to be hidden or shown.
const ToggleDescription = (id) => {
  const description = document.getElementById(`c${id}`);
  if (description.style.maxHeight) {
    description.style.maxHeight = null;
    description.style.borderBottomWidth = 0 + "px";
  } else {
    description.style.maxHeight = description.scrollHeight + "px";
    description.style.borderBottomWidth = 1 + "px";
  }
};

export default ToggleDescription;
