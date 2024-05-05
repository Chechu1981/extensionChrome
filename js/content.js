'use strict';

let pagina = false

window.location.href.includes('google') ?
  pagina = true : pagina = false

if (pagina){
  const parrafos = document.querySelectorAll('div')
  console.log(parrafos)
}