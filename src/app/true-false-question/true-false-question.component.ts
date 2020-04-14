import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', correct: ''}

  @Input()
  answer = ''
  questionId = ''
  @Output()
  answerChange = new EventEmitter<string>()
  submitAnswer = () =>{
    this.answerChange.emit(this.answer)
    console.log(this.answer)
  }



  ngOnInit(): void {
  }

}
