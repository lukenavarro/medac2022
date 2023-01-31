import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Telefono, TelefonosServiceService } from '../telefonos-service.service';

@Component({
  selector: 'app-listin',
  templateUrl: './listin.component.html',
  styleUrls: ['./listin.component.css']
})
export class ListinComponent implements OnInit {

  telefonosService: TelefonosServiceService | null;
  telefonoForm;
  constructor(private formBuilder:FormBuilder){
    this.telefonosService=null;
    this.telefonoForm=formBuilder.group(
      {
        "name": '',
        "telf": ''
      }
    );
  }

  onSubmit(telefonoData:any){
    console.log(telefonoData);
    this.telefonosService?.addTelefono(new Telefono(telefonoData.name,telefonoData.telf));
  }

  ngOnInit(): void {
    this.telefonosService=new TelefonosServiceService();
  }

  get telefonos():Telefono[]{

    return (this.telefonosService)?this.telefonosService.listTelefonos():[];
  }

}
