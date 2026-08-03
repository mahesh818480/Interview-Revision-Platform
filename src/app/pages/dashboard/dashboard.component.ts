import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { CommonModule } from '@angular/common';
import { COMPANIES } from '../../data/company-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatButtonModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  technologies: any = [];
  companies = COMPANIES;
  questions!: Question[];
  constructor(private questionService: QuestionService) { }
  companyIndex = 0;

  ngOnInit() {
    this.questions = this.questionService.getQuestions().slice(0, 4);
    this.technologies = this.questionService.getTechnologys();
  }

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
