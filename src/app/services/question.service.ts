import { Injectable } from '@angular/core';
import { ANGULAR_CODING_QUESTIONS } from '../data/angular-coding-questions';
import { JAVASCRIPT_CODING_DATA } from '../data/javaScript_coding-questions';
import { HTML_CODING_QUESTIONS } from '../data/html-coding-questions';
import { CSS_CODING_QUESTIONS } from '../data/css_coding_questions';
import { RXJS_QUIZ_QUESTIONS } from '../data/rxjs-quiz-data';
import { RXJS_CODING_QUESTIONS } from '../data/rxjs-coding-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
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

  getTechnologys() {
    return this.technologies;
  }

  getQuestionById(technology: string, id: number) {
    return this.getQuestionCategory(technology)
      .find((question: any) => question.id === id);
  }
  getQuestionsByCompany(company: string) {
    return ANGULAR_CODING_QUESTIONS.filter(
      question => question.companies.includes(company));
  }
  getQuestionCategory(technology: string) {
    let filterTechnologie: any = [];
    switch (technology) {
      case 'Angular':
        filterTechnologie = [...ANGULAR_CODING_QUESTIONS];
        break;
      case 'JavaScript':
        filterTechnologie = [...JAVASCRIPT_CODING_DATA];
        break;
      case 'HTML':
        filterTechnologie = [...HTML_CODING_QUESTIONS];
        break;
      case 'CSS':
        filterTechnologie = [...CSS_CODING_QUESTIONS];
        break;
      case 'RxJS':
        filterTechnologie = [...RXJS_CODING_QUESTIONS];
        break;
    }
    return filterTechnologie.filter((val: any) => val.technology == technology)
  }

  getAllQuestions() {
    return [
      ...ANGULAR_CODING_QUESTIONS,
      ...JAVASCRIPT_CODING_DATA,
      ...HTML_CODING_QUESTIONS,
      ...CSS_CODING_QUESTIONS,
      ...RXJS_CODING_QUESTIONS
    ];

  }
}
