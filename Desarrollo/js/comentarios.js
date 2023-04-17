const formularioComentarios = document.getElementById('formularioComentarios');
formularioComentarios.addEventListener('submit', controlaComentario);
const nombreArticulo = document.getElementById('nombreArticulo');

const mail = document.getElementById('formEmail');
const comentario = document.getElementById('formComentario');
cargaComentarios();

function controlaComentario(e)
{
    e.preventDefault();
    if((mail.value).length < 5 || (mail.value).length > 80 || (comentario.value).length <= 3 || (comentario.value).length > 250)
    {
        alert('Ingreso datos erroneos en el formulario.');
        formularioComentarios.reset();
    }else
    {
        let articulo = determinaArticulo();
        let comentariosAlmacenados = localStorage.getItem(articulo);
        let comentarios = [];
        if(comentariosAlmacenados !== null)
        {
            comentarios = JSON.parse(comentariosAlmacenados);
        }
        comentarios.push(mail.value+'/'+comentario.value);
        //console.log(comentarios);
        localStorage.setItem(articulo,JSON.stringify(comentarios));
        formularioComentarios.reset();
        cargaComentarios();
    }
    //console.log('Agregando comentario...');
}

function determinaArticulo()
{
    //console.log(nombreArticulo.innerHTML);
    switch(nombreArticulo.innerHTML)
    {
        case 'Ejercicio fisico':
            return 'Articulo1';
        case 'El cigarrillo y la salud':
            return 'Articulo2';
        case 'No tomar mucho alcohol':
            return 'Articulo3';
        case 'Una dieta equilibrada':
            return 'Articulo4';
        case 'Dormir bien':
            return 'Articulo5';
    }
}

function cargaComentarios()
{
    //Debo determinar de que articulo se trata inicialmente
    let articulo = determinaArticulo();
    let comentariosAlmacenados = localStorage.getItem(articulo);
    let comentarios = [];
    let cajaComentarios = document.getElementById('cajaComentarios');

    if(comentariosAlmacenados === null)
    {
        cajaComentarios.innerHTML = creaCardNoComentarios();
    }else
    {
        let comentariosHTML = '';
        comentarios = JSON.parse(comentariosAlmacenados);
        //console.log(comentarios);
        comentarios.map(com => {
            datos = com.split('/');
            //console.log(datos);
            comentariosHTML += creaCardComentarioHTML(datos[0],datos[1]);
        })
        cajaComentarios.innerHTML = comentariosHTML;
    }
}

function creaCardNoComentarios()
{
    let noComentarioHTML = '<div class="card"><div class="card-body"><p class="text-center text-secondary">No se ingreso ningun comentario aún. Sea el primero en dejar su comentario :)</p></div></div>'
    return noComentarioHTML;
}

function creaCardComentarioHTML(email, comentario)
{
    let comentarioHTML = '<div class="card mt-3"><h5 class="card-header">'+email+'</h5><div class="card-body"><p class="card-text">'+comentario+'</p></div></div>';
    return comentarioHTML;
}