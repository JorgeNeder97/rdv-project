"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("habitos", { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            punto_critico_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: {
                        tableName: 'puntos-criticos',
                    },
                    key: 'id',
                },
                allowNull: false,
                onDelete: 'CASCADE',
            },
            nombre: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            descripcion: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            puntos_acumulados: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('habitos');
    },
};
