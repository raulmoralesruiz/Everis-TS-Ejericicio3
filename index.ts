// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.
// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.
// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.
// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis!

// se importa la interfaz UserData
import { UserData } from './user-data';

// se crea variable usuario, de tipo UserData
let user : UserData;

// función que comprueba si el parámetro introducido es de tipo string
function isString(param) {
  return (typeof param === 'string')
}

// función que muestra nombre o teléfono, dependiendo del parámetro introducido
function getData<T>(param: T): void {
  if(isString(param)){
    console.log(`Nombre del usuario: ${param}`);
  } else {
    console.log(`Teléfono del usuario: ${param}`);
  }
}

// asignación de objeto literal.
user = {
  name: "Raúl", age: 28, phone: 666333999
};

// llamada a getData para mostrar nombre del usuario
let name = getData<string>(user.name);

// llamada a getData para mostrar teléfono del usuario
let phone = getData<number>(user.phone);