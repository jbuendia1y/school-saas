import type { Course } from '../models/course.model';
import { tenants } from './tenants';

export const courses: Course[] = [
  {
    id: 'COURSE_ID',
    name: 'COURSE_NAME',
    tenant: tenants[0],
  },
];
