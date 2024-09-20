import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrderComponent } from './create-prder.component';

describe('CreatePrderComponent', () => {
  let component: CreatePrderComponent;
  let fixture: ComponentFixture<CreatePrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
