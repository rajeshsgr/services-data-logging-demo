import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStudentOperations(message: string){

    console.log(" Following operation was done on student class :-"+message);
  }
}
