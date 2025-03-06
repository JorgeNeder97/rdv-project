module.exports = (sequelize, DataTypes) => {
    const alias = 'Habito';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        punto_critico_id: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        puntos_acumulados: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };
    const config = {
        tableName: 'habitos',
        timestamps: false,
    };

    const Habito = sequelize.define(alias, cols, config);

    Habito.associate = (models) => {
        Habito.belongsTo(models.PuntoCritico, {
            as: 'punto-critico_habito',
            foreignKey: 'punto_critico_id',
        });
        
        Habito.hasMany(models.SeguimientoHabito, {
            as: 'habito_seguimiento-habito',
            foreignKey: 'habito_id',
        });
    }

    return Habito
}