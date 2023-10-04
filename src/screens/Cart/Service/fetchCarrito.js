import { reservas, canchas, usuarios, galeriasCanchas } from '../../../data/categoryDb'

export const fetchReserva = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(reservas.filter((reserva) => reserva.id_usuario === parseInt(id)))
    }, 1000)
  })
}

export const fetchCancha = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(canchas.find((cancha) => cancha.id === parseInt(id)))
    }, 1000)
  })
}

export const fetchUsuario = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios.find((usuario) => usuario.id === parseInt(id)))
    }, 1000)
  })
}

export const fetchGaleriaCancha = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(galeriasCanchas.find((galeriaCancha) => galeriaCancha.id_cancha === parseInt(id)))
    }, 1000)
  })
}

async function obtenerReservaCompleta (idUsuario) {
  try {
    // obtener reservas por id del usuario
    const reservas = await fetchReserva(idUsuario)
    // const reserva = reservas.find((reserva) => reserva.id === parseInt(idUsuario))

    if (!reservas.length) {
      throw new Error('No se encontro reserva')
    }
    // Obtener las promesas para las llamadas a fetchCancha, fetchUsuario y fetchGaleriaCancha
    const promises = reservas.map(async (reserva) => {
      const cancha = await fetchCancha(reserva.id_cancha)
      const usuario = await fetchUsuario(reserva.id_usuario)
      const galeria = await fetchGaleriaCancha(cancha.id)

      return {
        reserva,
        cancha,
        usuario,
        galeria
      }
    })

    // Esperar a que todas las promesas se resuelvan
    const reservasCompletas = await Promise.all(promises)

    console.log('RESERVA COMPLETA ->', reservasCompletas)

    return reservasCompletas
  } catch (error) {
    console.log('error al traer las reservas', error)
    throw error
  }
}

export default obtenerReservaCompleta
