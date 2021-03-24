import { Component, OnInit } from '@angular/core';
import { ProjectsService, WeatherObject, ErrorObject} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ ProjectsService ],
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {
  error: any;
  obj: WeatherObject;

  errorMessage: boolean;
  emptyPage: boolean;

  array: string[] = ["apple", "orange","pear","a","b","c"];
  a: string[];

 
  apple = "../assets/images/alaska.jpg";
  orange = "../assets/images/skiiing.jpg"


   

  
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.emptyPage = false;

    if(!this.a){
      this.emptyPage = true;

    }
   

  	

  }

  getInfo() {


  	


  

  	this.projectsService.getProjects().subscribe(
  			(data: WeatherObject) => this.obj = { ...data },
  			error => this.error = error
  		

  		);

  	



  	
  	



  }

  


  

}
