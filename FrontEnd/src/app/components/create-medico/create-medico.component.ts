import { Component } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Route, Router } from '@angular/router';
import { Medico } from '../../interfaces/Medico';
import { FormsModule } from '@angular/forms';
import { FormFieldsComponent } from '../../form-fields/form-fields.component';

@Component({
  selector: 'app-create-medico',
  imports: [FormFieldsComponent],
  templateUrl: './create-medico.component.html',
  styleUrl: './create-medico.component.css'
})
export class CreateMedicoComponent {
constructor( private medicoService:MedicoService,private router:Router){
 
}


onFormSubmit(medico:Medico){
  this.medicoService.createMedico(medico).subscribe({
  next:()=>{
    this.router.navigateByUrl("/show")
  },error:(error)=>{
    console.log(error);
  }
  })
}




}
