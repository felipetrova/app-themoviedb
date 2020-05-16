import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliadosComponent } from './avaliados.component';

describe('AvaliadosComponent', () => {
  let component: AvaliadosComponent;
  let fixture: ComponentFixture<AvaliadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
