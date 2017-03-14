/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let express = require('express');
let bodyParser = require('body-parser');

module.exports = (options) => {

    let service = options.service;
    let router = express.Router();

    router.post('/metadata', function (req, res) {
        let data = req.body.data;

        //{ "id_uploader": int, "title": string , "tags": string array}
        console.log(data);
        service.client.act({role:"uploader", cmd:"add"}, data, console.log);
        res.sendStatus(200);
    });

    return router;
};
