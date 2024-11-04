# Práctica 6 - API REST

**Proyecto académico:** Desarrollo de una **API REST** como ejercicio práctico para explorar conceptos de desarrollo backend. La API gestiona dos modelos principales: Cinemas y Películas. Ofrece endpoints para:

- **Crear:** Nuevas películas y cines.
- **Leer:** Listados completos o individuales de películas y cines.
- **Actualizar:** Modificar la información de películas y cines existentes.
- **Eliminar:** Borrar películas y cines de la base de datos.



## Tecnologías utilizadas


Esta **API REST**, construida con **Node.js** y **Express**, utiliza **MongoDB** como base de datos para gestionar información sobre Cinemas y Películas. Permite realizar operaciones CRUD a través de endpoints intuitivos.

## Funcionalidades clave

- **Gestión de cines:** Crear, leer, actualizar y eliminar registros de cines, incluyendo información como dirección, capacidad, etc.
- **Gestión de películas:** Crear, leer, actualizar y eliminar registros de películas, incluyendo título, género, director, etc.
- **Relaciones:** Establecer relaciones entre cines y películas (es este caso las peliculas estarian dentro de los cines a modo de cartelera).



## Endpoints Cinema



| NAME | METHOD |ENDPOINT | QUERY PARAMS |
| --- | --- |---| ---|
| GETCINEMAS | GET |/ | --- |
| GETCINEMA | GET |/:ID | --- |
| POSTCINEMA | POST |/ | {address, name, movies} |
| UPDATECINEMAS | PUT |/:ID | cinema params |
| DELETECINEMAS | DELETE |/:ID | --- |


## Endpoints Movie



| NAME | METHOD |ENDPOINT | QUERY PARAMS |
| --- | --- |---| ---|
| GETMOVIES | GET |/ | --- |
| POSTMOVIES | POST |/ | {title, duration, categories, img} |
| UPDATEMOVIES | PUT |/:ID | movies params |
| DELETEMOVIES | DELETE |/:ID | --- |


