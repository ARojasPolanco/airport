import { validateFlight, validatePartialFlight } from "./flight.schema.js"
import { FlightService } from "./flight.service.js"


const flightService = new FlightService()

export const findAllFlights = async (req, res) => {
    try {
        const flight = await flightService.findAllflights()

        return res.json(flight)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const createFlight = async (req, res) => {
    try {
        const { hasError, errorMessages, flightData } = validateFlight(req.body);

        if (hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages,
            });
        }

        const flight = await flightService.create(flightData);

        return res.status(200).json(flight)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findOneFlight = async (req, res) => {
    try {

        const { id } = req.params

        const flight = await flightService.findOneFlight(id)

        if (!flight) {
            return res.status(404).json({
                status: 'error',
                message: `Flight whit id ${id} not found`
            })
        }

        res.json(flight)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const updateFlight = async (req, res) => {
    try {

        const { hasError, errorMessages, flightData } = validatePartialFlight(
            req.body
        );

        if (hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages,
            });
        }

        const { id } = req.params;

        const flight = await flightService.findOne(id);

        if (!flight) {
            return res.status(404).json({
                status: 'error',
                message: `Flight whit id ${id} not found`
            })
        }

        const updatedFlight = await flightService.update(flight, flightData);

        return res.status(200).json(updatedFlight);
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deleteFlight = async (req, res) => {
    try {

        const { id } = req.params

        const flight = await flightService.findOneFlight(id)

        if (!flight) {
            return res.status(404).json({
                status: 'error',
                message: `Flight whit id ${id} not found`
            })
        }

        await flightService.deleteFlight(flight)

        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json(error)
    }
}