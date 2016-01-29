import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TxtFileDataService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    loadSpreadsheetUrl() {
        return Observable.create((observer) => {
            this.http.get('spreadsheet-url.txt')
    			.map((res) => res.text())
    			.subscribe((data) => {
    				observer.next(data);
    			});
        });
    }

    loadFormUrl() {
        return Observable.create((observer) => {
            this.http.get('form-url.txt')
    			.map((res) => res.text())
    			.subscribe((data) => {

                    const results = /\/d\/(.*)\//.exec(data);

                    if (results) {
                        const url = results[1];
                        observer.next(url);
                        return;
                    }
    			});
        });
    }

    loadPageTitle() {
        return Observable.create((observer) => {
            this.http.get('page-title.txt')
    			.map((res) => res.text())
    			.subscribe((data) => {
    				observer.next(data);
    			});
        });
    }

}
