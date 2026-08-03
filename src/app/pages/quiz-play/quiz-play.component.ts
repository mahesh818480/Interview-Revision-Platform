import { Component } from '@angular/core';
import { QUIZ_DATA } from '../../data/quiz-data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/question';
import { JAVASCRIPT_QUIZ_DATA } from '../../data/javaScript-data';
import { RXJS_QUIZ_QUESTIONS } from '../../data/rxjs-data';

@Component({
  selector: 'app-quiz-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-play.component.html',
  styleUrl: './quiz-play.component.scss'
})
export class QuizPlayComponent {
  allQuestions = [...QUIZ_DATA, ...JAVASCRIPT_QUIZ_DATA, ...RXJS_QUIZ_QUESTIONS];
  quiz: Quiz[] = [];
  showResult = false;
  score = 0;
  currentIndex = 0;
  selectedAnswers: { [questionId: number]: number } = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const technology = params['technology'];
      const difficulty = params['difficulty'];
      const count = params['count'];
      let filtered = [...this.allQuestions];
      console.log(technology, difficulty, count, filtered, '===>>>')
      filtered = filtered.filter(q =>
        q.technology === technology
      );
      filtered = filtered.sort(() => Math.random() - 0.5);
      this.quiz = filtered.slice(0, count);
      console.log(filtered, '===>><<', this.quiz)
      if (filtered.length < count) {
        this.quiz = filtered;
      } else {
        this.quiz = filtered.slice(0, count);
      }
    });
  }

  selectOption(index: number) {
    const questionId = this.currentQuestion.id;
    this.selectedAnswers[questionId] = index;
  }

  get selectedOption(): number {
    return this.selectedAnswers[this.currentQuestion.id] ?? -1;
  }

  nextQuestion() {
    if (this.currentIndex < this.quiz.length - 1) {
      this.currentIndex++;
    } else {
      this.finishQuiz();
    }
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get currentQuestion() {
    return this.quiz[this.currentIndex];
  }

  getLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  finishQuiz() {
    this.score = 0;
    this.quiz.forEach(question => {
      if (this.selectedAnswers[question.id] === question.answer) {
        this.score++;
      }
    });
    this.showResult = true;
  }

  restartQuiz() {
    this.currentIndex = 0;
    this.score = 0;
    this.showResult = false;
    this.selectedAnswers = {};
  }
  get progress(): number {
    return ((this.currentIndex) / this.quiz.length) * 100;
  }
}
