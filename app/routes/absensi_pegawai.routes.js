module.exports = (app) => {
    const absensi = require("../controller/absensi_pegawai.controller.js");
    
    var router = require("express").Router();
    
    router.post("/", absensi.create);
    
    router.get("/", absensi.findAll);

    router.get("/detail/:id", absensi.findOne);

    router.put("/:id", absensi.update);
    
    router.delete("/:id", absensi.delete);

    router.get("/laporan", absensi.laporan);
    
    app.use("/api/absensi", router);
   };
   