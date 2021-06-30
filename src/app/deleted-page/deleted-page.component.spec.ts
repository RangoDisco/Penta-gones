import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedPageComponent } from './deleted-page.component';

describe('DeletedPageComponent', () => {
  let component: DeletedPageComponent;
  let fixture: ComponentFixture<DeletedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
