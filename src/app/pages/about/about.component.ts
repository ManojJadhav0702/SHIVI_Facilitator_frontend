import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  mission = [
    'Enable organizations to hire, train, secure, automate, and scale with confidence',
    'Deliver execution excellence across corporate, government, and CSR ecosystems',
    'Create sustainable impact through skill development and livelihood initiatives'
  ];

  vision = 'To become a trusted national partner for organizations seeking scalable workforce solutions, technology-enabled infrastructure, and high-impact development programs with strong governance and measurable outcomes.';

  values = [
    { title: 'Trust', description: 'Building lasting partnerships' },
    { title: 'Excellence', description: 'Delivering superior quality' },
    { title: 'Impact', description: 'Creating measurable outcomes' },
    { title: 'Governance', description: 'Strong compliance frameworks' },
    { title: 'Innovation', description: 'Technology-driven solutions' }
  ];

  leaders = [
    {
      name: 'Vivek Kumar Mishra',
      title: 'Founder, Director & Lead Consultant',
      credentials: 'PMP® | PBP®',
      specialization: 'Strategic Operations & Program Governance. Responsible for governance, large engagements, CXO/CSR interface, and complex project leadership.',
      color: '#2563eb'
    },
    {
      name: 'Shila Mishra',
      title: 'Founder & Director',
      credentials: '',
      specialization: 'Strategic HR, Compliance & Social Impact. Drives the company\'s vision for workforce development and social responsibility initiatives.',
      color: '#9333ea'
    }
  ];

  operatingModel = [
    {
      name: 'Caucus Consultants',
      description: 'People Supply, Capability Building & Hiring Infrastructure',
      color: '#dbeafe'
    },
    {
      name: '1 ANNA',
      description: 'Physical + Digital Infrastructure Protection & Automation',
      color: '#dcfce7'
    },
    {
      name: 'VKM Projects',
      description: 'Funding, Compliance, Execution & Impact Measurement',
      color: '#fce7f3'
    },
    {
      name: 'Trained Viti',
      description: 'Training & Learning Supporting All Verticals',
      color: '#fef3c7'
    }
  ];

  differentiators = [
    {
      title: 'Asset Portfolio',
      description: '50,000+ candidate profiles, vacancy repositories, resumes, project archives, SOPs, and governance frameworks',
      icon: 'portfolio'
    },
    {
      title: 'Technology Stack',
      description: 'Advanced ATS, CRM, LMS platforms, automation systems, and compliance-ready documentation',
      icon: 'tech'
    },
    {
      title: 'Governance Framework',
      description: 'PMP® / PBP®-aligned practices with MIS, dashboards, audit readiness, and performance monitoring',
      icon: 'governance'
    }
  ];
}