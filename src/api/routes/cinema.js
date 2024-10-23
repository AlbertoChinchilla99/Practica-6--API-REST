const {
  getCinemas,
  postCinemas,
  updateCinemas,
  deleteCinemas,
  getCinema
} = require('../controllers/cinema')

const cinemasRouter = require('express').Router()

cinemasRouter.get('/', getCinemas)
cinemasRouter.post('/', postCinemas)
cinemasRouter.put('/:id', updateCinemas)
cinemasRouter.delete('/:id', deleteCinemas)
cinemasRouter.get('/:id', getCinema)

module.exports = cinemasRouter
