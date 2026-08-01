import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss'
})
export class QuestionDetailsComponent {
  question!: any;
  copied = false;
  constructor(private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) { }

  ngOnInit() {
    const id: any = Number(this.route.snapshot.paramMap.get('id'));
    this.question = this.questionService.getQuestionById(id);
  }
  goToQuestioPage() {
    this.router.navigate(['/questions'])
  }
  copyCode() {
    navigator.clipboard.writeText(this.question.code);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);

  }
}
