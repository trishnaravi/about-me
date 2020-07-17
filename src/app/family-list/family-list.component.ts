import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Family } from "./family.model";

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {
  @Input()
  family: Family;

  constructor() { }

  @Output()
  familyClicked: EventEmitter<Family> = new EventEmitter<Family>();

  showFamily() {
    this.familyClicked.emit(this.family);
  }

  showName() {
    console.log(this.family.name)
  }

  ngOnInit(): void {
    console.log("Here:",this.family)
  }

}
