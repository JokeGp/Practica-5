// MODULO QUE EXPONE UNA SOLA FUNCIÓN/MÉTODO
// declaramos una variable conteniendo una funcion y la exportamos
const greet = () => {
  console.log(`Hello from greet 1`);
};
module.exports = greet;

// MODULO QE REGRESA UNA PROPIEDAD EN ESPECIFICO
// aqui por lo que entiendo directamente se regresa una
// propiedad la cual tiene asignada una funcion en especifico
// segun la propiedad la cual estes importando en tu app
// parece que se pueden usar varias funcionnes a un mismo
// modulo
// module.exports.greet = function greet() {
//   console.log(`Hellow from greet 2`);
// };
