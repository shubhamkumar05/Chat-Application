import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule,Routes } from '@angular/router';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char.pipe';
import { SharedModule } from '../shared/shared.module';
//import { UserDetailsComponent } from '../user-details/user-details.component';
//import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { SocketService } from '../socket.service';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';

@NgModule({
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  imports: [
  
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forChild([
      {path:'chat-box',component:ChatBoxComponent},
    ]),
    SharedModule
  ],
  
  providers:[SocketService]
})
export class ChatModule { }
