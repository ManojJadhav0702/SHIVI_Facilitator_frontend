import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProposalFormComponent } from './pages/proposal-form/proposal-form.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'request-proposal', component: ProposalFormComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },  // ADD THIS LINE
  { path: '**', redirectTo: '' }
];
