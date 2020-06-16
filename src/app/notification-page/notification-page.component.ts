import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {
  response: any;
  stepId: Observable<any>;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.stepId = this.route.data.pipe(pluck('stepId'));
    this.stepId.subscribe((service) => {
      let fd = new FormData();
      fd.append('data', JSON.stringify({ stepId: _.toInteger(service)}));
      // fd.append('data.stepId', service);
      // fd["data"] = { channel: 'hilux', stepId: _.toInteger(service)}
      // this.http.post(`https://wfe.ajm.re/AjmanLandProperty/index.php/applications/lockStep`, fd)
      //   .subscribe((data) =>{
      //     this.response = data;
      //   })
    })
  }

}