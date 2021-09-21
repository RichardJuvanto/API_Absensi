module.exports = (mongoose) => {
    const Absensi = mongoose.model("absensi_pegawai",
    mongoose.Schema({
        nama: String,
        keterangan: String,
        telat: Boolean,
    },{
        timestamps: true
    })
    );
    return Absensi;
}