import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingAppComponent } from './greeting-app.component';

describe('GreetingAppComponent', () => {
  let component: GreetingAppComponent;
  let fixture: ComponentFixture<GreetingAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
