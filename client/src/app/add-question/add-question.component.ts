import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public description: any = '';
  public alternative: any = [];
  public serverResponse: any = '';


  constructor(
    private dataService: DataService,
    private flashMessage: FlashMessagesService

  ) {
      
   }

  ngOnInit(): void {
  }
  validate(): boolean {
    if (!this.description) {
      return false;
    }
    for(let i=0;i<4;i++){
      if(!this.alternative[i]){
        return false;
      }
    }
    return true;
  }

  addQuestion(): void {
    if(this.validate()){
    
  let question = {
    description:this.description,

    alternatives: [
      {
      text: this.alternative[0]
      
      },
      {
      text: this.alternative[1]
      },
      {
      text: this.alternative[2]
      },
      {
      text: this.alternative[3]
      },
     
      ],
  }

  this.dataService.addQuestion(question).subscribe(
    (data) => {
      this.serverResponse = data;
      this.flashMessage.show('Question addded to the Added to quiz', {
        cssClass: 'alert-success',
        timeout: 3000,
      });
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
  else{
  alert("Empty Fields!!")
  }
  
}

}
