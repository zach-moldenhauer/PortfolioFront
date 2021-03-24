import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  warning: boolean;
  loginForm: FormGroup;
  
  

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

  	  this.warning = false;

	  this.loginForm = new FormGroup({
	    userName: new FormControl('', Validators.required),
	    password: new FormControl('', Validators.required)

	  });


  };

  onSubmit() {
  	

  	if(this.adminService.validateLogin(this.loginForm.value)) {
  	  this.router.navigate(["/projects"]);
  	} else {
  		this.warning = true;
  	}

 


  }

}
