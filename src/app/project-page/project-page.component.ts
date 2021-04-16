import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectObject } from '../projects/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  id: number;
  private subscription: any;

  projectObjects: ProjectObject[];
  projectObject: ProjectObject;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.subscription = this.route.params.subscribe(params => {
  		this.id = +params['id'];

  		this.projectObjects = JSON.parse(localStorage.getItem('projectArray'));
  		this.projectObject = this.projectObjects[this.id];

  	})


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
