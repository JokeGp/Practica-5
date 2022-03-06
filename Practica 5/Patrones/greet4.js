//MODULO QUE EXPONE UN CONSTRUCTOR
module.exports = function GreetStructor2() {
  this.greeting = `Hello from de function constructor 2`;
  this.greet = function () {
    console.log(this.greeting);
  };
};
