import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullMatchComponent } from './full-match.component';

describe('FullMatchComponent', () => {
  let component: FullMatchComponent;
  let fixture: ComponentFixture<FullMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
