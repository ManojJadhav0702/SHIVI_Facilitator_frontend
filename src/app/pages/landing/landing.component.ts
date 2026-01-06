import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  heroContent = {
    title: 'Your Trusted Partner for<br/>Multi-Domain Excellence',
    description: 'Shivi Facilitator Service Private Limited delivers scalable workforce solutions, technology-enabled infrastructure, and high-impact development programs with strong governance and measurable outcomes.',
    primaryButton: 'Request Proposal',
    secondaryButton: 'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'
  };
}