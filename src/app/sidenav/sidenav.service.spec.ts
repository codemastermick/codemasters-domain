import { TestBed } from '@angular/core/testing';
import {async} from '@angular/core/testing';
import { SidenavService } from './sidenav.service';

describe('SidenavService', () => {
  let service: SidenavService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [SidenavService],
    });
    service = TestBed.inject(SidenavService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
