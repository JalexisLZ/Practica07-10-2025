const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    correo: { type: String, required: true, unique: true },
    clave: { type: String, required: true }
});

MediaSourceHandle.exports = mongoose.model("Usuario", usuarioSchema);