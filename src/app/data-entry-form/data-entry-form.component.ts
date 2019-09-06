import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-data-entry-form',
  templateUrl: './data-entry-form.component.html',
  styleUrls: ['./data-entry-form.component.css'],
})
export class DataEntryFormComponent implements OnInit {

  name:String;
  status:String;

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

  addStudent(name:string, status:string){

    this.studentService.addStudent(name,status);




  }

}
