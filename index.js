/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

//Dependencies

let Promise = require('bluebird');  //jshint ignore:line

let core = require('mms-core');
let serverAPI = require('./api/server/module.js');
let serviceAPI = require('./api/server/module.js');

//Class

class MetadataManager {
    constructor() {
        this.node = "NODE_METADATA_MANAGER";
        this.service = new core.Service(this.node, serviceAPI);
        this.server = new core.Server(this.node, serverAPI, {"service": this.service});
    }
}

//Main

let manager = new MetadataManager();

manager.service.prepare()
.then(() => manager.server.listen());
