import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../student.service';
import {Student} from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {
  student: Student | null = null;

  constructor(private route: ActivatedRoute,
              private studentService: StudentService) { }

  ngOnInit() {
    let id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.studentService.findById(id).subscribe(student => this.student = student);
  }

}
