import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-data-entry-form',
  templateUrl: './data-entry-form.component.html',
  styleUrls: ['./data-entry-form.component.css'],
  providers: [LoggingService]
})
export class DataEntryFormComponent implements OnInit {

  name:String;
  status:String;

  constructor(private studentService:StudentService,
             private  loggingService: LoggingService) { }

  ngOnInit() {
  }

  addStudent(name:string, status:string){

    this.loggingService.logStudentOperations(" Student Data Passed to Add")

    this.studentService.addStudent(name,status);

    this.loggingService.logStudentOperations("Added Student ")



  }

}
