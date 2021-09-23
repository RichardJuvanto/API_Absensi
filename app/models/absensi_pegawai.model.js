const { Schema } = require("mongoose");

module.exports = (mongoose) => {
    const Absensi = mongoose.model("absensi_pegawai",
    mongoose.Schema({
        id_pegawai: {
            type: Schema.Types.ObjectId,
            ref: 'pegawai',
        },
        tanggal: String,
        keterangan: String,
    },{
        timestamps: true
    })
    );
    return Absensi;
}