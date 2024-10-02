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

  const products = await getProducts();
  const parsedProducts = parseProducts(products);

  setSelected();
  setList(parsedProducts);
}

const parseProducts = (products) => {
  return products
    .map((u) => `<span class="selector__list__item">${u.title}</span>`)
    .join("");
};

const getProducts = async () => {
  const request = await fetch(
      "https://fakestoreapi.com/products"
    ),
    json = await request.json(),
    products = await json;

  return products;
};
