import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>CONTADOR</h1>
    <button (click)="sumar()">+</button>
    <button (click)="restar()">-</button>
    <p>{{ contador() }}</p>
  `,
  styleUrls: ['./app.scss']
})
export class App {
  protected contador = signal<number>(0);

  sumar(): void { this.contador.update(v => v + 1); }
  restar(): void { this.contador.update(v => v - 1); }
}
