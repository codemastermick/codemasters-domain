import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DemoMaterialModule } from './material-module';
import { DarkModeService } from './services/darkmode.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectViewComponent } from './pages/project-view/project-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    ProjectCardComponent,
    ProjectViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
  ],
  providers: [SidenavService, DarkModeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
