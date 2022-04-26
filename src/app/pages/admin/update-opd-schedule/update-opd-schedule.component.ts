import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-opd-schedule',
  templateUrl: './update-opd-schedule.component.html',
  styleUrls: ['./update-opd-schedule.component.css']
})
export class UpdateOpdScheduleComponent implements OnInit {

  constructor(private _route:ActivatedRoute) { }
  sId=0;
  ngOnInit(): void {
    this.sId=this._route.snapshot.params['oid'];
    alert(this.sId);
  }

}
