window.onload = function () {
  let body = document.querySelector('body');
  let moviesListTitulo = document.querySelector('.moviesListTitulo');

  let logo = document.querySelector('figure');

  logo.addEventListener('mouseover', function () {
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList');
  });

  console.log(body);
  moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
  moviesListTitulo.style.color = 'white';
  moviesListTitulo.style.backgroundColor = 'teal';
  moviesListTitulo.style.padding = '20px';
};
