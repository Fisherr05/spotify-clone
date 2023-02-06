import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from './card-player.component';
import { SharedModule } from '@shared/shared.module';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [ CardPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
