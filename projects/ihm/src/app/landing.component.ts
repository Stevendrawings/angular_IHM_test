import { Component, OnInit } from "@angular/core";

@Compenent({
    selector: 'app-landing',
    templateUrl: './landing.compenent.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
    public getJsonValue: any;
    public postJsonValue: any
    constructor(private http: HttpClient){

    }
    ngOnInit(): void {
        
    }
    public getMEthod(){
        this.http.get('https://anapioficeandfire.com/api/books').subscribe((data) => {
            console.log(data);
        });
    }

}