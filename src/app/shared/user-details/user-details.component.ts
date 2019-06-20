import { Component, OnInit ,OnChanges,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() userFirstName : any;
  //console.log(userFirstName);
  @Input() UserLastName: any;
  @Input() userStatus : string ;
  @Input() messageRead: string;

  public  firstChar :string;

  

  @Output() userNameAppear: EventEmitter<string>=new EventEmitter<string>();

  constructor() {
    console.log("user-detail component is called");
   }

  ngOnInit() :void{
    console.log("user-deatails called oninit");
    this.firstChar=this.userFirstName[0];
  }

}
