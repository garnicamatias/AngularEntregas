import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  studentsList : Array<Student> = [
    {
      name : 'Matias',
      surname : 'Garnica',
      age: 33,
      isActive: true,
      courseModality: 'Presencial',
      gender: 'M'
    },
    {
      name : 'Juan',
      surname : 'Pérez',
      age: 20,
      isActive: false,
      courseModality: 'Online',
      gender: 'F'
    },
    {
      name : 'Luisa',
      surname : 'Méndez',
      age: 26,
      isActive: true,
      courseModality: 'Online',
      gender: 'X'
    },
    {
      name : 'Juana',
      surname : 'Lopez',
      age: 40,
      isActive: false,
      courseModality: 'Presencial',
      gender: 'none'
    },
    {
      name : 'Francisco',
      surname : 'Juárez',
      age:18,
      isActive: true,
      courseModality: 'Online',
      gender: 'F'
    }
  ]
}
