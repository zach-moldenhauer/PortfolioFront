import { Component, OnInit } from '@angular/core';
import { ProjectsService, ProjectObject, ErrorObject} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ ProjectsService ],
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {
  error: any;

  projectObject: ProjectObject;

  errorMessage: boolean;
  emptyPage: boolean;

  array: string[] = ["apple", "orange","pear","a","b","c"];
  a: string[];

 
  apple = "../assets/images/alaska.jpg";
  orange = "../assets/images/skiiing.jpg"


   

  
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.emptyPage = false;

    if(!this.array){
      this.emptyPage = true;

    }
   

  	

  }

  getInfo() {




    this.projectsService.getProjects().subscribe(
      (data: ProjectObject) => this.projectObject = {
        id: data.id,
        title: data.title,
        text_body: data.text_body

      }


    );

  	// this.projectsService.getProjects().subscribe(
  	// 		(data: WeatherObject) => this.obj = { ...data },
  	// 		error => this.error = error
  		

  	// 	);

  }
}
