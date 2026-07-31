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
}
