import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface HeroContent {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() content: HeroContent = {
    title: 'Your Trusted Partner for<br/>Multi-Domain Excellence',
    description: 'Shivi Facilitator Service Private Limited delivers scalable workforce solutions, technology-enabled infrastructure, and high-impact development programs with strong governance and measurable outcomes.',
    primaryButton: 'Request Proposal',
    secondaryButton: 'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80'
  };

  constructor(private router: Router) {}

  onPrimaryAction(): void {
    this.router.navigate(['/request-proposal']);
  }

  onSecondaryAction(): void {
    this.router.navigate(['/about']);
  }
}