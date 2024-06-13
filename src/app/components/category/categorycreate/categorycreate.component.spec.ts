import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreateComponent } from './categorycreate.component';

describe('CategorycreateComponent', () => {
  let component: CategoryCreateComponent;
  let fixture: ComponentFixture<CategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
