import Plane from './plane.model.js'

export class PlaneService {

    async findAllPlanes() {
        return await Plane.findAll()
    }

    async createPlane(data) {
        return await Plane.create(data)
    }

    async findOnePlane(id) {
        return await Plane.findOne({
            where: {
                id: id,
            }
        })
    }

    async updatePlane(plane, data) {
        return await plane.update(data)
    }

    async deletePlane(plane) {
        return await plane.update({ status: false })
    }
}