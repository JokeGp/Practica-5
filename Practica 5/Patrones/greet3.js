//MODULO QUE EXPONE UN OBJETO CONSTRUIDO
// En este caso creamos una funcion constructora
// con las propiedades este greeting y la funcion this greet
function GreetStructor() {
  this.greeting = `Hello from de function constructor`;
  this.greet = function () {
    console.log(this.greeting);
  };
}

// aqui exportamos un nuevo objeto construido usando nuestra funcion
// constructora
module.exports = new GreetStructor();
