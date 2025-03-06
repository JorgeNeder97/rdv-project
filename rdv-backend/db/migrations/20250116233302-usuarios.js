"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("usuarios", { 
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            nombre: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            apellido: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            contraseña: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('usuarios');
    },
};
