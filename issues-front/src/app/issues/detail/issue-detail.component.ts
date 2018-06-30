import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute} from '@angular/router';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY } from '@angular/material';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
  issue : Object;
  updatedSince : Object;
  constructor(
    private data: DataService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let issueId = this.activatedRoute.snapshot.paramMap.get('id');
    this.data.getIssue(issueId).subscribe(
      data => {
        this.issue = data;
        this.updatedSince = this.timeSince(this.issue["updatedAt"]);
      } 
    );
  }

  timeSince(date) {
    
    const today = new Date().getTime()

    const seconds = Math.floor((today - new Date(date).getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}
