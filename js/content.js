'use strict';

if (window.location.href.includes('power-supply')){
  const parrafos = document.getElementsByClassName('psa-order-content-line')
  let correo = ''
  let refalter = ''
  let refinicial = ''
  let cantidad = ''
  let cuenta = ''
  let cliente = ''
  let fecha = ''
  let proveedor = ''
  let fechaestimada = ''
  
  for(let i = 0; i < parrafos.length; i++){
    if(parrafos[i].innerText.includes('Email') || parrafos[i].innerText.includes('Mail persona contacto en Taller'))
      correo += `${parrafos[i].childNodes[1].innerText};`
    if(parrafos[i].innerText.includes('Pieza inicial'))
      refinicial = parrafos[i].childNodes[1].innerText
    if(parrafos[i].innerText.includes('Proveedor'))
      proveedor = parrafos[i].childNodes[1].innerText
    if(parrafos[i].innerText.includes('Referencia')){
      if(parrafos[i].childNodes[1].innerText != '') 
        refalter = parrafos[i].childNodes[1].innerText
    }
    if(parrafos[i].innerText.includes('Fecha de entrega estimada')){
      if(parrafos[i].childNodes[1].innerText != '') 
        fechaestimada = parrafos[i].childNodes[1].innerText
    }
    if(parrafos[i].innerText.includes('Cantidad pendiente'))
      cantidad = parrafos[i].innerText
    if(parrafos[i].innerText.includes('Cuenta Cliente'))
      cuenta = parrafos[i].innerText
    if(parrafos[i].innerText.includes('Detalles del cliente'))
      cliente = parrafos[i].innerText
    if(parrafos[i].innerText.includes('Fecha del pendiente'))
      fecha = parrafos[i].childNodes[1].innerText
  }
  let asunto = "Referencia alternativa PPCR"
  let saludo = "Buenos días:%0A"
  let mensaje = `La referencia ${refinicial} pedida el día ${fecha} está sin plazo de entrega y fábrica nos proponen la referencia ${refalter} en su lugar. La fecha de entrega de esta alternativa es para el ${fechaestimada} ¿Confirmamos la propuesta o dejamos el pedido inicial?`

  if(!correo.includes('null'))
    window.location.href = `mailto:${correo}?Subject=${asunto}&body=${saludo}${mensaje}`
}