import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixMatchComponent } from './prefix-match.component';

describe('PrefixMatchComponent', () => {
  let component: PrefixMatchComponent;
  let fixture: ComponentFixture<PrefixMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrefixMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefixMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
