import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent {
  _persona:Array<Persona>;
  personaForm;
  personaGanador:Persona|null;
  constructor(private formBuilder:FormBuilder){
    this._persona = new Array();
    this.addPersona("Patito de goma rosa");
    this.personaForm = formBuilder.group(
      {
      'name':''
      }
    )
    this.personaGanador= null;
  }
  onSubmit(personaData:any){
    this.addPersona(personaData.name);
  }
  get Personas():Array<Persona>{
    return this._persona;
  }
  addPersona(nombre:String){
    this._persona.push(new Persona(this._persona.length,nombre));
  }
  
  borrarPersona(id:number){
    this._persona.splice(id,1);
  }
  obtenerGanador(){
    if(this._persona.length == 0){
      this.personaGanador = new Persona(0, "No hay ninguna persona introducida");
    }else{
      let _numRandom:number = Math.floor(Math.random()*this._persona.length);
      this.personaGanador= this._persona[_numRandom];
    }
   
  }
}
export class Persona{
  _nombre:String;
  _id:number;
  constructor(id:number,nombre:String){
      this._nombre=nombre;
      this._id = id;
  }
  get ID():number{
    return this._id;
  }
  get Nombre():String{
    return this._nombre;
  }
}