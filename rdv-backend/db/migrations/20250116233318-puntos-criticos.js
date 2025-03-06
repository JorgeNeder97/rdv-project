"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("puntos-criticos", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'usuarios',
                    },
                    key: 'id',
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            nombre: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            puntaje: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("puntos-criticos");
    },
};
