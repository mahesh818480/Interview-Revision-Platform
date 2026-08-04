import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  technologies = [
    'Angular',
    'JavaScript',
    'RxJS'
  ];
  questionCounts = [5, 10, 15, 20];
  difficulties = [
    'Easy',
    'Medium',
    'Hard'
  ];
  selectedTechnology = 'Angular';
  questionCount = 10;
  difficulty = 'Easy';
  showTechnology = false;
  showQuestionCount = false;
  showDifficulty = false;
  constructor(private router: Router) { }
  startQuiz() {
    this.router.navigate(['/quiz/play'], {
      queryParams: {
        technology: this.selectedTechnology,
        count: this.questionCount,
        difficulty: this.difficulty
      }
    });
  }
  selectTechnology(item: string) {
    this.selectedTechnology = item;
    this.showTechnology = false;
  }

  selectQuestionCount(item: number) {
    this.questionCount = item;
    this.showQuestionCount = false;
  }

  selectDifficulty(item: string) {
    this.difficulty = item;
    this.showDifficulty = false;
  }
}
