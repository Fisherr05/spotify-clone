import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from '@modules/home/home-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, HomeRoutingModule,RouterTestingModule],
      declarations: [HomePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
