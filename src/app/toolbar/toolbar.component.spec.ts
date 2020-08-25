import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { SidenavService } from '../sidenav/sidenav.service';
import { MatMenuModule } from '@angular/material/menu';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      providers: [SidenavService],
      declarations: [ToolbarComponent],
      imports: [MatMenuModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a light and dark theme', () => {
    expect(component.themes.length).toEqual(2);
  });

  // it('should have a theme switcher', () => {
  //   // find button trigger for mat-menu
  //   // check button text for 'Change theme'
  // });
});
