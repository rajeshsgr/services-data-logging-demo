import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-data-display-form',
  templateUrl: './data-display-form.component.html',
  styleUrls: ['./data-display-form.component.css'],
  providers: [LoggingService]
})
export class DataDisplayFormComponent implements OnInit {

  studentDetails: {id: number, name: string, status:string}[]=[];

  constructor(private studentService: StudentService,
             private  loggingService: LoggingService) { }

  ngOnInit() {

    this.loggingService.logStudentOperations("Initial Student Data Load");

    this.studentDetails=this.studentService.students;
  }

}
