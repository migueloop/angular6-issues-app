import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

import {Router} from '@angular/router';



@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})

export class IssuesComponent implements OnInit {

  issues$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getIssues().subscribe(
      data => this.issues$ = data 
    );
  }
}
