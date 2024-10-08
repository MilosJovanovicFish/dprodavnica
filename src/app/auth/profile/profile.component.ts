import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileInput!: User;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public User: UserService) { }

  ngOnInit(): void {
    this.profileInput = {
    id: this.data.user.id,
    email: this.data.user.email,
    address: this.data.user.address,
    password: this.data.user.password,
    date: this.data.date
    }
  }

  finishEditing(form: NgForm){
    this.data.user.email = this.profileInput.email;
    this.data.user.password = this.profileInput.password;
    this.data.user.address = this.profileInput.address;

    UserService.dummyUserList.push(this.data.user);

    console.log(UserService.dummyUserList);
    console.log(this.data.user);
    this.isEditing = false;
  }

}
