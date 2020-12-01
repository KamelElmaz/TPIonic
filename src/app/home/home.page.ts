import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {TestComponent} from '../components/test/test.component';
import {Student} from '../Student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // students: string[] = ['Samuel', 'Christine', 'Quentin'];
  /*students: Student[] = [
    {name: 'Samuel', grade: 12, comment: 'Sérieux', isProjectDone: false},
    {name: 'Christine', grade: 8, comment: 'Travailleuse', isProjectDone: true},
    {name: 'Quentin', grade: 18, comment: 'Rien à ajouter', isProjectDone: false}
  ];*/
  students: Student[] | null = null;
  message = '';

  constructor(private popoverCtrl: PopoverController,
              private studentService: StudentService) {
    this.studentService.findAll().subscribe(students => this.students = students);
  }

  onClick(index: number) {
    this.message = this.students[index].comment;
  }

  async pop() {
    const popover = await this.popoverCtrl.create({
      component: TestComponent
    });
    return await popover.present();
  }

  onChange(index: number, event: any) {
    let checked = event.target.checked;
    this.students[index].isProjectDone = checked;
    console.log(this.students);
  }
}
