import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  age=Number.parseInt(
    formatDate(new Date(), 'yyyy/MM/dd', 'en')
  )-1986;

  dAge=Number.parseInt(
    formatDate(new Date(), 'yyyy/MM/dd', 'en')
  )-2014;
  eAge=Number.parseInt(
    formatDate(new Date(), 'yyyy/MM/dd', 'en')
  )-2017;

  constructor() {
    
  }

  ngOnInit(): void {}
}
