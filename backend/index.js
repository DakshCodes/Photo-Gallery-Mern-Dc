const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require('./routes/UploadRoute.js')


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


const PORT = 6010;

mongoose.connect(process.env.MONGO_URI, () => {
    console.log("MongoDB Connected....");
})

app.use(UploadRoute);
// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "Client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server Started At Port ${PORT}`);
});
