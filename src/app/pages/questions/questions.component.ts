import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  allQuestions: Question[] = [];
  filteredQuestions: Question[] = [];
  technologies: any[] = [];
  searchQuestion = '';
  selectedTechnology = 'All';
  currentPage = 1;
  pageSize = 5;
  selectedCompany = '';

  constructor(
    private questionService: QuestionService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.technologies = this.questionService.getTechnologys();
    this.selectCategory('All');
    this.activateRoute.queryParams.subscribe(params => {
      const company = params['company'];
      const technology = params['technology'];
      this.selectedCompany = params['company'] || '';
      this.selectCategory(this.selectedTechnology);
      if (company) {
        this.filteredQuestions = this.allQuestions.filter(q =>
          q.companies.includes(company)
        );
      }
      if (technology) {
        this.selectCategory(technology);
      } else {
        this.selectCategory('All');
      }
    });
  }

  selectCategory(category: string) {
    this.selectedTechnology = category;
    if (category === 'All') {
      this.allQuestions = this.questionService.getAllQuestions();
    } else {
      this.allQuestions =
        this.questionService.getQuestionCategory(category);
    }
    this.applyFilters();
  }

  onSearchQuestion() {
    this.applyFilters();
  }
  applyFilters() {
    this.filteredQuestions = this.allQuestions.filter(question => {
      const searchMatch =
        question.title
          .toLowerCase()
          .includes(this.searchQuestion.toLowerCase());

      const companyMatch =
        !this.selectedCompany ||
        question.companies.includes(this.selectedCompany);

      return searchMatch && companyMatch;
    });
    this.currentPage = 1;
  }

  get paginatedQuestions() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredQuestions.slice(
      start,
      start + this.pageSize
    );
  }

  get totalPages() {
    return Math.ceil(
      this.filteredQuestions.length / this.pageSize
    );
  }

  get pageNumbers() {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }

  }
}
