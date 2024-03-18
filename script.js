const button = document.getElementById("button");
const joke = document.getElementById("joke");

const apiKey = "zBVvcJzddTiaF9u9fvxcIQ==hNlG99bcbwPVp5N"

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "zBVvcJzddTiaF9u9fvxcIQ==hNlG99bcbwPVp5Nh",
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke() {
  try {
    joke.innerText = "Updating...";
    button.disabled = true;
    button.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    button.disabled = false;
    button.innerText = "Tell me a joke";

    joke.innerText = data[0].joke;
  } catch (error) {
    joke.innerText = "An error happened, try again later";
    button.disabled = false;
    button.innerText = "Tell me a joke";
    console.log(error);
  }
}

button.addEventListener("click", getJoke);
