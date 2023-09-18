import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmballageItemComponent } from './emballage-item.component';

describe('EmballageItemComponent', () => {
  let component: EmballageItemComponent;
  let fixture: ComponentFixture<EmballageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmballageItemComponent]
    });
    fixture = TestBed.createComponent(EmballageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
