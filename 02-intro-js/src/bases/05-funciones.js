// funciones

// function saludar(nombre) {
//   return 'hola ' + nombre
// }

// saludar = 90


// const saludar = function (nombre) {
//   return 'hola ' + nombre
// }


// const saludar2 = (nombre) => {
//   return 'hola ' + nombre
// }

const saludar3 = (nombre) => 'hola ' + nombre
const saludar4 = () => 'hola mundo'


// console.log( saludar('zane') )
// console.log(saludar3('zane'))
// console.log(saludar4())


const getUser = () => ({
  uid: 'abc123',
  username: 'user123'
})


// const user = getUser()
// console.log(user)


// tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito
// probarlo

const getUsuarioActivo = (nombre) =>
({
  uid: 'abc123',
  username: nombre,
})

const usuarioActivo = getUsuarioActivo('zane')
console.log(usuarioActivo)