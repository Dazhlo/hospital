import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../interfaces/medico';


@Component({
  selector: 'app-show-medicos',
  imports: [NgFor],
  templateUrl: './show-medicos.component.html',
  styleUrl: './show-medicos.component.css'
})
export class ShowMedicosComponent implements OnInit {

 medicos: Medico[]=[];


   constructor(private medicoService:MedicoService){

   }

  ngOnInit(): void {
   this.medicoService.getMedicos().subscribe((res:any)=>{
  this.medicos=res;

   })
  }


}
