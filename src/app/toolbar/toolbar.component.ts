import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { DarkModeService } from '../services/darkmode.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  themes: string[];

  constructor(
    private sidenavService: SidenavService,
    private theming: DarkModeService
  ) { }

  ngOnInit() {
    this.themes = this.theming.themes;
  }

  changeTheme(theme: string) {
    this.theming.theme.next(theme);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
