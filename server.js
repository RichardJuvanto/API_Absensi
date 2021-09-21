const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
require("./app/routes/absensi_pegawai.routes.js")(app);
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
   console.log(`Server backend port ${PORT}.`);
});