import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsInBucket: number;
  goalText: string = 'Goals List';
  goals = [];


  constructor() {
  }

  ngOnInit() {
    this.itemsInBucket = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemsInBucket = this.goals.length;


  }

  delItem() {
    this.goals.pop();
    this.goalText = '';
    this.itemsInBucket = this.goals.length;

  }
}
