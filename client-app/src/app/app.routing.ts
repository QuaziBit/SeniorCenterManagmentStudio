﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

import { MembersComponent } from './members/members.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { InfoFormComponent } from './info-form/info-form.component';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
import { ActivityFormComponent } from './activity-form/activity-form.component';

import { ActivityInvFormComponent } from './activity-involvement/activity-inv-form.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
    { path: 'volunteers', component: VolunteersComponent, canActivate: [AuthGuard] },
    { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
    { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
    { path: 'documentation', component: DocumentationComponent },
    { path: 'info-form', component: InfoFormComponent, canActivate: [AuthGuard] },
    { path: 'volunteer-form', component: VolunteerFormComponent, canActivate: [AuthGuard] },
    { path: 'activity-form', component: ActivityFormComponent, canActivate: [AuthGuard] },
    
    { path: 'activity-inv-form', component: ActivityInvFormComponent, canActivate: [AuthGuard] },

    
    // redirect to home instead of showing a 404 page
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
