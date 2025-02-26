import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Medico } from '../interfaces/Medico';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {


  formMedico!: FormGroup;
  
  @Output() submitValues: EventEmitter<Medico> = new EventEmitter<Medico>();

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formMedico = this.formBuilder.group({
      nombres: [''],
      apellidos: ['']
    });
  }
  onSubmit() {
    this.submitValues.emit(this.formMedico.value);
    }
}
