import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratoDiaPage } from './prato-dia.page';

describe('PratoDiaPage', () => {
  let component: PratoDiaPage;
  let fixture: ComponentFixture<PratoDiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PratoDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
