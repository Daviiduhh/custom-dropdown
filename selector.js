export async function setupSelector(eSelector, eList, eSelected) {
  const setList = (list) => {
    eList.innerHTML = list;

    eList.childNodes.forEach((child) => {
      child.addEventListener("click", (e) => {
        eSelected.innerText = child.innerText;
        eList.classList.add("hidden");
      });
    });
  };

  const setSelected = (selected = "Select an option") => {
    eSelected.innerText = selected;

    eSelected.addEventListener("click", (e) => {
      if (eList.classList.contains("hidden")) eList.classList.remove("hidden");
      else eList.classList.add("hidden");
    });
  };

  const universities = await getUniversities();
  const parsedUniversities = parseUniversities(universities);

  setSelected();
  setList(parsedUniversities);
}

const parseUniversities = (universities) => {
  return universities
    .map((u) => `<span class="selector__list__item">${u.name}</span>`)
    .join("");
};

const getUniversities = async () => {
  const request = await fetch(
      "http://universities.hipolabs.com/search?country=Mexico"
    ),
    json = await request.json(),
    universities = await json;

  return universities;
};
