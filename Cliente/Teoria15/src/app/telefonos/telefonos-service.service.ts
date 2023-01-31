import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelefonosServiceService {

  telefonos:Telefono[];

  constructor() { 
    this.telefonos=[new Telefono("AA","1233322")];
  }

  listTelefonos():Telefono[]{
    return this.telefonos;
  }

  addTelefono(telefono:Telefono){
    this.telefonos.push(telefono);
  }

  updateTelefono(telefono:Telefono){
    const index=this.telefonos.indexOf(telefono);
    if(index>-1){
      this.telefonos[index]=telefono;
    }
  }

  removeTelefono(telefono:Telefono){
    const index=this.telefonos.indexOf(telefono);
    if(index>-1){
      this.telefonos.splice(index,1);
    }
  }
}

export class Telefono{
  _name;
  _telf;
  constructor(name:String, telf:String){
    this._name=name;
    this._telf=telf;
  }

  get name(){
    return this._name;
  }

  get telf(){
    return this._telf;
  }
}
