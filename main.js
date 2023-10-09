const container = document.getElementById("container");
btn = document.getElementById("create-team");
loader = document.getElementById("loader");

const getTeam = async () => {
  try {
    container.innerHTML = null;
    loader.style.display = "block";
    for (let i = 1; i <= 6; i++) {
      let pokeRndomId = await Math.floor(Math.random() * (150 - 1) + 1);
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeRndomId}`);
      if (!res.ok) throw new Error("Error al conectarse a la API");
      let json = await res.json();
      setTimeout(() => {
        loader.style.display = "none";
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<img src= ${json.sprites.other.home.front_default} alt=${json.forms[0].name}><h3>${json.forms[0].name}</h3>`;
        container.appendChild(div);
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};
document.addEventListener("DOMContentLoaded", (e) => {
  getTeam();
});

btn.addEventListener("click", getTeam);
