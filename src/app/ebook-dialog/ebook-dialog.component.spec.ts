import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookDialogComponent } from './ebook-dialog.component';

describe('EbookDialogComponent', () => {
  let component: EbookDialogComponent;
  let fixture: ComponentFixture<EbookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
