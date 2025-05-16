import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAnEssayComponent } from './write-an-essay.component';

describe('WriteAnEssayComponent', () => {
  let component: WriteAnEssayComponent;
  let fixture: ComponentFixture<WriteAnEssayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteAnEssayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriteAnEssayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
