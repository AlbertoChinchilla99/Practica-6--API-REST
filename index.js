require('dotenv').config()
const express = require('express')
// importar la función
const { connectDB } = require('./src/config/db')
const { Movie } = require('./src/api/models/movie.js')
const moviesRouter = require('./src/api/routes/movie.js')
const cinemasRouter = require('./src/api/routes/cinema.js')

const app = express()

// conectar con la bbdd
connectDB()

//Linea para configurar que mi servidor sea capaz de coger datos en json
app.use(express.json())

app.use('/api/v1/movies', moviesRouter)
app.use('/api/v1/cinemas', cinemasRouter)

app.use('/saludar', (req, res) => {
  return res.status(200).json('Hola!')
})

app.use('*', (req, res, next) => {
  return res.status(404).json('Route Not Found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
