import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gmail='gmahesh030299@gmail.com';
  technologies:any=[];
  constructor(private questionService:QuestionService){}

  ngOnInit(){
    this.technologies = this.questionService.getTechnologys();
  }
}
