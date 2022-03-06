const greeting = `Hello from greet 5 Im not kicking anything`;
const eureka = `Listen to my heartbeat`;
const greet = () => {
  console.log(greeting);
};
const heart = () => {
  console.log(eureka);
};

module.exports = {
  kikingGramps: greet,
  heart, // por default si queremos ponerle el mismo nombre que
  // la funcion a la propiedad podemos escribirlo una vez y se nombra
  // de la misma manera de la propiedad por si solo vaya
};
