//! CRUD -> CREATER READ UPDATE DELETE
const Movie = require('../models/movie')

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    return res.status(200).json(movies)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const postMovies = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body)
    const movieSaved = await newMovie.save()
    return res.status(201).json(movieSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

const updateMovies = async (req, res, next) => {
  try {
    const { id } = req.params
    const newMovie = new Movie(req.body)

    newMovie._id = id
    const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, {
      new: true
    })
    return res.status(200).json(movieUpdated)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const deleteMovies = async (req, res, next) => {
  try {
    const { id } = req.params
    const movieDeleted = await Movie.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: movieDeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies
}
