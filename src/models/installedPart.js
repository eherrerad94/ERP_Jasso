import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const InstalledPartSchema = new Schema({
    id: { type: String },
    folio_del_servicio: { type: String },
    clave: { type: String },
    descripcion: { type: String },
    cantidad: { type: Number },
    precio: { type: Number },

});

module.exports = mongoose.model('InstalledPart', InstalledPartSchema);