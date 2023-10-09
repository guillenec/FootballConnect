export const categorias = [
  { _id: 1, nombre: 'Patagonia' },
  { _id: 2, nombre: 'Otras Regiones' },
  { _id: 3, nombre: 'Linea Sur' },
  { _id: 4, nombre: 'Bariloche' },
  { _id: 5, nombre: 'Cancha de 7' },
  { _id: 6, nombre: 'Cancha de 5' },
  { _id: 7, nombre: 'Cancha de 10' }
]

export const equipos = [
  { _id: 1, nombre: 'Los Glaciares', ciudad: 'El Calafate, Santa Cruz', imagen: 'https://c8.alamy.com/compes/m15hdn/buenos-aires-argentina-caminito-barrio-de-la-boca-parque-de-barrio-futbol-futbol-futbol-futbol-futbol-futbol-futbol-futbol-deporte-nino-ninos-chico-ninos-ninos-y-ninos-m15hdn.jpg', categoria_id: 1 },
  { _id: 2, nombre: 'Los Nevados', ciudad: 'San Carlos de Bariloche, Río Negro', imagen: 'https://media.istockphoto.com/id/1327485609/es/foto/un-peque%C3%B1o-mercado-de-uniformes-del-equipo-de-f%C3%BAtbol-de-n%C3%A1poles-en-el-distrito-de-quartieri.jpg?s=612x612&w=0&k=20&c=oHlGGQOTDAZiv3hXCrZQFf9SnzOuYLpc_6_NGEfdaJU=', categoria_id: 3 },
  { _id: 3, nombre: 'Los Fueguinos', ciudad: 'Ushuaia, Tierra del Fuego', imagen: 'https://media.istockphoto.com/id/503256473/es/foto/young-men-playing-soccer-in-the-city.jpg?s=612x612&w=0&k=20&c=cwa3MD9ERqv9-kfU1pjdMw1BpBpFF7Kd6p3QM6xus5E=', categoria_id: 2 },
  { _id: 4, nombre: 'Los Andinos', ciudad: 'San Martín de los Andes, Neuquén', imagen: 'https://www.altoperu.org//wp-content/uploads/2020/12/1_PH0J03wqBP6t7F5whdmHFg.jpg', categoria_id: 3 },
  { _id: 5, nombre: 'Los Ventiscas', ciudad: 'Comodoro Rivadavia, Chubut', imagen: 'https://futboldeloeste.com.ar/wp-content/uploads/2017/09/CABN.jpg', categoria_id: 3 },
  { _id: 6, nombre: 'Los Cumbres', ciudad: 'Bariloche, Río Negro', imagen: 'https://img.soy-chile.cl/Fotos/2021/11/26/file_20211126115018.jpg', categoria_id: 4 },
  { _id: 7, nombre: 'Los Tormentas', ciudad: 'Puerto Madryn, Chubut', imagen: 'https://sistemamichoacano.tv/wp-content/uploads/2021/11/morelia-81.jpg', categoria_id: 5 },
  { _id: 8, nombre: 'Los Pingüinos', ciudad: 'Río Grande, Tierra del Fuego', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jfoo900jQhD9Ao73yX3sUlIvgaYoSK3iHoLpWBa08mXValcu2jszVIXg-uilVAiU9wY&usqp=CAU', categoria_id: 2 },
  { _id: 9, nombre: 'Los Volcanes', ciudad: 'Neuquén, Neuquén', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bNuGdI9jOO8BpW5Svb7cruDanQzdn65V4YWCyWhzOBuvvi9m-7A-Egp0AmicWhYga20&usqp=CAU', categoria_id: 1 },
  { _id: 10, nombre: 'Los Patagónicos', ciudad: 'Trelew, Chubut', imagen: 'https://pm1.aminoapps.com/8344/528b69c9269eadde2b9cfb397b2de6bbfd9879c5r1-720-899v2_hq.jpg', categoria_id: 5 },
  { _id: 11, nombre: 'Saca chispas', ciudad: 'jacobacci', imagen: 'https://www.lavoz.com.ar/resizer/XN_RGy2Xq1bdWhoybNSwDQDb_dw=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/WJ5NQRHIPZHTPE3KVPZFP6CWYM.jpg', categoria_id: 6 }
]

export const usuarios = [
  {
    id: 1,
    nombre: 'Usuario 1',
    email: 'usuario1@email.com',
    telefono: '111111111',
    id_equipo: '1'
  },
  {
    id: 2,
    nombre: 'Usuario 2',
    email: 'usuario2@email.com',
    telefono: '222222222',
    id_equipo: '2'
  },
  {
    id: 3,
    nombre: 'Usuario 3',
    email: 'usuario3@email.com',
    telefono: '333333333',
    id_equipo: '3'
  },
  {
    id: 4,
    nombre: 'Usuario 4',
    email: 'usuario4@email.com',
    telefono: '444444444',
    id_equipo: '4'
  },
  {
    id: 5,
    nombre: 'Usuario 5',
    email: 'usuario5@email.com',
    telefono: '555555555',
    id_equipo: '4'
  },
  {
    id: 6,
    nombre: 'Usuario 6',
    email: 'usuario6@email.com',
    telefono: '666666666',
    id_equipo: '1'
  }
]

export const integrantesDelEquipo = [
  {
    id: 1,
    id_usuario: 1,
    id_equipo: 1
  },
  {
    id: 2,
    id_usuario: 2,
    id_equipo: 1
  },
  {
    id: 3,
    id_usuario: 3,
    id_equipo: 2
  },
  {
    id: 4,
    id_usuario: 4,
    id_equipo: 3
  }
]

export const canchas = [
  {
    id: 1,
    nombre: 'San Jorge',
    costoHora: 2500,
    horarios: 'Lunes a Viernes de 9:00 a 18:00',
    direccion: 'Drumond 2262, Buenos Aires',
    id_local: 1
  },
  {
    id: 2,
    nombre: 'Esquina Vélez Fútbol',
    costoHora: 3500,
    horarios: 'Lunes a Viernes de 9:00 a 18:00',
    direccion: 'Álvarez Jonte 6305, Buenos Aires',
    id_local: 2
  },
  {
    id: 3,
    nombre: 'Futbol 5',
    costoHora: 4500,
    horarios: 'Mario Bravo 1232, Buenos Aires',
    direccion: 'Dirección de la cancha 3',
    id_local: 1
  }
]

export const reservas = [
  {
    id: 1,
    fecha: '2023-09-28',
    horaInicio: '10:00',
    horaFin: '11:00',
    id_usuario: 1,
    id_cancha: 1
  },
  {
    id: 2,
    fecha: '2023-09-29',
    horaInicio: '14:00',
    horaFin: '15:00',
    id_usuario: 2,
    id_cancha: 2
  },
  {
    id: 3,
    fecha: '2023-09-30',
    horaInicio: '14:00',
    horaFin: '16:00',
    id_usuario: 3,
    id_cancha: 1
  },
  {
    id: 4,
    fecha: '2023-10-01',
    horaInicio: '18:00',
    horaFin: '19:00',
    id_usuario: 4,
    id_cancha: 3
  },
  {
    id: 5,
    fecha: '2023-10-05',
    horaInicio: '20:00',
    horaFin: '21:00',
    id_usuario: 1,
    id_cancha: 3
  }
]

export const locales = [
  {
    id_local: 1,
    nombre: 'Local A',
    direccion: 'Dirección A',
    contacto: 'Contacto A'
  },
  {
    id_local: 2,
    nombre: 'Local B',
    direccion: 'Dirección B',
    contacto: 'Contacto B'
  },
  {
    id_local: 3,
    nombre: 'Local C',
    direccion: 'Dirección C',
    contacto: 'Contacto C'
  }
]

export const galeriasCanchas = [
  {
    id: 1,
    id_cancha: 2,
    imagenes: ['https://lh5.googleusercontent.com/p/AF1QipOPsNDDYfl6UUzI0SOVAeNqXsp7C4q8haNjl811=w426-h240-k-no', 'https://lh3.googleusercontent.com/p/AF1QipO1ucnt4PiPEhcpRWWL5p6ARJN3uqmoLj7zbFgt=w960-h960-n-o-v1']
  },
  {
    id: 2,
    id_cancha: 1,
    imagenes: ['https://lh5.googleusercontent.com/p/AF1QipNsbUPs19VJnUxXHsOlpj-cYa82E0MPiWECjsQh=w408-h306-k-no']
  },
  {
    id: 3,
    id_cancha: 3,
    imagenes: ['https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg']
  }
]

export const galeriasLocales = [
  {
    id: 1,
    id_local: 1,
    imagenes: ['imagenA.jpg', 'imagenB.jpg']
  },
  {
    id: 2,
    id_local: 2,
    imagenes: ['imagenC.jpg', 'imagenD.jpg']
  },
  {
    id: 3,
    id_local: 3,
    imagenes: ['imagenE.jpg', 'imagenF.jpg']
  }
]

export const torneos = [
  {
    id_torneo: 1,
    nombre: 'Torneo 1',
    id_local: 1,
    cupos: 10,
    fecha_inicio: '2023-09-28',
    precio: 30000
  },
  {
    id_torneo: 2,
    nombre: 'Torneo 2',
    id_local: 2,
    cupos: 20,
    fecha_inicio: '2023-09-29',
    precio: 40000
  },
  {
    id_torneo: 3,
    nombre: 'Torneo 3',
    id_local: 3,
    cupos: 30,
    fecha_inicio: '2023-09-30',
    precio: 50000
  }
]

export const inscripcionTorneo = [
  {
    id: 1,
    id_equipo: 1,
    id_torneo: 1
  },
  {
    id_inscripcion: 2,
    id_equipo: 2,
    id_torneo: 1
  },
  {
    id_inscripcion: 3,
    id_equipo: 2,
    id_torneo: 1
  },
  {
    _id: 3,
    id_equipo: 3,
    id_torneo: 2
  }
]
// fin
