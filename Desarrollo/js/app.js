let temaGuardado = JSON.parse(localStorage.getItem('tema')) || 'light';
cambiarTema(temaGuardado);
document.
        getElementById('btnTemaClaro').
        addEventListener('click',()=>cambiarTema('light'));
document.
        getElementById('btnTemaOscuro').
        addEventListener('click',()=>cambiarTema('dark'));

function cambiarTema(tema)
{
    let body = document.querySelector('body');
    let iconTema = document.getElementById('IconTema');
    if(tema === 'dark')
    {
        iconTema.className = 'bi bi-moon-stars-fill';
    }else
    {
        iconTema.className = 'bi bi-brightness-high-fill';
    }
    body.setAttribute('data-bs-theme', tema);
    localStorage.setItem('tema',JSON.stringify(tema));
}


