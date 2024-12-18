//! CRUD -> CREATER READ UPDATE DELETE
const Cinema = require('../models/cinema')

const getCinemas = async (req, res, next) => {
  try {
    const Cinemas = await Cinema.find().populate('movies')
    return res.status(200).json(Cinemas)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params
    const cinema = await Cinema.findById(id).populate('movies')
    return res.status(200).json(cinema)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

const postCinemas = async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body)
    const cinemaSaved = await newCinema.save()
    return res.status(201).json(cinemaSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

//! CRUD -> CREATER READ UPDATE DELETE
const Cinema = require('../models/cinema')

const getCinemas = async (req, res, next) => {
  try {
    const Cinemas = await Cinema.find().populate('movies')
    return res.status(200).json(Cinemas)
  } catch (error) {
    return res.status(400).json('error')
  }
}

const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params
    const cinema = await Cinema.findById(id).populate('movies')
    return res.status(200).json(cinema)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

const postCinemas = async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body)
    const cinemaSaved = await newCinema.save()
    return res.status(201).json(cinemaSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json('error')
  }
}

const updateCinemas = async (req, res, next) => {
  try {
    const { id } = req.params
    const updates = req.body

    const cinema = await Cinema.findById(id)
    if (!cinema) {
      return res.status(404).json({ message: 'Cine no encontrado' })
    }

    if (updates.movies) {
      const combinedMovies = [...cinema.movies, ...updates.movies]
      const uniqueMovies = [...new Set(combinedMovies.map(String))]

      updates.movies = uniqueMovies
    }

    if (updates.newMovies) {
      const combinedMovies = [...cinema.movies, ...updates.newMovies]
      const uniqueMovies = [...new Set(combinedMovies.map(String))]

      updates.movies = uniqueMovies
    }

    if (updates.movieIdsToRemove) {
      updates.movies = cinema.movies.filter(
        (movieId) => !updates.movieIdsToRemove.includes(String(movieId))
      )
    }

    const cinemaUpdated = await Cinema.findByIdAndUpdate(id, updates, {
      new: true
    }).populate('movies')

    return res.status(200).json(cinemaUpdated)
  } catch (error) {
    console.error(error)
    return res.status(400).json({ error: 'Error al actualizar el cine' })
  }
}

const deleteCinemas = async (req, res, next) => {
  try {
    const { id } = req.params
    const cinemaDeleted = await Cinema.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: cinemaDeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getCinemas,
  postCinemas,
  updateCinemas,
  deleteCinemas,
  getCinema
}

const deleteCinemas = async (req, res, next) => {
  try {
    const { id } = req.params
    const cinemaDeleted = await Cinema.findByIdAndDelete(id)
    return res.status(200).json({
      message: 'Elemento eliminado',
      elemento: cinemaDeleted
    })
  } catch (error) {
    return res.status(400).json('error')
  }
}

module.exports = {
  getCinemas,
  postCinemas,
  updateCinemas,
  deleteCinemas,
  getCinema
}
