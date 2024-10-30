import { Routes } from '@angular/router';
import { LayoutComponent } from './presentation/components/layout/layout.component';
import {AuthComponent} from './presentation/page/auth/auth.component';
import {HomeComponent} from './presentation/page/home/home.component';
import {StudentComponent} from './presentation/page/student/student.component';
import {ReportComponent} from './presentation/page/report/report.component';
import {TeacherComponent} from './presentation/page/teacher/teacher.component';
import {FormStudentComponent} from './presentation/page/student/form-student/form-student.component';
import {FormTeacherComponent} from './presentation/page/teacher/form-teacher/form-teacher.component';
import { UserComponent } from './presentation/page/user/user.component';
import { FormUserComponent } from './presentation/page/user/form-user/form-user.component';
export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'student', component: StudentComponent },
      { path: 'student/add', component: FormStudentComponent },
      { path: 'report', component: ReportComponent },

      { path: 'teacher', component: TeacherComponent },
      { path: 'teacher/add', component: FormTeacherComponent },
      { path: 'users', component: UserComponent},
      { path: 'users/add', component: FormUserComponent},
    ],
  },
];
