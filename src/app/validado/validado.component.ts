import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validado',
  templateUrl: './validado.component.html',
  styleUrls: ['./validado.component.css']
})
export class ValidadoComponent implements OnInit {

  public miForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.miForm = this.fb.group({
      'nombre': ['', [Validators.required, Validators.maxLength(10)]]
    });

  }

  ngOnInit(): void {
  }

  aceptar() {

    console.log(this.miForm.getRawValue());
  }

}
