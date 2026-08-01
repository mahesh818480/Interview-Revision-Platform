import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  allQuestions!: Question[];
  filteredQuestions!: Question[];
  searchQuestion: string = '';
  searchQst!: Question[];
  technologies: any = [];
  selectedTechnology = 'All';
  currentPage = 1;

  pageSize = 5;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.allQuestions = this.questionService.getQuestions();
    this.searchQst = this.allQuestions;
    this.technologies = this.questionService.getTechnologys();
    this.filteredQuestions = [...this.allQuestions];
  }
  onSearchQuestion() {
    this.applyFilters();
  }
  selectCategory(category: string) {
    this.selectedTechnology = category;
    this.applyFilters();
  }
  applyFilters() {
    this.filteredQuestions = this.searchQst.filter(question => {
      const technologyMatch =
        this.selectedTechnology === 'All' ||
        question.technology === this.selectedTechnology;

      const searchMatch =
        question.title.toLowerCase().includes(
          this.searchQuestion.toLowerCase()
        );
      return technologyMatch && searchMatch;
    });
    this.currentPage = 1;
  }
  get totalPages(): number {
    return Math.ceil(this.filteredQuestions.length / this.pageSize);
  }
  get paginatedQuestions() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredQuestions.slice(start, start + this.pageSize);
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
  get pageNumbers(): number[] {
    return Array.from(
      { length: this.totalPages },
      (_, i) => i + 1
    );
  }
}
