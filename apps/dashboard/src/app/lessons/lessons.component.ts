import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '@workshop/api-interfaces';
import { LessonsFacade } from '@workshop/core-state';

@Component({
  selector: 'workshop-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent implements OnInit {
  lessons$: Observable<Lesson[]> = this.lessonsFacade.allLessons$;
  selectedLesson$: Observable<Lesson> = this.lessonsFacade.selectedLesson$;

  constructor(private lessonsFacade: LessonsFacade) {}

  ngOnInit(): void {
    this.reset();
    this.lessonsFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadLessons();
    this.lessonsFacade.selectLesson(null);
  }

  selectLesson(lesson: Lesson) {
    this.lessonsFacade.selectLesson(lesson.id);
  }

  loadLessons() {
    this.lessonsFacade.loadLessons();
  }

  saveLesson(lesson: Lesson) {
    if (lesson.id) {
      this.lessonsFacade.updateLesson(lesson);
    } else {
      this.lessonsFacade.createLesson(lesson);
    }
  }

  deleteLesson(lesson: Lesson) {
    this.lessonsFacade.deleteLesson(lesson);
  }
}
