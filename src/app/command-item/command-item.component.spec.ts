import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandItemComponent } from './command-item.component';

describe('CommandItemComponent', () => {
  let component: CommandItemComponent;
  let fixture: ComponentFixture<CommandItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandItemComponent]
    });
    fixture = TestBed.createComponent(CommandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
