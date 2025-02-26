import { Routes } from '@angular/router';
import { ShowMedicosComponent } from './components/show-medicos/show-medicos.component';
import { CreateMedicoComponent } from './components/create-medico/create-medico.component';

export const routes: Routes = [
 {path:'medicos',component: ShowMedicosComponent},
{path:'medico',component:CreateMedicoComponent},

];
