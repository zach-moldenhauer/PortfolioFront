import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



export interface ProjectObject {
	id: string;
	title: string;
	text_body: string;

}

// export interface Main {

// 	temp: string;
// }

export interface ErrorObject {
	status: number;

}

@Injectable()
export class ProjectsService {


	constructor(private http: HttpClient) { }
	

	getProjects() {
		return this.http.get("api/project", {

			observe: 'body',
			responseType: 'json'

		});
	}
}