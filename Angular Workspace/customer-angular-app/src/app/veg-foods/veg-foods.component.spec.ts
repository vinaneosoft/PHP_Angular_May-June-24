import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegFoodsComponent } from './veg-foods.component';

describe('VegFoodsComponent', () => {
  let component: VegFoodsComponent;
  let fixture: ComponentFixture<VegFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegFoodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VegFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
