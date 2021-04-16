import { Component, OnInit } from '@angular/core';
import { ProjectsService, ProjectObject, ErrorObject} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ ProjectsService ],
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {

  projectObjects: ProjectObject[] = [];

  //test array
  array: string[] = ["apple", "orange","pear","a","b","c"];

  apple = "../assets/images/alaska.jpg";
  orange = "../assets/images/skiiing.jpg"


   

  
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    
    this.projectsService.getProjects().subscribe(
      (data: any) => {
        this.projectObjects = data;

      }
    );

  }


  ngAfterViewChecked() {

    try {
      localStorage.setItem("projectArray", JSON.stringify(this.projectObjects));
    } catch(error) {
      console.log(error);
    }

  }
}
