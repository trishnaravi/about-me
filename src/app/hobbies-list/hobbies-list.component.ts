import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hobby} from './hobby.model'

@Component({
  selector: 'app-hobbies-list',
  templateUrl: './hobbies-list.component.html',
  styleUrls: ['./hobbies-list.component.css']
})
export class HobbiesListComponent implements OnInit {

  @Input()
  hobby: Hobby
  constructor() { }

  @Output()
  hobbyClicked: EventEmitter<Hobby> = new EventEmitter<Hobby>();

  showFriend() {
    this.hobbyClicked.emit(this.hobby);
  }

  showName() {
    console.log(this.hobby.name)
  }

  ngOnInit(): void {
    console.log("Here:",this.hobby)
  }

}
