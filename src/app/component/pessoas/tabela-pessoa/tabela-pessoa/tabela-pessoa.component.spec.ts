import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPessoaComponent } from './tabela-pessoa.component';

describe('TabelaPessoaComponent', () => {
  let component: TabelaPessoaComponent;
  let fixture: ComponentFixture<TabelaPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
