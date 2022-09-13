window.onload = function () {
  console.log('index.js success');
  let container = document.querySelector('.container');
  let subtitulo = document.querySelector('.subtitulo');
  let destacado = document.querySelectorAll('p');
  let fondo = document.querySelector('body');
  let enlace = document.querySelector('a');

  let nombre = prompt('Ingrese su nombre');
  console.log(nombre);
  if (nombre == null) {
    subtitulo.innerHTML += ' Invitado';
  } else {
    subtitulo.innerHTML += ' ' + nombre;
  }

  subtitulo.style.textTransform = 'uppercase';

  let confirmar = confirm('Desea colocar un fondo de pantalla ');
  if (confirmar) {
    fondo.classList.add('fondo');
    enlace.style.color = '#E51B3E';
  }
  console.log(destacado);
  for (let i = 0; i < destacado.length; i++) {
    if (i % 2 == 0) {
      destacado[i].classList.add('destacadoPar');
    } else {
      destacado[i].classList.add('destacadoImpar');
    }
  }

  let logo = document.querySelector('.logoDH');
  let menu = document.querySelector('#menu');

  logo.addEventListener('click', function (event) {
    menu.classList.toggle('mostrar');
  });
  menu.addEventListener('mouseout', function () {
    menu.classList.remove('mostrar');
  });
  menu.addEventListener('mouseover', function () {
    menu.classList.add('mostrar');
  });

  container.style.display = 'block';
};
