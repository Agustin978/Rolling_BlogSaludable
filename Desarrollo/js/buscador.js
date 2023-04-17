const buscador = document.getElementById('buscaArticulo');
buscador.addEventListener('submit', buscarArticulo);
const articulo = document.getElementById('articuloBuscado');
const etiquetas = document.getElementsByTagName('h4');

function buscarArticulo(e)
{
    e.preventDefault();
    //let articulo = document.getElementById('articuloBuscado');
    console.log(articulo.value);
    for(let i = 0; i < etiquetas.length; i++)
    {
        console.log(etiquetas[i].innerHTML);
    }
    //etiquetas.map(etiqueta=>{console.log(etiqueta.value)});
}