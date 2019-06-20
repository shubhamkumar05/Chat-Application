import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCharComponent } from './first-char/first-char.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//import { RemoveSpecialCharPipe } from './pipe/remove-special-char.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [FirstCharComponent, UserDetailsComponent],
  imports: [
    CommonModule
  ],
  //declarations: [FirstCharComponent, UserDetailsComponent],
  exports:[
    UserDetailsComponent,
    FirstCharComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
