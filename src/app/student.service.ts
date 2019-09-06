import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  students = [{
    id: 100,name: "Rajesh",status: "Active"
  },
  {
    id: 101,name: "Ananya",status: "Active"
  }
  ];

  addStudent(name: string, status: string) {

    var sid = this.generateId();

    this.students.push({ id: sid, name: name, status: status });
  }

  updateStatus(id: number, name: string, status: string) {

    this.students[id].status = status;
  }

  generateId() {

    var key1 = 'id', key2 = 'id';

    var result = Math.max.apply
      (Math, this.students.map(function (a) { return (a[key1] >= a[key2]) ? a[key1] : a[key2]; }));

    var sid = result + 1;

    return sid;

  }
}
