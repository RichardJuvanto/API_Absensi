const db = require("../models");
const Pegawai = db.pegawai;

exports.create = (req, res) => {
    const pegawai = new Pegawai({
        nama: req.body.nama,
        posisi: req.body.posisi,
        provinsi: req.body.provinsi,
        kecamatan: req.body.kecamatan,
        kota: req.body.kota,
        alamat: req.body.alamat,
    });

    pegawai.save(pegawai).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Pegawai.",
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Pegawai.findById(id)
        .then((data) => {
            if (!data) res.status(404).send({ message: "Not found with id " + id });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({ message: "Error retrieving with id=" + id });
        });
};

exports.findAll = (req, res) => {
    const nama = req.query.nama;
    var condition = nama
        ? { nama: { $regex: new RegExp(nama), $options: "i" } }
        : {};

    Pegawai.find(condition)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving.",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Pegawai.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Pegawai with id=${id}. Maybe Pegawai was not found!`,
                });
            } else res.send({ message: "Pegawai was updated successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating Pegawai with id=" + id,
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Pegawai.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Pegawai with id=${id}. Maybe Pegawai was not found!`,
                });
            } else {
                res.send({
                    message: "Pegawai was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Pegawai with id=" + id,
            });
        });
};