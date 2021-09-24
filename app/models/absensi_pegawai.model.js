module.exports = (mongoose) => {
    const { Schema } = require("mongoose");
    const Absensi = mongoose.model("absensi_pegawai",
    mongoose.Schema({
        id_pegawai: {
            type: Schema.Types.ObjectId,
            ref: 'pegawai',
        },
        tanggal: Date,
        keterangan: String,
    },{
        timestamps: true
    })
    );
    return Absensi;
}