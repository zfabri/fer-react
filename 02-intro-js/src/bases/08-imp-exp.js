// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
// import cualquierCosaArr from './data/heroes'
// import heroes, { owners } from './data/heroes'
import heroes from '../data/heroes'

// console.log(heroes)


// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id === id) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id)
// console.log(getHeroeById(1))


// const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
// console.log(getHeroeByOwner('DC'))


// console.log(heroes)