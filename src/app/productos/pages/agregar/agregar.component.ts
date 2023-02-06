import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', Validators.required ]
  });

  textoCambiado: string = 'Primer Texto';
  color: string = 'green';

  constructor(
    private fb: FormBuilder
  ){}

  isInvalid(campo:string) {
    return this.miFormulario.get(campo)?.invalid
  }
 
  cambiarNombre() {
    this.textoCambiado = 'Segundo Texto'
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
