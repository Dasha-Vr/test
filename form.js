
const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  const res = await response.json();
  alert(res[0].answer);
  return res;
};


const sendCard = () => {

  const cardForm = document.querySelector(".form");

  cardForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(cardForm);
    const jsonData = Object.fromEntries(formData);

    const json = document.querySelector(".json");

    json.textContent = JSON.stringify(jsonData);

    getData("form.json");

  });
}

sendCard();