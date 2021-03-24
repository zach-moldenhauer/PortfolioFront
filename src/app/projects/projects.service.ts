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

		return this.http.get("https://community-open-weather-map.p.rapidapi.com/weather/?rapidapi-key=fd5a6e0aeamsh4a04cfb9365a955p12a28fjsn560ca8ebd8d1&q=London,uk");
	}
}