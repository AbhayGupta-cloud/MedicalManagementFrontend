import { Component, OnInit } from '@angular/core';
import { OpdService } from 'src/app/services/opd.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-opd-schedule',
  templateUrl: './view-opd-schedule.component.html',
  styleUrls: ['./view-opd-schedule.component.css']
})
export class ViewOPDScheduleComponent implements OnInit {
  opdSchedule=[
    {
      sId:23,
      opdName:'Basic Java Quiz',
      consultantName:'',
      opdDays:50,
      location:30,
      opdRegistrationTimings:'',
      department:{
        oId:3,
      }
    },
    {
      qId:23,
      title:'Basic Python Quiz',
      description:'',
      maxMarks:50,
      numberOfQuestions:30,
      active:'',
    },
  ]
  constructor(private _opd:OpdService) { }

  ngOnInit(): void {
    this._opd.opd().subscribe(
      (data:any)=>{
        this.opdSchedule=data;
        console.log(this.opdSchedule);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !',"Error in Loading Data !","error");
        
      }
    )
  }

}
