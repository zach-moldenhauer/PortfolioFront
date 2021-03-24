import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-front';


  
  isClicked: boolean = false;
  onClick() {

  	if(this.isClicked) {
  		this.isClicked = false;

  	} else {
  		this.isClicked = true;

  	}
  }




}
