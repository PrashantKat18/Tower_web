import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AddProvider {
    person: any;
    // personApi = environment.hostIpAddress + "/api/person" 
    personApi = environment.hostIpAddress
    // http: any;


    constructor( public http: HttpClient,) {

    }

    //This method is used to add/update the algorithm parameters.
    saveApply(req) {
        return new Promise((resolve, reject) => {
            this.http.post(`${this.personApi}/enroll`, req).subscribe((resp: any) => {
                if (resp.status == true) {
                    resolve(resp.data);
                    this.person = resp.data;
                } else {
                    reject();
                }
            });
        });
    }
}

// export interface Algorithm {
//     id: number;
//     p1: number,
//     p2: number,
//     p3: number,
//     time: number,
//     temperatureThreshold: number,
//     tempAlertThreshold : number,
//     thermalThreshold: number,
//     rgbThreshold: number,
//     temperatureUpperBound: number,
//     temperatureLowerBound: number,
    
// }

