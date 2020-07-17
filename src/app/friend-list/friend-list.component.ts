import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Friend } from "./friend.model";
import { Family } from '../family-list/family.model';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  @Input()
  friend: Friend;

  constructor() { }

  @Output()
  friendClicked: EventEmitter<Friend> = new EventEmitter<Friend>();

  showFriend() {
    this.friendClicked.emit(this.friend);
  }

  showName() {
    console.log(this.friend.name)
  }

  ngOnInit(): void {
    console.log("Here:",this.friend)
  }
}

