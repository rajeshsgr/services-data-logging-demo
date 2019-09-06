import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-data-display-form',
  templateUrl: './data-display-form.component.html',
  styleUrls: ['./data-display-form.component.css']
})
export class DataDisplayFormComponent implements OnInit {

  studentDetails: {id: number, name: string, status:string}[]=[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {

    this.studentDetails=this.studentService.students;
  }

}
