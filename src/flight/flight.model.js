import { DataTypes } from "sequelize";
import sequelize from '../config/database/database.js'

const Flight = sequelize.define('flight', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'flight_id'
    },
    originId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'origin_id'
    },
    destinationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'destination_id'
    },
    planeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'plane_id'
    },
    departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'departure_time'
    },
    chekIn: {
        type: DataTypes.DATE,
        field: 'check_in'
    },
    status: {
        type: DataTypes.ENUM('pending', 'inProgress', 'done', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
    }
})

export default Flight