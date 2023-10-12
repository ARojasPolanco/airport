import { Router } from 'express'
import {
    findAllFlights,
    createFlight,
    findOneFlight,
    updateFlight,
    deleteFlight
} from './flight.controller.js'


export const router = Router()

router.route('/')
    .get(findAllFlights)
    .post(createFlight)

router.route('/:id')
    .get(findOneFlight)
    .patch(updateFlight)
    .delete(deleteFlight)