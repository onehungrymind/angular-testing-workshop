export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Login {
  email: string;
  password: string;
}

export interface Course extends BaseEntity {
  title: string;
  description: string;
}

export interface Lesson extends BaseEntity {
  title: string;
  description: string;
  course_id: any;
}

export enum Status {
  WON = 1,
  PROSPECT = 2,
  QUEUED = 3,
  LOST = 4
}
export interface User extends BaseEntity {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Customer extends BaseEntity {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  status: Status
}
export interface Project extends BaseEntity {
  title: string;
  details: string;
  percentComplete: number;
  approved: boolean;
  customerId: string;
}
