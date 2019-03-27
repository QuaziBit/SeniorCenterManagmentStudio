import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../_models/activity';
import { ActivityFetchService } from '../_services/activity-fetch.service';

import { ServicesComponent } from '../services/services.component';


@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent {

  constructor(
    private аctivityService: ActivityFetchService, 
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  activity: Activity;

  ngOnInit() {
    this.activity = new Activity();
  }

  saveActivity() {
    this.аctivityService.saveActivity(this.activity).toPromise().then(() => {this.router.navigate['services']});
  }

}
