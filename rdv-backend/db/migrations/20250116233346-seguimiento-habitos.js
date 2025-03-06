"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("seguimiento-habitos", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            habito_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'habitos',
                    },
                    key: 'id',
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            fecha: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            estado: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            puntos: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("seguimiento-habitos");
    },
};
