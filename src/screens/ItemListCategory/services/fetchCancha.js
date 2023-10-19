import { canchas, galeriasCanchas } from '../../../data/categoryDb'

export const fetchCanchas = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(canchas)
    }, 1000)
  })
}
export const fetchGaleriaCanchaByid = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(galeriasCanchas.find((galeriaCancha) => galeriaCancha.id_cancha === parseInt(id)))
    }, 1000)
  })
}

async function obtenerCanchas (func) {
  try {
    const canchas = await fetchCanchas()

    if (!canchas.length) {
      throw new Error('No se encontro canchas')
    }
    // Obtener las promesas para las llamadas a fetchCancha, fetchUsuario y fetchGaleriaCancha
    const promises = canchas.map(async (cancha) => {
      const galeria = await fetchGaleriaCanchaByid(cancha.id)

      console.log('duracionReserva ->', galeria)
      return {
        cancha,
        galeria
      }
    })

    // Esperar a que todas las promesas se resuelvan
    const resCompletas = await Promise.all(promises)
    func(resCompletas)

    console.log('RESERVA COMPLETA ->', resCompletas)

    return resCompletas
  } catch (error) {
    console.log('error al traer las reservas', error)
    throw error
  }
}

export default obtenerCanchas
