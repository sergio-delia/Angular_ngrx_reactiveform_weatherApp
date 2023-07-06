import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatInput } from '@angular/material/input';


import { Store } from '@ngrx/store';
import * as fromRoot from '../../redux/app.reducer'
import * as CITIES from '../../redux/city.action';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Output() inputSubmitted = new EventEmitter<void>();
  reactiveform: FormGroup

  constructor( private store: Store<fromRoot.State> ) { }

  ngOnInit(): void {

    this.reactiveform = new FormGroup({
      nome: new FormControl('Luca'),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    })

  }

  onReactiveSubmit(){
    //console.log(this.reactiveform.value);
    this.inputSubmitted.emit(this.reactiveform.value);
    this.store.dispatch(new CITIES.CityName(this.reactiveform.value.nome))
  }

}
