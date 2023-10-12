import Flight from "./flight.model.js";

export class FlightService {

    async findAllflights() {
        return await Flight.findAll()
    }

    async createFlight(data) {
        return await Flight.create(data)
    }

    async findOneFlight(id) {
        return await Flight.findOne({
            where: {
                id: id
            }
        })
    }

    async updateFlight(flight, data) {
        return await flight.update(data)
    }

    async deleteFlight(flight) {
        return await flight.update({ status: true })
    }
}