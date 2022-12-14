const { db, DataTypes } = require('../utils/dataBase.util');

const Personaje = db.define('personaje', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
    imagen: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	edad: {
		type: DataTypes.INTEGER,
		allowNull: false,		
	},
    peso: {
		type: DataTypes.FLOAT,
		allowNull: false,
	},
    historia: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { Personaje };
