import { Component, EventEmitter, Output,  } from '@angular/core';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  @Output() Word = new EventEmitter<string>();
  inputWorld = '';

  evenOddWorld() {
    this.Word.emit(this.inputWorld)
    this.inputWorld = '';
  }
  

}
