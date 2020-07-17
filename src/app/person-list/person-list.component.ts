import { Component, OnInit } from '@angular/core';
import { Family } from '../family-list/family.model';
import { FAMILY } from './family.data'
import { Friend } from '../friend-list/friend.model';
import { FRIEND } from './friend.data'
import { Hobby } from '../hobbies-list/hobby.model';
import { HOBBY } from './hobbies.data'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  familyArray: Family[]
  friendArray: Friend[]
  hobbyArray: Hobby[]
  constructor() { }

  ngOnInit(): void {
    this.familyArray = FAMILY
    this.friendArray = FRIEND
    this.hobbyArray = HOBBY
  }

  parentFamilyFunctionHandler(family) {
    alert('Person ' + family.name + ' was sent from the family-list component');
  }

  parentFriendFunctionHandler(friend) {
    alert('Person ' + friend.name + ' was sent from the friend-list component');
  }

  parentHobbyFunctionHandler(hobby) {
    console.log('Hobby is' + hobby.name)
  }
}
