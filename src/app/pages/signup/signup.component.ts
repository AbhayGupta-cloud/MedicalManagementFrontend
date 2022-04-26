import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };
  ngOnInit(): void {
  }
  formSubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      //alert("User Is Required");
      this.snack.open("Username is Required !! ",'Dismiss',{duration:3000,
      verticalPosition:'top'
      });
      return;
    }
    //addUser:userService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data)
       // alert("success")
       Swal.fire('Success','User Id Is'+data.id,'success')
      },
      (error)=>{
        console.log(error);
        //alert('Something Went Wrong');
        this.snack.open('Something Went Wrong!!','',{
          duration:1000,
        });
      }
    )
  }
}
