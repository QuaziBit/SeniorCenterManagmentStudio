import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberFetchService } from '../api-services/member-fetch.service';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
   constructor(

    private memberService: MemberFetchService, 
) {

}

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

  deleteMember(memberEmail: string) {
    this.memberService.deleteMember(memberEmail).subscribe(() => {
      this.loadMembers();
    });
  }

}
