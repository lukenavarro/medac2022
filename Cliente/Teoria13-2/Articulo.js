"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor(nombre, precioBase, rebajado) {
        this._id = 0;
        this._id++;
        this._nombre = nombre;
        this._precioBase = precioBase;
        this._precioRebajado = rebajado;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precioBase() {
        return this._precioBase;
    }
    set preciobase(precioBase) {
        this._precioBase = precioBase;
    }
    get precioRebajado() {
        return this._precioRebajado;
    }
    set precioRebajado(precioRebajado) {
        this._precioRebajado = precioRebajado;
    }
    getNombreCompleto() {
        return `El nombre completo del Articulo es: ${this._id} - ${this._nombre} y su precio es: ${this._precioBase} `;
    }
    getPrecioRebajado() {
        return this._precioRebajado ? this._precioBase / 2 : this._precioBase;
    }
}
exports.Articulo = Articulo;
