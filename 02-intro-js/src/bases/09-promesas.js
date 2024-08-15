import { getHeroeById } from './bases/08-imp-exp'

// las promesas son asincronas
// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     // tarea
//     const heroe = getHeroeById(5)
//     // console.log(heroe)

//     // resolve(heroe)
//     reject('No se pudo encontrar el heroe')
//   }, 2000)
// })

// promesa
//   .then(heroe => {
//     // console.log('then de la promesa')
//     console.log(heroe)
//   })
//   .catch(err => {
//     console.log(err)
//   })


const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const heroe = getHeroeById(id)

      if (heroe) {
        resolve(heroe)

      } else {
        reject('No se encontro el heroe')
      }

    }, 2000)
  })
}

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.log)