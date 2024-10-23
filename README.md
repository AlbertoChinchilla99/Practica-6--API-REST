# Práctica 6 - API REST

En este proyecto he hecho dos colecciones: "Movies" y "Cinemas", ambas tienes el CRUD completo y los endpoints creados en insomnia. Los endpoints son
los siguientes:

- Get: recibe elementos de la colección
- Post: sube nuevos elementos a la colección
- Put: actualiza elementos en la colección
- Delete: elimina elementos en la colección

## Movies

Cada movie consta de las siguientes características:

- Title: el título de la película
- Duration: la duración de la película
- Categories: categoria de la película (actualmente solo puede tener 1)
- Img: una imagen de la película mediante url


## Cinemas

Cada Cinema cosnta de las siguientes características:

- Address: la dirección del cine
- Name: el nombre del cine
- Movies: las películas que estarían en el cine (vienen de la colección de "Movies")

## Conexión entre galerias

Ambas galerias estan conectadas, cuando se actualiza alguna información en alguna Movie tambien se ve reflejado en el cinema.
