const cardForm = document.querySelector(".form");
const json = document.querySelector(".json");
const url = "form.json";

const getData = async (url) => {
  let formData = new FormData(cardForm);
  let jsonData = Object.fromEntries(formData);
  json.textContent = JSON.stringify(jsonData);

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(jsonData)) {
    params.append(key, value);
  }

  const response = await fetch(`${url}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  const res = await response.json();
  alert(res[0].answer);
  return res;
};


cardForm.addEventListener("submit", e => {
  e.preventDefault();
  getData(url);
  cardForm.reset();
});


