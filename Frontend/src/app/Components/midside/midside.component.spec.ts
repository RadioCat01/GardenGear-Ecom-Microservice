import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidsideComponent } from './midside.component';

describe('MidsideComponent', () => {
  let component: MidsideComponent;
  let fixture: ComponentFixture<MidsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MidsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
