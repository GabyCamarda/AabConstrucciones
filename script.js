elparrafo = document.createElement("p");
elparrafo.innerHTML = "También podés seguir nuestro día a día en Instagram: @Loremipsumdolorsit"; 
elparrafo.className = "text-center";

contenedor = document.createElement("div");
contenedor.className = "container";

separa = document.createElement("br");

etiqueta = document.createElement("h1");
etiqueta.className = "text-center";
etiqueta.innerHTML = "Titulo";


elparrafo2 = document.createElement("p");
elparrafo2.innerHTML = "Este es otro parrafo"; 


contenedor.appendChild(separa);
contenedor.appendChild(etiqueta);
contenedor.appendChild(elparrafo);
contenedor.appendChild(elparrafo2);

document.body.appendChild(contenedor);
//console.log(contenedor);
