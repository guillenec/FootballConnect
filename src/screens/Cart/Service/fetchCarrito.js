import { reservas, canchas, usuarios, galeriasCanchas } from '../../../data/categoryDb'

export const fetchReserva = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(reservas.find((reserva) => reserva.id === parseInt(id)))
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
    const reserva = await fetchReserva(idUsuario)
    console.log('reserva', reserva)
    // const reserva = reservas.find((reserva) => reserva.id === parseInt(idUsuario))

    // if (!reserva) {
    //   throw new Error('No se encontro reserva')
    // }
    // obtenemos los datos de la cancha reservada por el id
    // const cancha = await fetchCancha(reserva.id_cancha)

    // obtenemos los datos del usuario que reservo la cancha
    // const usuario = await fetchUsuario(reserva.id_usuario)

    // obtenemos la galeria de la cancha
    // const galeria = await fetchGaleriaCancha(cancha.id)
    // const cancha = canchas.find((cancha) => cancha.id === parseInt(reserva.id_cancha))

    // const usuario = usuarios.find((usuario) => usuario.id === parseInt(reserva.id_usuario))

    // const galeria = galeriasCanchas.find((galeriaCancha) => galeriaCancha.id_cancha === parseInt(cancha.id))

    const reservaCompleta = {
      ...reserva
      // ...cancha,
      // ...usuario,
      // ...galeria
    }
    return reservaCompleta
  } catch (error) {
    console.log('error al traer las reservas', error)
    throw error
  }
}

export default obtenerReservaCompleta
