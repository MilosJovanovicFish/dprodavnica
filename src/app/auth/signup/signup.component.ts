import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    if(!this.userService.getUser(form.value.email)) {
      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email,
                                                  form.value.password,
                                                  form.value.birthDate);
    this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists.";
    }
  }
}
