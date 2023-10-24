// TODO write your code here
fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
  });
