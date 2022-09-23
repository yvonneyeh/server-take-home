'use strict';

module.exports = function(sequelize, DataTypes) {
    var Publisher = sequelize.define(
        'Publisher',
        {
            title: { type: DataTypes.STRING }
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,
            underscored: true,
            tableName: 'publishers',
        },
    );

    return Publisher;
};
