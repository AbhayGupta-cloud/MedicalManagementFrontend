import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent implements OnInit {
  oId;
  oName;
  constructor() { }
  private _route:ActivatedRoute
  ngOnInit(): void {
    this.oId=this._route.snapshot.params['sId'];
    this.oName=this._route.snapshot.params['opdName'];
    console.log(this.oId);
    console.log(this.oName);
  }

}
