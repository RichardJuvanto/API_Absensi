module.exports = (mongoose) => {
    const Pegawai = mongoose.model("pegawai",
    mongoose.Schema({
        nama: String,
        posisi: String,
        provinsi: String,
        kecamatan:String,
        kota: String,
        alamat:String,
    },{
        timestamps: true
    })
    );
    return Pegawai;
}