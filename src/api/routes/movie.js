const {
  getMovies,
  postMovies,
  updateMovies,
  deleteMovies
} = require('../controllers/movie')

const moviesRouter = require('express').Router()

moviesRouter.get('/', getMovies)
moviesRouter.post('/', postMovies)
moviesRouter.put('/:id', updateMovies)
moviesRouter.delete('/:id', deleteMovies)

module.exports = moviesRouter
