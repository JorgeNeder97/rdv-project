module.exports = (sequelize, DataTypes) => {
    const alias = 'PuntoCritico';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        puntaje: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    };
    const config = {
        tableName: 'puntos-criticos',
        timestamps: false,
    };

    const PuntoCritico = sequelize.define(alias, cols, config);

    PuntoCritico.associate = (models) => {
        PuntoCritico.belongsTo(models.Usuario, {
            as: 'usuario_punto-critico',
            foreignKey: 'usuario_id',
        });

        PuntoCritico.hasMany(models.Habito, {
            as: 'punto-critico_habito',
            foreignKey: 'punto_critico_id',
        });
    }

    return PuntoCritico;
}