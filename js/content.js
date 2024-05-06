'use strict';

if (window.location.href.includes('power-supply')){
  const parrafos = document.getElementsByClassName('psa-order-content-line')
  let correo = `${parrafos[23].childNodes[1].innerText.replaceAll('','').replaceAll('\n','')};${parrafos[27].childNodes[1].innerText.replaceAll('','').replaceAll('\n','')}`
  let referencia = parrafos[4].innerHTML
  let cantidad = parrafos[4].innerHTML
  let cuenta = parrafos[4].innerHTML
  let cliente = parrafos[4].innerHTML
  let fecha = parrafos[4].innerHTML
  alert(correo)
}