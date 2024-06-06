import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegFoodsComponent } from './nonveg-foods.component';

describe('NonvegFoodsComponent', () => {
  let component: NonvegFoodsComponent;
  let fixture: ComponentFixture<NonvegFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NonvegFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NonvegFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
