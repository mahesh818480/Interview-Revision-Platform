import { Injectable } from '@angular/core';
import { QUESTIONS } from '../data/question-data';

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

  getQuestions() {
    return QUESTIONS;
  }

  getTechnologys(){
    return this.technologies;
  }

  getQuestionById(id: number) {
    return QUESTIONS.find(question => question.id === id);
  }
  getQuestionsByCompany(company: string) {
    return QUESTIONS.filter(
      question => question.companies.includes(company));
  }
  getQuestionCategory(technology: string){
    return QUESTIONS.filter(val => val.technology == technology)
  }
}
