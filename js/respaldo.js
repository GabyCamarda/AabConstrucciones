//carro de compras

var datos = {
    "productos": [
        {"nombre": "pileta", "precio":1000000, "descuento":10},
        {"nombre": "frentes", "precio":500000, "descuento":5},
        {"nombre": "interiores", "precio":600000, "descuento":5},
    ]
  }
  
  class Producto{
    constructor(nombre,precio,descuento){
      this.nombre = nombre;
      this.precio = precio;
      this.descuento = descuento;
    }
    getPrecioFinal = function(){
      return this.precio - this.precio * (this.descuento/100);
    }
  }
  
  class carrodecompras{
    constructor(numero_carro){
      this.numeros = numero_carro;
      this.carro = [];
  }
  agregar_compra = function(producto){
    this.carro.push(producto);
  }
  toString = function(){
      return this.numero_carro;
  }
  getPrecio = function(){
      var suma = 0;
      for (var i=0; i< this.carro.length; i++){
          suma=suma + this.carro [i].getPrecioFinal();
      }
      return suma;
    }
  
  }
  var carro_compra = new carrodecompras(1)
  for(var i=0; i < datos.productos.lenght; i++){
      var p= new producto(datos.productos[i].nombre,
                          datos.productos[i].precio),
                          datos.productos[i].descuento);
          carro_compra. agregar_compra(p);
  }
  
  console.log(carro_compra.getPrecio());