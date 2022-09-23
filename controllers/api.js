'use strict';

let {Sequelize, sequelize} = require('../service/db');

exports.creator = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        let user = await db.sequelize.query(
            'SELECT * FROM creator b\n' +
            'WHERE id=$1\n',
            { bind: [creatorId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.campaign = async (req, res) => {
    try {
        const campaignId = req.query.campaign_id;
        let user = await db.sequelize.query(
            'SELECT * FROM campaign b\n' +
            'WHERE id=$1\n',
            { bind: [campaignId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.media = async (req, res) => {
    try {
        const mediaId = req.query.media_id;
        let user = await db.sequelize.query(
            'SELECT * FROM media b\n' +
            'WHERE id=$1\n',
            { bind: [mediaId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.offers = async (req, res) => {
    try {
        const offersId = req.query.offers_id;
        let user = await db.sequelize.query(
            'SELECT * FROM offers b\n' +
            'WHERE id=$1\n',
            { bind: [offersId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.published_campaign.destroy = async (req, res) => {
    try {
        const published_campaignId = req.query.published_campaign_id;
        let row_to_delete = await db.sequelize.query(
            'SELECT * FROM published_campaign\n' +
            'WHERE timeStamp <= DATE_SUB(NOW(), INTERVAL 1 DAY'
        );
        res.send(row_to_delete[0]);
        if (row_to_delete) {
            await row.destroy();
    }
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};
