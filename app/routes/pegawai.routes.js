module.exports = (app) => {
    const pegawai = require("../controller/pegawai.controller.js");
    
    var router = require("express").Router();
    
    router.post("/", pegawai.create);
    
    router.get("/", pegawai.findAll);

    router.get("/:id", pegawai.findOne);

    router.put("/:id", pegawai.update);
    
    router.delete("/:id", pegawai.delete);
    
    app.use("/api/pegawai", router);
   };
   