import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  reason: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    reason: '',
    message: ''
  };

  reasons = [
    { value: '', label: 'Select a service' },
    { value: 'workforce', label: 'Workforce Solutions' },
    { value: 'infrastructure', label: 'Technology Infrastructure' },
    { value: 'development', label: 'Development Programs' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

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

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
      form.resetForm();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, 1500);

    /* //add this on submit click.
        this.apiService.submitContact(this.contactForm).subscribe({
        next: (response) => {
            this.isSubmitting = false;
            this.successMessage = 'Message sent successfully!';
            form.resetForm();
        },
        error: (error) => {
            this.isSubmitting = false;
            this.errorMessage = 'Failed to send message.';
        }
        });
        
        });*/
  }

  isFieldInvalid(form: NgForm, fieldName: string): boolean {
    const field = form.controls[fieldName];
    return field && field.invalid && (field.dirty || field.touched);
  }

        
}