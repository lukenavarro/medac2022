import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'agenciaTelefonica',
  templateUrl: './agencia-telefonica.component.html',
  styleUrls: ['./agencia-telefonica.component.css']
})
export class AgenciaTelefonicaComponent {
  _arrayContactos:Array<Contacto>;
  telefonoForm;

  constructor(private formBuilder:FormBuilder){
    this._arrayContactos = new Array();
    this.addContacto("Fran",123456789);
    this.telefonoForm = formBuilder.group({
      'nombre':'',
      'telefono':''
    })
  }
  addContacto(nombre:String,telefono:number){
    this._arrayContactos.push(new Contacto(this._arrayContactos.length+1,nombre,telefono)); 
  }
  borrarContacto(id:number){
    this._arrayContactos.splice(id,1);
  }
  onSubmit(data:any){
    this.addContacto(data.nombre,data.telefono);
  }
  get ArrayContactos():Array<Contacto>{
    return this._arrayContactos;
  }


}

export class Contacto{
  _id:number;
  _nombre:String;
  _telefono:number;

  constructor(id:number,nombre:String,telefono:number){
    this._id = id;
    this._nombre=nombre;
    this._telefono=telefono;
  }
  getId():number{
    return this._id;
  }
  getNombre():String{
    return this._nombre;
  }
  getTelefono():number{
    return this._telefono;
  }
}
