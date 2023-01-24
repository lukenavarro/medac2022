export class Articulo{
    private _id:number = 0;
    private _nombre:String;
    private _precioBase:number;
    private _precioRebajado:boolean;

   constructor (nombre: String,precioBase:number,rebajado:boolean){
        this._id++;
        this._nombre= nombre;
        this._precioBase= precioBase;
        this._precioRebajado=rebajado;
    }
    
    get id():number{
        return this._id;
    }
    
    set id(id:number){
        this._id = id;
    }
    get nombre():String{
        return this._nombre;
    }

    set nombre(nombre:String){
        this._nombre=nombre;
    }
    get precioBase():number{
        return this._precioBase;
    }
    set preciobase(precioBase:number){
        this._precioBase=precioBase;
    }
    get precioRebajado():boolean{
        return this._precioRebajado;
    }
    set precioRebajado(precioRebajado:boolean){
        this._precioRebajado=precioRebajado;
    }
    getNombreCompleto():string{
        return `El nombre completo del Articulo es: ${this._id} - ${this._nombre} y su precio es: ${this._precioBase} `
    }

    getPrecioRebajado():number{
        return this._precioRebajado ? this._precioBase/2 : this._precioBase;
    }

}


