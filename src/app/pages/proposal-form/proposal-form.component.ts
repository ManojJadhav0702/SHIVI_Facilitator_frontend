import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ApiService } from '../../services/api.service';
import { Proposal } from '../../models/proposal.model';

@Component({
  selector: 'app-proposal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.scss']
})
export class ProposalFormComponent {
  proposal: Proposal = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDescription: '',
    budget: '',
    timeline: ''
  };

  serviceTypes = [
    { value: 'workforce', label: 'Workforce Solutions' },
    { value: 'infrastructure', label: 'Technology Infrastructure' },
    { value: 'development', label: 'Development Programs' },
    { value: 'other', label: 'Other' }
  ];

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.apiService.submitProposal(this.proposal).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        if (response.success) {
          this.successMessage = 'Proposal submitted successfully! We will contact you soon.';
          form.resetForm();
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        }
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.message || 'Failed to submit proposal. Please try again.';
        console.error('Error submitting proposal:', error);
      }
    });
  }

  isFieldInvalid(form: NgForm, fieldName: string): boolean {
    const field = form.controls[fieldName];
    return field && field.invalid && (field.dirty || field.touched);
  }
}