import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.css']
})
export class ViewDepartmentsComponent implements OnInit {
  departments=[];
  constructor(private _department:DepartmentService) { }

  ngOnInit(): void {
    this._department.departments().subscribe((data:any)=>{
      //css
      this.departments=data;
      console.log(this.departments);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!","Error In Loading Data","error");
    }
    )
  }

}
