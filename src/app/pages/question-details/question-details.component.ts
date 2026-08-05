import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [CommonModule],
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
    const technology = this.route.snapshot.paramMap.get('technology')!;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.question = this.questionService.getQuestionById(
      technology,
      id
    );
  }
  goToQuestioPage() {
    // this.router.navigate(['/questions'])
    this.router.navigate(['/questions'], {
      queryParams: {
        technology: this.route.snapshot.queryParamMap.get('technology')
      }
    });
  }
  copyCode() {
    navigator.clipboard.writeText(this.question.code);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);

  }
}
