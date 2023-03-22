import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBattleComponent } from './joke-battle.component';

describe('JokeBattleComponent', () => {
  let component: JokeBattleComponent;
  let fixture: ComponentFixture<JokeBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
