const dbConfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
 
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.absensi_pegawai = require('./absensi_pegawai.model.js')(mongoose);
db.pegawai = require('./pegawai.model.js')(mongoose);
 
module.exports = db;

