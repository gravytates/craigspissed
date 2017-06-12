import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitchComponent } from './bitch.component';

describe('BitchComponent', () => {
  let component: BitchComponent;
  let fixture: ComponentFixture<BitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
