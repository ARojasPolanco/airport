import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js"

const Plane = sequelize.define('plane', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'plane_id'
    },
    planeNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'plane_number'
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    maxCapacity: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'max_capacity'
    },
    airline: {
        type: DataTypes.ENUM('Aerolineas Argentinas', 'Flybondi', 'Americans Airlines', 'Jet Smart'),
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

export default Plane