import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  postedDate: Date;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  searchQuery: string = '';
  selectedDepartment: string = 'all';
  
  departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'tech', label: 'Technology' },
    { value: 'operations', label: 'Operations' },
    { value: 'finance', label: 'Finance' },
    { value: 'sales', label: 'Sales & Marketing' }
  ];

  allJobs: Job[] = [
    // Example jobs - uncomment to show positions
    // {
    //   id: '1',
    //   title: 'HR Manager',
    //   department: 'hr',
    //   location: 'Lucknow, India',
    //   type: 'Full-time',
    //   description: 'Lead HR operations and workforce planning initiatives.',
    //   postedDate: new Date('2024-01-15')
    // },
    // {
    //   id: '2',
    //   title: 'Project Manager',
    //   department: 'operations',
    //   location: 'Jamshedpur, India',
    //   type: 'Full-time',
    //   description: 'Manage complex projects with strong governance frameworks.',
    //   postedDate: new Date('2024-01-10')
    // },
    // {
    //   id: '3',
    //   title: 'Software Developer',
    //   department: 'tech',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   description: 'Develop and maintain technology solutions for workforce management.',
    //   postedDate: new Date('2024-01-12')
    // }
  ];

  get filteredJobs(): Job[] {
    return this.allJobs.filter(job => {
      const matchesSearch = !this.searchQuery || 
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesDepartment = this.selectedDepartment === 'all' || 
        job.department === this.selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }

  onTrackApplication(): void {
    // Implement track application logic
    alert('Track Application feature coming soon!');
  }
}
