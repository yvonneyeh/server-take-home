'use strict';

if (!global.hasOwnProperty('db')) {
    let {Sequelize, sequelize} = require('../service/db');

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Creator: require(__dirname + '/creator')(sequelize, Sequelize.DataTypes),
        Install: require(__dirname + '/install')(sequelize, Sequelize.DataTypes),
        Campaign: require(__dirname + '/campaign')(sequelize, Sequelize.DataTypes),
        Media: require(__dirname + '/media')(sequelize, Sequelize.DataTypes),
        Publisher: require(__dirname + '/publisher')(sequelize, Sequelize.DataTypes),
        
    };

    global.db.Creator.hasMany(global.db.Install, {
        onDelete: 'cascade',
        foreignKey: 'creator_id',
    });

    global.db.Install.belongsTo(global.db.Campaign, {
        onDelete: 'cascade',
        foreignKey: 'campaign_id',
    });

    global.db.Creator.hasMany(global.db.Campaign,{
        foreignKey: 'creator_id',
        foriegnKey: 'campaign_id'
    });

    global.db.Media.hasMany(global.db.Campaign,{
        foreignKey: 'media_id',
        foriegnKey: 'campaign_id'
    });
}