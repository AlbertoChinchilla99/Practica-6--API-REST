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
    const newCinema = new Cinema(req.body)

    newCinema._id = id
    const cinemaUpdated = await Cinema.findByIdAndUpdate(id, newCinema, {
      new: true
    })
    return res.status(200).json(cinemaUpdated)
  } catch (error) {
    return res.status(400).json('error')
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
