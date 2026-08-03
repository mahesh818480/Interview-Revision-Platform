import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuestionDetailsComponent } from './pages/question-details/question-details.component';
import { QuizPlayComponent } from './pages/quiz-play/quiz-play.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'companies',
        component: CompaniesComponent
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: 'questions-details/:id',
        component: QuestionDetailsComponent
    },
    {
        path: 'quiz/play',
        component: QuizPlayComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
