import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiconnectComponent } from './diconnect.component';

describe('DiconnectComponent', () => {
  let component: DiconnectComponent;
  let fixture: ComponentFixture<DiconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
