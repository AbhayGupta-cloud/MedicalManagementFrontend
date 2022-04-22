import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-opd-schedule',
  templateUrl: './view-opd-schedule.component.html',
  styleUrls: ['./view-opd-schedule.component.css']
})
export class ViewOPDScheduleComponent implements OnInit {
  opdSchedule=[
    {
      qId:23,
      
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
