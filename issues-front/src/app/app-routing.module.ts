import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { IssuesComponent } from './issues//list/issues.component';
import { IssueDetailComponent } from './issues/detail/issue-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IssuesComponent
  },
  {
    path: 'issues',
    component: IssuesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'issue/:id',
    component: IssueDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
