# FootballConnect, posible proyecto

## Descripción

Entidades:

Usuario: Representa a los usuarios de la plataforma. Pueden ser jugadores, administradores de canchas, equipos, etc.

Cancha: Representa las canchas de fútbol disponibles. Contiene información sobre ubicación, horarios disponibles y costos.

Reserva: Representa una reserva específica realizada por un equipo en una cancha en una fecha y hora determinada.

Equipo: Representa los equipos de fútbol que utilizan la plataforma. Pueden reservar canchas y desafiar a otros equipos.

Partido: Representa un partido de fútbol, que puede ser una reserva confirmada o un partido desafiado entre equipos.

Galería de Canchas: Representa las imágenes y servicios adicionales ofrecidos por cada cancha.

Torneo/Evento: Representa los torneos y eventos especiales que se organizan en la plataforma.

Relaciones:

Un Usuario puede estar asociado con uno o varios Equipos.
Un Usuario puede realizar una o varias Reservas.
Una Cancha puede tener varias Reservas.
Un Equipo puede reservar varias Canchas.
Un Partido está relacionado con una Reserva o con un desafío entre Equipos.
Un Partido puede estar asociado con una Cancha.
Una Cancha puede tener una Galería de Canchas.
Una Cancha puede tener información de precios y servicios adicionales en la Galería de Canchas.
Un Torneo/Evento puede tener varios Equipos participantes.
A continuación, te proporciono un esquema muy simplificado del MER para FootballConnect:

+----------------+        +--------------+       +--------------+
|   Usuario      |        |    Cancha    |       |    Reserva   |
+----------------+        +--------------+       +--------------+
| id_usuario (PK)|        | id_cancha (PK)|       | id_reserva (PK)|
| nombre         |        | nombre       |       | fecha_hora    |
| email          |        | ubicacion    |       | costo         |
| ...            |        | horarios     |       | id_cancha (FK)|
|                |        | costo_hora   |       | id_usuario (FK)|
+----------------+        | ...          |       +--------------+
                          |              |
                          |              |
                          |              |
+----------------+        |              |       +--------------+
|    Equipo      |        |   Galería    |       |    Partido   |
+----------------+        +--------------+       +--------------+
| id_equipo (PK) |       | id_galeria (PK)|     | id_partido (PK)|
| nombre         |       | id_cancha (FK) |     | fecha_hora    |
| ...            |       | imagenes       |     | id_reserva (FK)|
|                |       | precio_servicio|     | id_equipo1 (FK)|
+----------------+       +--------------+       | id_equipo2 (FK)|
                                                 +--------------+
+----------------+
| Torneo/Evento  |
+----------------+
| id_torneo (PK) |
| nombre         |
| fecha          |
| ...            |
+----------------+
