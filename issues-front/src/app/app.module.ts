import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IssuesComponent } from './issues/list/issues.component';
import { UsersComponent } from './users/users.component';

import { MatCardModule, MatGridListModule } from '@angular/material';
import { IssueDetailComponent } from './issues/detail/issue-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IssuesComponent,
    UsersComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [MatCardModule, MatGridListModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
