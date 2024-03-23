const url = 'filmes.json'
function carregar(){
    fetch(url)
    .then(response => response.json())
    .then(filmes =>{
        const container = document.querySelector('#filme-container');
        filmes.map(filme =>{
            const card = document.createElement('div');
            card.classList.add('card')

            const img = document.createElement('img');
            img.src = filme.poster;
            img.alt = filme.nome;
            img.classList.add('img')
            const title = document.createElement('h3');
            title.textContent = filme.nome;

            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card)
        })
    })
}
carregar()
    

function pesquisar(){
    fetch(url)
    .then(response => response.json())
    .then(listas =>{
       const search = document.querySelector('input');
       const buscar = search.value.toLowerCase();
       const container = document.querySelector('#filme-container');
       const main = document.querySelector('main')


       listas.map(lista=>{

            if(buscar == lista.nome){

            const card = document.createElement('div');
            card.classList.add('card')
            
            const img = document.createElement('img');
            img.src = lista.poster;
            img.alt = lista.nome;
            img.classList.add('img');

            const title = document.createElement('h3');
            title.textContent = lista.nome;

            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card)
            main.appendChild(container);

            }
        
        })
    })
}


document.querySelector('button').addEventListener('click',pesquisar)