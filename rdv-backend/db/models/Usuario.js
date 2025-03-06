module.exports = (sequelize, DataTypes) => {
    const alias = 'Usuario';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        contraseña: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    };
    const config = {
        tableName: 'usuarios',
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.hasMany(models.PuntoCritico, {
            as: 'usuario_punto-critico',
            foreignKey: 'usuario_id',
        });
    }

    return Usuario;
}