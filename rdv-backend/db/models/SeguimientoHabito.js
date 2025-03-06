model.exports = (sequelize, DataTypes) => {
    const alias = 'SeguimientoHabito';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        habito_id: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        estado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        puntos: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };
    const config = {
        tableName: 'seguimiento-habitos',
        timestamps: false,
    };

    const SeguimientoHabito = sequelize.define(alias, cols, config);

    SeguimientoHabito.associate = (models) => {
        SeguimientoHabito.belongsTo(models.Habito, {
            as: 'habito_seguimiento-habito',
            foreingKey: 'habito_id',
        });
    }

    return SeguimientoHabito;
}