'use strict';

module.exports = function(sequelize, DataTypes) {
    var Campaign = sequelize.define(
        'Campaign',
        {
            title: { type: DataTypes.STRING },
            icon_path: { type: DataTypes.STRING },
            price: { type: DataTypes.FLOAT },
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,
            underscored: true,
            tableName: 'campaigns',
        },
    );

    return Campaign;
};
