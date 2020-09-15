import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  greetings = [
    'Welcome to my corner of the internet',
    'You found me!',
    'You were looking for me?',
    "Codemaster Mick, at your service",
    "What can I do for you today?",
  ];

  greeting: string;

  constructor() {}

  ngOnInit(): void {
    this.greeting = this.greetings[~~(Math.random() * this.greetings.length)];
  }
}
