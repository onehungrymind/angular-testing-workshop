import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import * as fromCourses from './courses/courses.reducer';
import * as fromLessons from './lessons/lessons.reducer';
import * as fromUsers from './users/users.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromCourses.COURSES_FEATURE_KEY]: fromCourses.CoursesState;
  [fromLessons.LESSONS_FEATURE_KEY]: fromLessons.LessonsState;
  [fromUsers.USERS_FEATURE_KEY]: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromCourses.COURSES_FEATURE_KEY]: fromCourses.coursesReducer,
  [fromLessons.LESSONS_FEATURE_KEY]: fromLessons.lessonsReducer,
  [fromUsers.USERS_FEATURE_KEY]: fromUsers.usersReducer,
};
