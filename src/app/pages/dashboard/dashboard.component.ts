import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { COMPANIES } from '../../data/company-data';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  technologies: any = [];
  companies = COMPANIES;
  questions!: Question[];
  constructor(private questionService: QuestionService, @Inject(PLATFORM_ID) private platformId: Object) { }
  companyIndex = 0;
  itemsPerPage = 1;
  @HostListener('window:resize')
  updateItemsPerPage() {
    this.itemsPerPage = window.innerWidth < 768 ? 2 : 4;
  }
  ngOnInit() {
    this.questions = this.questionService.getQuestions().slice(0, 4);
    this.technologies = this.questionService.getTechnologys();
    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerPage();
    }
  }

  nextCompany() {
    if (this.companyIndex < this.companies.length - this.itemsPerPage) {
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
    this.companyIndex + this.itemsPerPage
  );
}
}
