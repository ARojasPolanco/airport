import { validatePartialPlane, validatePlane } from "./plane.schema.js"
import { PlaneService } from "./plane.service.js"


const planeService = new PlaneService()

export const findAllPlanes = async (_, res) => {
    try {

        const plane = await planeService.findAllPlanes()

        return res.json(plane)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const createPlane = async (req, res) => {
    try {

        const { hasError, errorMessages, PlaneData } = validatePlane(req.body)

        if (hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }

        const repair = await planeService.createPlane(req.body)

        return res.status(201).json(repair, PlaneData)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const findOnePlane = async (req, res) => {

    try {

        const { id } = req.params

        const plane = await planeService.findOnePlane(id)

        if (!plane) {
            return res.status(404).json({
                status: 'error',
                message: `Plane whit id ${id} not found`
            })
        }

        return res.json(plane)

    } catch (error) {
        return res.status(500).json(error)
    }

}

export const updatePlane = async (req, res) => {
    try {

        const { hasError, errorMessages, planeData } = validatePartialPlane(req.body)

        if (hasError) {
            return res.status(422).json({
                status: 'error',
                message: errorMessages
            })
        }

        const { id } = req.params

        const plane = await planeService.findOnePlane(id)

        if (!plane) {
            return res.status(404).json({
                status: 'error',
                message: `Plane whit id ${id} not found`
            })
        }

        const updatePlane = await planeService.updatePlane(plane, planeData)

        return res.json(updatePlane)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const deletePlane = async (req, res) => {

    try {
        const { id } = req.params

        const plane = await planeService.findOnePlane(id)

        if (!plane) {
            return res.status(404).json({
                status: 'error',
                message: `Plane whit id ${id} not found`
            })
        }

        await planeService.deletePlane(plane)

        return res.status(204).json(null)
    } catch (error) {
        return res.status(500).json(error)
    }
}

