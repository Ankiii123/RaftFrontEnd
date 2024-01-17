import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftNavbarComponent } from './raft-navbar.component';

describe('RaftNavbarComponent', () => {
  let component: RaftNavbarComponent;
  let fixture: ComponentFixture<RaftNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaftNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaftNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
