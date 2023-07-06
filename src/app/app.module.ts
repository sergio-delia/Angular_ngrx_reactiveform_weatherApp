import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { MaterialModule } from './modules/material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  //  MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MaterialModule,

    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
