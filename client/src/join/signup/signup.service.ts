import { Injectable } from '@angular/core';
import { PageInfoService } from './page-info-service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {
    head : string; title : string; body : string; summary  : string; join : string;
    signupSubHeader : string; confMsg : string; roles : string[];
    constructor(private pageInfoService: PageInfoService, private http: Http) {
        this.head = pageInfoService.getHead();
        this.title = pageInfoService.getTitle();
        this.summary = pageInfoService.getSummary();
        this.body = pageInfoService.getBody();
        this.join = pageInfoService.getJoin();
        this.signupSubHeader = pageInfoService.getSignupSubHeader();
        this.confMsg = pageInfoService.getConfMsg();
        this.roles = pageInfoService.getRoles();
    }
    addMember(object: any) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow', '*');
        console.log("About to send an http request with " + JSON.stringify(object));
        return this.http.post('http://localhost:3000/signup/', JSON.stringify(object), {headers: headers})
            .map(res => res.json(), function(err, res){
                if (err)
                    console.log("There was an error: " + err);
                else
                    console.log("Successfully sent and a recieved some packets");
            });
    }
}

@Injectable()
export class AsScouterService {
}

@Injectable()
export class AsArtistService {

}

@Injectable()
export class LocationService {
        provinces = [
        'Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga',
        'Northern Cape', 'North West', 'Western Cape'];
    getProvinces() {
        return this.provinces;
    }
}