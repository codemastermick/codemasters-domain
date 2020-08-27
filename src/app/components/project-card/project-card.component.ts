import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  @Input() projecturl:string;
  @Input() avatarurl:string;
  @Input() logoW:number;
  @Input() logoH:number;

  constructor() { }

  ngOnInit(): void {
  }

}
