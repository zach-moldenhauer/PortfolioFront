import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



export interface WeatherObject {
	name: string;
	cod: string;

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

		
	}
}