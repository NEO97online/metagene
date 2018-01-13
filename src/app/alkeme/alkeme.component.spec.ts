import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkemeComponent } from './alkeme.component';

describe('AlkemeComponent', () => {
  let component: AlkemeComponent;
  let fixture: ComponentFixture<AlkemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlkemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlkemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
