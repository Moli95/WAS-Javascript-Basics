pokemonTypeCheck = (pokemonName) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
 
    fetch(url)
        .then((resp) => resp.json()) // Transform the reponse into json
        .then((data) => {
            for(let i = 0; i<=data.types.length-1; i++) {
                let para = document.createElement("li");
                let node = document.createTextNode(data.types[i].type.name);
                para.appendChild(node);
                document.getElementsByTagName("ul")[0].appendChild(para);
            }
        })
        .catch((error) => {
            document.getElementsByTagName("ul")[0].innerHTML = `<li class='text-danger'>Something went wrong.. Check pokemon name and try again.`;
            
    })
}

document.getElementById('pokemonTypeCheck').addEventListener('click', () => {
    document.getElementsByTagName("ul")[0].innerHTML = '';
    pokemonTypeCheck(document.getElementById('pokemonName').value)
});