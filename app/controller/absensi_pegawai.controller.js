const db = require("../models");
const Absensi = db.absensi_pegawai;

exports.create = (req, res) => {
  const absensi = new Absensi({
    id_pegawai: req.body.id_pegawai,
    tanggal: new Date(req.body.tanggal).toISOString(),
    keterangan: req.body.keterangan,
  });

  absensi.save(absensi).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Absensi.",
    });
  });

};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Absensi.findById(id)
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

  Absensi.find(condition).populate('id_pegawai')
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

  Absensi.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Absensi with id=${id}. Maybe Absensi was not found!`,
        });
      } else res.send({ message: "Absensi was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Absensi with id=" + id,
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Absensi.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Absensi with id=${id}. Maybe Absensi was not found!`,
        });
      } else {
        res.send({
          message: "Absensi was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Absensi with id=" + id,
      });
    });
};

exports.laporan = async (req, res) => {
  if (req.query.tanggalawal && req.query.tanggalakhir) {
    tglawal = req.query.tanggalawal;
    tglakhir = req.query.tanggalakhir;
    Absensi.aggregate([
      {
        $match:
        {
          tanggal:
          {
            $gte: new Date(tglawal),
            $lte: new Date(tglakhir)
          }
        }
      },
      {
        $group: {
          _id: { id_pegawai: "$id_pegawai", keterangan: "$keterangan" },
          Jumlah: { $sum: 1 },
        }
      }
    ]).then((data) => {
      res.send(data);
    });
  }else{
    Absensi.aggregate([
      {
        $group: {
          _id: { id_pegawai: "$id_pegawai", keterangan: "$keterangan" },
          Jumlah: { $sum: 1 },
        }
      }
    ]).then((data) => {
      res.send(data);
    });
  }
};