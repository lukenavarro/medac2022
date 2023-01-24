class Articulo{
    #id
    #nombre
    #precioBase
    #rebajado

    constructor(id,nombre,precioBase,rebajado){
        this.#id=id;
        this.#nombre=nombre;
        this.#precioBase=precioBase;
        this.#rebajado=rebajado;
    }

    get id(){
        return this.#id;
    }

    set id(value){
        this.#id=value;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(value){
        this.#nombre=value;
    }

    get precioBase(){
        return this.#precioBase;
    }

    set precioBase(value){
        this.#precioBase=value;
    }

    get rebajado(){
        return this.#rebajado;
    }

    set rebajado(value){
        this.#rebajado=value;
    }

    getNombreCompleto(){
        return `(${this.id}) ${this.nombre.toUpperCase()} - ${this.getPrecioReal()}`;
    }

    getPrecioReal(){
        return this.rebajado ? this.precioBase / 2: this.precioBase;
    }
}