// MODULO QUE EXPONE UNA SOLA FUNCIÓN/MÉTODO
// aquí guardamos el modulo exportado o le decimos el archivo
//contenedor
// del modulo que queremos guardar en una variable
// al ser greet una funcion exportada se convierte en funcion y
//la podemos invocar
const greet = require(`./greet1`);
greet();

// MODULO QE REGRESA UNA PROPIEDAD EN ESPECIFICO
// en este caso se accede al archivo greet anterior
// const greet2 = require(`./greet1`).greet;
// greet2();
// const greet2 = require(`./greet1`).greet;
// greet2();
// aqui se le pide acceso o que importe el modulo de la propiedad
// especificada en este caso .greet
const greet2 = require(`./greet2`).greet;
greet2();

// intentamos
// const greet2a = require(`./greet2`);
// greet2a();
// aquí parece que no puede acceder por ser anonimo el modulo pues
// al no decirle la propiedad me regresa solo la ruta del archivo modulo
// que creamos y al no poder acceder greet2a queda cómo una simple variable

//MODULO QUE EXPONE UN OBJETO CONSTRUIDO
const greet3 = require(`./greet3`); // direccion del objeto construido
console.log(greet3); //muestra con la direccion el objeto
greet3.greet();

console.log(`--------------------------------test---------------------`);
// probamos
const greet2a = require(`./greet2`);
const { greeting } = require(`./greet3`);
const gret3 = require(`./greet3`);
greet();
greet2a.greet();

gret3.greet();
// aqui lo que pasa es que js al crear un objeto lo asigna a la memorie
// y al ver que requieres utilizar ese objeto por una segunda vez
// te manda la dir de memoria del objeto iniciaal por ende
// lo puedes modificar afectando a todas las variables en donde lo
// tengas guardado pues todas toman los datos de la misma parte de
// memoria
gret3.greeting = `New Hello from app`;

const greet3B = require(`./greet3`);
greet3B.greet();

console.log(`------------MODULO QUE EXPONE UN CONSTRUCTOR----------------`);

//MODULO QUE EXPONE UN CONSTRUCTOR
// aquí guarda el constructor del modulo se puede decir que
// Greet4 es un nuevo constructor
const Greet4 = require(`./greet4`);
// aqui utilizamos como parametro el nombre
// del nuevo constructor para armar un nuevo objeto y asignarlo
// haciendo asi objetos independientes de ellos mismos
const myGreet = new Greet4();
myGreet.greet();

console.log(`------------MODULO QUE EXPONE UN CONSTRUCTOR----------------`);
// REVEALING MODULE PATTERN
const greet5 = require(`./greet5`);
greet5.kikingGramps();
greet5.heart();
