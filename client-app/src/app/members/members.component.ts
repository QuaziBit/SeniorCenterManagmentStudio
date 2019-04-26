import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog} from '@angular/material';

import { InfoFormComponent } from '.././info-form/info-form.component';

import { MemberFetchService } from '../_services/member-fetch.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html', 
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService: MemberFetchService, private router:Router, public dialog: MatDialog) { }
  
  public members;

  ngOnInit() {
    this.loadMembers();
  }

  private loadMembers() {
    this.memberService.getMembers().subscribe(
      data => { this.members = data },
      err => console.error(err),
      () => console.log("members loaded.")
    );
  }

  deleteMember(member: any) {
	if(confirm("Are you sure you want to delete "+member.firstName+" "+member.lastName+"?")) {
       this.memberService.deleteMember(member.id).subscribe(() => {
       this.loadMembers();
      });
	}
    
  }


  // Send data into update dialog
  // ================================================================================== //
  openUpdateDialog(memberID: string): void {
    
    // Get all activities and find one activity by email
    // --------------------------------------------------------------------- //
    this.loadMembers();
    var tmp;

    // Loop via activities and find specific activity by email
    this.members.forEach((member) => {
      if (member.id === memberID)
      {
        tmp = member;
      }
    });
    // --------------------------------------------------------------------- //
    
    // Open update dialog and sent data into update dialog
    const dialogRef = this.dialog.open(InfoFormComponent, {
      data: {
        member: tmp
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.loadMembers();
      
      console.log('Update dialog was closed');
    });
  }
  // ================================================================================== //


  // used for opening modal
  openDialog(): void {
    const dialogRef = this.dialog.open(InfoFormComponent);

    dialogRef.afterClosed().subscribe(result => {

      this.loadMembers();

      console.log('The dialog was closed');
    });
  }

}
