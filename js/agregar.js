function generar(objeto) {
  let contenido = objeto.clases;
  let tablas, caja, imagen, texto, titulo;
  let contenedor = document.querySelector(".contenedor");
  for (let i = 0; i < contenido.length; i++) {
    titulo=document.createElement('h2');
    titulo.className='tt';
    titulo.textContent=contenido[i].personaje;
    caja = document.createElement("div");
    caja.className = "caja";
    imagen = document.createElement("img");
    imagen.className = "imagen";
    imagen.src = contenido[i].imagen;
    tablas = tabla(contenido[i].niveles);
    texto = document.createElement("p");
    texto.className = "des";
    texto.innerHTML = espacios(contenido[i].tex);
    caja.appendChild(titulo);
    caja.appendChild(imagen);
    caja.appendChild(tablas);
    caja.appendChild(texto);
    contenedor.appendChild(caja);
  }
}
function tabla(a) {
  let niveles = [
    "Nivel",
    "Imp",
    "Men",
    "Tole",
    "Fue",
    "Des",
    "Int",
    "Fe",
    "Arc",
  ];
  let cre, tr, th, td, tr2;
  cre = document.createElement("table");
  cre.className = "tabla";
  tr = document.createElement("tr");
  tr.className = "tit";
  tr2 = document.createElement("tr");
  tr2.className = "cont";

  for (let f = 0; f < 9; f++) {
    th = document.createElement("th");
    th.className = "titulos";
    th.textContent = niveles[f];
    tr.appendChild(th);
    td = document.createElement("td");
    td.className = "numero";
    td.textContent = a[f];
    tr2.appendChild(td);
  }
  let nose = document.createElement("tbody");
  nose.appendChild(tr);
  nose.appendChild(tr2);
  cre.appendChild(nose);
  return cre;
}
function espacios(ll){
    ll=ll.split(' ');
    let nuev=ll[0];
    for(let r=1;r<ll.length;r++){
        if(ll[r]=='br'){
            nuev+=' <br/> ';
        }else{
            nuev+=' '+ll[r];
        }
    }
    return nuev;
}

/* <div class="caja">
<img src="imagenes/imagen1.jpg" alt="" class="foto">
<table class="tabla">
        <tr class="tit">
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
            <th class="titulos">Nivel</th>
        </tr>
        <tr class="cont">
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
            <td class="numero">20</td>
        </tr>
</table>
<p class="des">Esta clase sirve de la mera verga a la verga pendejos de mierda no se que pedo pero</p>
</div> */
