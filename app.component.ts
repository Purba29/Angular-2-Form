import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ErrorHandler} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
        })
export class AppComponent {
  public submitted:any;
  public userForm:any;

  onSubmit(value:any,userForm:any) {
    this.submitted = true;
    this.userForm ;

    console.log(userForm.valid?value:'')
  }
    
  }

