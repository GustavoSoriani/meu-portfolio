import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import * as detalhesPage from './detalhes.page';

describe('DetalhesPage', () => {
  let component: detalhesPage.DetalhesPage;
  let fixture: ComponentFixture<detalhesPage.DetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(detalhesPage.DetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
