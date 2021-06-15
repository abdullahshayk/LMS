import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  public quizs: any = [];
  

  constructor(
    private dataService: DataService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getQuiz();
  }

  getQuiz(): void {
    this.dataService.viewQuiz().subscribe(
      (data) => {
        this.quizs = data;
      },
      (err) => {
        this.flashMessage.show('Server error, please try again.', {
          cssClass: 'alert-danger',
          timeout: 3000,
        });
        console.error(err);
      }
    );
  }

}
