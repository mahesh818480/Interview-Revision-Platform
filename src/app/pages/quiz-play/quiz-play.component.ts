import { Component } from '@angular/core';
import { QUIZ_DATA } from '../../data/quiz-data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/question';
import { JAVASCRIPT_QUIZ_DATA } from '../../data/javaScript-quiz-data';
import { RXJS_QUIZ_QUESTIONS } from '../../data/rxjs-quiz-data';

@Component({
  selector: 'app-quiz-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-play.component.html',
  styleUrl: './quiz-play.component.scss'
})
export class QuizPlayComponent {
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
      const count = +params['count'];
      let technologyQuestions: any[] = [];
      switch (technology) {
        case 'Angular':
          technologyQuestions = [...QUIZ_DATA];
          break;

        case 'JavaScript':
          technologyQuestions = [...JAVASCRIPT_QUIZ_DATA];
          break;

        case 'RxJS':
          technologyQuestions = [...RXJS_QUIZ_QUESTIONS];
          break;

      }

      let difficultyQuestions = technologyQuestions.filter(
        q => q.difficulty === difficulty
      );

      let otherQuestions = technologyQuestions.filter(
        q => q.difficulty !== difficulty
      );

      difficultyQuestions = this.shuffle(difficultyQuestions);
      otherQuestions = this.shuffle(otherQuestions);

      if (difficultyQuestions.length < count) {
        const remaining = count - difficultyQuestions.length;
        difficultyQuestions = [
          ...difficultyQuestions,
          ...otherQuestions.slice(0, remaining)
        ];
      }
      difficultyQuestions = this.shuffle(difficultyQuestions);
      this.quiz = difficultyQuestions.slice(0, count);
    });

  }
  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
    return ((this.currentIndex + 1) / this.quiz.length) * 100;
  }
}
