import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLayoutComponent } from './old-layout.component';

describe('OldLayoutComponent', () => {
  let component: OldLayoutComponent;
  let fixture: ComponentFixture<OldLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
