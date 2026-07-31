import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  technologies = [
    { name: 'Angular', count: 120 },
    { name: 'JavaScript', count: 180 },
    { name: 'HTML', count: 90 },
    { name: 'CSS', count: 70 },
    { name: 'RxJS', count: 45 },
    { name: 'Node.js', count: 60 },
    { name: 'MongoDB', count: 35 },
    { name: 'Java', count: 80 }
  ];
  companies = [
    {
      name: 'TCS',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdi4msNXV8dKX33Web9hxys6gTkXU3gnODRLYiGItvGA&s=10',
      count: 120
    },
    {
      name: 'Infosys',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQLcpQhnVQIKj_uqUwwgqgK9hGKgn55HS-6OCwdxzWA&s',
      count: 95
    },
    {
      name: 'Capgemini',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNb1ZToZg9VJsMsp9zq-kSgXu11J4-NM1tCv9b4WXtw&s=10',
      count: 80
    },
    {
      name: 'Accenture',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfrRXeix7S4IjgxTE_4D3h-eYC_rSLGMmdMgbugukpg&s=10',
      count: 140
    },
    {
      name: 'Cognizant',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM6DQYJ7r0IvW9M-nnUVuceOfZcWIyyhxNmiDg0dMIHHIFgGFhlc0Ils&s=10',
      count: 75
    },
    {
      name: 'Wipro',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltJNrW4ozmXiF0oqVki84niaYcp_7QgeC0W4tkHT8Fg&s',
      count: 65
    }
  ];
  companyIndex = 0;
  nextCompany() {
    if (this.companyIndex < this.companies.length - 4) {
      this.companyIndex++;
    }
  }

  previousCompany() {
    if (this.companyIndex > 0) {
      this.companyIndex--;
    }
  }

  get visibleCompanies() {
    return this.companies.slice(
      this.companyIndex,
      this.companyIndex + 4
    );
  }
}
